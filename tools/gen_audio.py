#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
DailyKorean 韩语预置音频生成工具（edge-tts，SunHi 韩语女声）。
运行一次后，data/audio.js 会生成待读文本清单，audio/ 下生成对应 MP3，
网页运行时直接播放本地 MP3，离线、零后端、音质自然。
  - 默认语音 ko-KR-SunHiNeural（女声）；如需男声：python3 tools/gen_audio.py ko-KR-InJoonNeural
  说明：生成阶段会联网访问微软 edge-tts（仅制作期需要；网页运行期不再依赖任何服务）。
  若在代理环境运行，会自动读取 HTTPS_PROXY/http_proxy 环境变量。
"""
import asyncio
import hashlib
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICE = sys.argv[1] if len(sys.argv) > 1 else 'ko-KR-SunHiNeural'
# 读取当前环境的代理（若有）以便访问微软服务
_PROXY = os.environ.get('HTTPS_PROXY') or os.environ.get('https_proxy') or \
         os.environ.get('HTTP_PROXY') or os.environ.get('http_proxy')


def norm(t: str) -> str:
    # 与前端 speech.js _staticAudioPath 的 key 规范化保持一致
    return re.sub(r'\s+', ' ', (t or '').strip()).lower()


def extract_plan() -> list:
    """用 node 把 data/days.js 里的 window.DAY_PLAN 提取为 JSON。"""
    extractor = r"""
      const fs=require('fs'); const vm=require('vm');
      let js=fs.readFileSync(process.argv[1],'utf8');
      js=js.replace('window.DAY_PLAN =','module.exports =');
      const m={exports:{}}; vm.runInNewContext(js,{module:m,exports:m.exports});
      process.stdout.write(JSON.stringify(m.exports));
    """
    path = os.path.join(ROOT, 'data', 'days.js')
    proc = subprocess.run(['node', '-e', extractor, path],
                          capture_output=True, text=True)
    if proc.returncode != 0:
        raise SystemExit('node 提取 days.js 失败：\n' + proc.stderr)
    return json.loads(proc.stdout)


def collect_texts(plan: list) -> dict:
    """返回 {规范key: 原文}，覆盖：单词 word、文章每段、对话每句。"""
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
    plan = extract_plan()
    texts = collect_texts(plan)
    if not texts:
        raise SystemExit('未从 days.js 提取到任何可朗读文本，请检查数据。')

    audio_dir = os.path.join(ROOT, 'audio')
    os.makedirs(audio_dir, exist_ok=True)
    mapping = {}   # 规范key -> 文件名
    lst = list(texts.items())
    print(f'发现 {len(lst)} 条文本，开始生成（{VOICE}）…')

    for i, (key, text) in enumerate(lst, 1):
        fname = hashlib.sha1(key.encode('utf-8')).hexdigest()[:16] + '.mp3'
        fpath = os.path.join(audio_dir, fname)
        if not os.path.exists(fpath) or os.path.getsize(fpath) < 500:
            c = edge_tts.Communicate(text, VOICE, proxy=_PROXY,
                                     connect_timeout=30, receive_timeout=60)
            await c.save(fpath)
        mapping[key] = fname
        if i % 10 == 0 or i == len(lst):
            print(f'  {i}/{len(lst)}')
        await asyncio.sleep(0.5)  # 温和节流，避免频繁请求被限流

    # 写入 data/audio.js 清单
    js = ('// DailyKorean - 韩语预置音频清单（由 tools/gen_audio.py 自动生成，请勿手改）\n'
          'window.STATIC_AUDIO = ' + json.dumps({'normal': mapping}, ensure_ascii=False) + ';\n')
    out = os.path.join(ROOT, 'data', 'audio.js')
    with open(out, 'w', encoding='utf-8') as f:
        f.write(js)

    print(f'✔ 完成：生成 {len(mapping)} 条 MP3 → audio/，清单 → {out}')


if __name__ == '__main__':
    import edge_tts
    asyncio.run(main())