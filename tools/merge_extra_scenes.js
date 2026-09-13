// 合并 extra_scenes/group*.json 的新场景到 data/days.js
const fs = require('fs');
const path = require('path');

const DAYS_JS = '/workspace/dailykorean/data/days.js';
const SCENE_DIR = '/workspace/dailykorean/tools/extra_scenes';

// 读取 days.js，将 window.DAY_PLAN 替换为 module.exports 以便 require
let src = fs.readFileSync(DAYS_JS, 'utf8');
const tpl = src.replace('window.DAY_PLAN =', 'module.exports =');
fs.writeFileSync('/tmp/_dayplan_load.js', tpl);
const plan = require('/tmp/_dayplan_load.js');

if (!Array.isArray(plan) || plan.length !== 30) {
  throw new Error('DAY_PLAN 天数异常: ' + plan.length);
}

// 加载分组
const groups = {};
for (const fp of fs.readdirSync(SCENE_DIR)) {
  if (!/^group\d+\.json$/.test(fp)) continue;
  Object.assign(groups, JSON.parse(fs.readFileSync(path.join(SCENE_DIR, fp), 'utf8')));
}

for (let n = 1; n <= 30; n++) {
  const key = 'day' + n;
  const extra = groups[key];
  if (!Array.isArray(extra) || extra.length !== 3) throw new Error(key + ' 需恰 3 个场景，实际 ' + (extra ? extra.length : '无'));
  const day = plan[n - 1];
  for (const sc of extra) {
    if (!sc.scene || !Array.isArray(sc.turns)) throw new Error(key + ' 场景缺字段');
    for (const t of sc.turns) {
      if (!t.role || !t.ko || !t.phonetic || !t.zh) throw new Error(key + ' 对话缺字段: ' + JSON.stringify(t));
    }
    day.scenarios.push(sc);
  }
}

// 序列化前缀保持原样（首行注释 + window.DAY_PLAN =），结构紧凑或缩进均可，这里用缩进便于阅读
const header = '// DailyKorean - 韩语 30 天每日内容周期数据源（由 tools/gen_days_template.py 生成，请勿手改）';
const out = header + '\nwindow.DAY_PLAN = ' + JSON.stringify(plan, null, 2) + ';\n';
fs.writeFileSync(DAYS_JS, out, 'utf8');

// 最终校验
let bad = 0;
for (let i = 0; i < plan.length; i++) {
  const d = plan[i];
  if (d.scenarios.length !== 5) { console.log('day' + (i + 1) + ' scenarios=' + d.scenarios.length); bad++; }
  d.scenarios.forEach(sc => { if (sc.turns.length < 6) { console.log('day' + (i + 1) + ' 某场景轮次<6'); bad++; } });
}
console.log(bad === 0 ? 'ALL OK: 30 天各 5 场景，每场景>=6 句' : ('存在问题 ' + bad));
fs.unlinkSync('/tmp/_dayplan_load.js');