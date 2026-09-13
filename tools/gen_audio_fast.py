#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""并发版韩语预置音频生成（edge-tts SunHi），比逐个快数倍。
用法：
  python3 tools/gen_audio_fast.py [--voice ko-KR-SunHiNeural] [--concurrency 12] [--limit N]
  --limit: 可选，只生成前 N 条（用于冒烟测试）；省略则全量。
"""
import argparse
import asyncio
import hashlib
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_PROXY = (os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy') or
          os.environ.get('HTTP_PROXY') or os.environ.get('http_proxy'))


def norm(t: str) -> str:
    return re.sub(r'\s+', ' ', (t or '').strip()).lower()


def extract_plan() -> list:
    extractor = r"""
      const fs=require('fs'); const vm=require('vm');
      let js=fs.readFileSync(process.argv[1],'utf8');
      js=js.replace('window.DAY_PLAN =','module.exports =');
      const m={exports:{}}; vm.runInNewContext(js,{module:m,exports:m.exports});
      process.stdout.write(JSON.stringify(m.exports));
    """
    path = os.path.join(ROOT, 'data', 'days.js')
    proc = subprocess.run(['node', '-e', extractor, path], capture_output=True, text=True)
    if proc.returncode != 0:
        raise SystemExit('node 提取 days.js 失败：\n' + proc.stderr)
    return json.loads(proc.stdout)


def collect_texts(plan: list) -> dict:
    texts = {}
    for day in plan:
        for w in day.get('words', []):
            texts.setdefault(norm(w['word']), w['word'])
        for p in day.get('article', {}).get('paragraphs', []):
            texts.setdefault(norm(p['en']), p['en'])
        for sc in day.get('scenarios', []):
            for t in sc.get('turns', []):
                s = t.get('ko') or t.get('en')
                if s:
                    texts.setdefault(norm(s), s)
    return texts


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--voice', default='ko-KR-SunHiNeural')
    ap.add_argument('--concurrency', type=int, default=12)
    ap.add_argument('--limit', type=int, default=0)
    args = ap.parse_args()

    import edge_tts
    plan = extract_plan()
    texts = collect_texts(plan)
    items = list(texts.items())
    if args.limit:
        items = items[:args.limit]
    print(f'共 {len(items)} 条待生成，并发 {args.concurrency}（{args.voice}）')

    audio_dir = os.path.join(ROOT, 'audio')
    os.makedirs(audio_dir, exist_ok=True)
    mapping = {}
    sem = asyncio.Semaphore(args.concurrency)
    done = [0]
    failed = []
    covered = 0

    async def gen_one(key, text):
        fname = hashlib.sha1(key.encode('utf-8')).hexdigest()[:16] + '.mp3'
        fpath = os.path.join(audio_dir, fname)
        if os.path.exists(fpath) and os.path.getsize(fpath) >= 500:
            mapping[key] = fname
            return True
        for attempt in range(4):  # 最多重试 4 次（含首次）
            try:
                c = edge_tts.Communicate(text, args.voice, proxy=_PROXY,
                                         connect_timeout=20, receive_timeout=40)
                await c.save(fpath)
                if os.path.exists(fpath) and os.path.getsize(fpath) >= 500:
                    mapping[key] = fname
                    return True
            except Exception as e:
                await asyncio.sleep(0.8 * (attempt + 1))
        failed.append(text)
        return False

    async def worker(item):
        async with sem:
            return await gen_one(*item)

    # 分批并发推进，避免一次创建 1283 个 task
    BATCH = args.concurrency * 4
    for start in range(0, len(items), BATCH):
        chunk = items[start:start + BATCH]
        results = await asyncio.gather(*(worker(it) for it in chunk))
        done[0] += sum(1 for r in results if r)
        print(f'  进度 {min(start+BATCH, len(items))}/{len(items)} (成功 {done[0]})', flush=True)

    # 写入 audio.js 清单
    js = ('// DailyKorean - 韩语预置音频清单（由 tools/gen_audio_fast.py 自动生成，请勿手改）\n'
          'window.STATIC_AUDIO = ' + json.dumps({'normal': mapping}, ensure_ascii=False) + ';\n')
    out = os.path.join(ROOT, 'data', 'audio.js')
    with open(out, 'w', encoding='utf-8') as f:
        f.write(js)
    print(f'完成：成功 {len(mapping)}/{len(items)}，失败 {len(failed)} 条 → {out}')
    if failed:
        print('失败样例：', failed[:10])


if __name__ == '__main__':
    asyncio.run(main())