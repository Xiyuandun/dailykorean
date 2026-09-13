// DailyKorean - 模块二：场景对话（中文+韩语对照学习、可朗读；考核=按中文默写韩语）
// 说明：本模块不含录音 / 语音识别。学习页展示中韩对照并可逐句/整段朗读（TTS），
//       考核页要求根据中文默写出韩语句子，全部正确即完成本场景。
const DialogueModule = {
  idx: 0,            // 当前场景索引
  page: 'study',     // 'study' = 学习页，'quiz' = 默写考核页
  showKo: false,     // 学习页是否已显示韩语对照
  completed: new Set(),
  inputs: {},        // turnIndex → 用户输入

  init() {
    this.idx = 0;
    this.completed = new Set();
    this.startScene();
  },

  renderTabs() {
    const wrap = document.getElementById('sceneTabs');
    if (!wrap) return;
    wrap.innerHTML = '';
    window.DAILY_SCENARIOS.forEach((s, i) => {
      const b = document.createElement('button');
      const done = this.completed.has(i);
      b.className = `px-3 py-1.5 rounded-lg whitespace-nowrap text-sm ${i === this.idx ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-700'} ${done ? 'ring-2 ring-emerald-400' : ''}`;
      b.textContent = `${done ? '✓ ' : ''}${s.scene}`;
      b.onclick = () => { this.idx = i; this.startScene(); };
      wrap.appendChild(b);
    });
  },

  // 场景文案（兼容数据字段：优先 ko，其次 en）
  koOf(t) {
    return t.ko || t.en || '';
  },

  startScene() {
    Speech.stop();
    this.page = 'study';
    this.showKo = false;
    this.inputs = {};
    this.renderTabs();
    this.render();
  },

  render() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const c = document.getElementById('sceneContent');
    c.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <div>
          <div class="text-xs text-slate-500">场景 ${this.idx + 1} / ${window.DAILY_SCENARIOS.length} · 共 ${s.turns.length} 句</div>
          <h3 class="text-lg font-bold">${s.scene}</h3>
        </div>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2 mb-2">
        <div class="text-xs text-amber-700 dark:text-amber-400 mb-0.5">💬 情境提示</div>
        <div class="font-medium text-sm leading-tight">${s.situationZh}</div>
      </div>
      <div id="pageArea" class="min-h-[200px]"></div>
      <div class="flex justify-between mt-3">
        <button id="prevScene" class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">← 上一个场景</button>
        <button id="restartScene" class="px-4 py-2 rounded-lg bg-amber-500 text-white">↻ 重新开始</button>
        <button id="nextScene" class="px-4 py-2 rounded-lg bg-brand-600 text-white">下一个场景 →</button>
      </div>
    `;
    document.getElementById('prevScene').onclick = () => this.nav(-1);
    document.getElementById('nextScene').onclick = () => this.nav(1);
    document.getElementById('restartScene').onclick = () => this.startScene();
    this.renderPage();
  },

  renderPage() {
    if (this.page === 'study') this.renderStudy();
    else this.renderQuiz();
  },

  // 学习页：中韩对照 + 朗读
  renderStudy() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const turns = s.turns.map((t, i) => {
      const isUser = t.role === 'user';
      const align = isUser ? 'justify-end' : 'justify-start';
      const bubble = isUser
        ? 'bg-brand-100 dark:bg-brand-900/40 border-brand-300 dark:border-brand-700 rounded-tr-sm'
        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 rounded-tl-sm';
      const name = isUser ? s.roles.user : s.roles.clerk;
      return `
        <div class="flex ${align} word-pop">
          <div class="max-w-[85%] ${bubble} border rounded-lg p-2 shadow-sm">
            <div class="text-[10px] text-slate-400 leading-tight">${name}</div>
            <div class="font-medium text-sm leading-tight">${t.zh}</div>
            ${this.showKo ? `
              <div class="text-[15px] font-semibold text-brand-700 dark:text-brand-300 leading-snug mt-1">${this.koOf(t)}</div>
              ${t.phonetic ? `<div class="text-xs text-slate-400 dark:text-slate-500 leading-tight mt-0.5">${t.phonetic}</div>` : ''}
              <div class="flex items-center gap-2 mt-1.5">
                <button id="sayKo_${i}" class="text-xs px-2 py-1 rounded-full bg-brand-600 text-white">🔊 朗读</button>
              </div>` : ''}
          </div>
        </div>`;
    }).join('');
    const pageArea = document.getElementById('pageArea');
    pageArea.innerHTML = `
      <div class="space-y-1 mb-2">${turns}</div>
      <div class="border-t border-slate-200 dark:border-slate-700 pt-2">
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2 mb-2">
          <div class="text-sm font-medium mb-1">📖 学习提示</div>
          ${this.showKo
            ? '<div class="text-sm text-slate-500 dark:text-slate-400">对照中文，看韩语怎么说。可点击每句的 🔊 朗读按钮听发音，也可以点击下方"朗读整段"。</div>'
            : `<div class="text-sm text-slate-500 dark:text-slate-400">先理解中文对话的意思，再点击下方"显示韩语"，对照学习每句韩语表达。</div>`}
        </div>
        <div class="flex flex-wrap gap-2 justify-center">
          ${this.showKo ? '<button id="hideKo" class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">🙈 隐藏韩语</button>' : '<button id="showKo" class="px-4 py-2 rounded-lg bg-brand-600 text-white">👀 显示韩语对照</button>'}
          <button id="replayAll" class="px-4 py-2 rounded-lg bg-emerald-600 text-white">🔊 朗读整段</button>
          <button id="stopAll" class="px-4 py-2 rounded-lg bg-red-500 text-white">⏹️ 停止</button>
          <button id="toQuiz" class="px-5 py-2 rounded-lg ${this.showKo ? 'bg-indigo-600 text-white' : 'bg-slate-300 dark:bg-slate-600 text-slate-700 dark:text-slate-200'}">✏️ 进入默写考核 →</button>
        </div>
      </div>
    `;
    s.turns.forEach((_, i) => {
      const sb = document.getElementById(`sayKo_${i}`);
      if (sb) sb.onclick = () => Speech.speak(this.koOf(s.turns[i]));
    });
    if (this.showKo) {
      document.getElementById('hideKo').onclick = () => { this.showKo = false; this.renderStudy(); };
      document.getElementById('toQuiz').classList.remove('bg-slate-300', 'dark:bg-slate-600', 'text-slate-700', 'dark:text-slate-200', 'opacity-50');
    } else {
      document.getElementById('showKo').onclick = () => { this.showKo = true; this.renderStudy(); };
    }
    document.getElementById('replayAll').onclick = () => Speech.speakQueue(s.turns.map(t => this.koOf(t)));
    document.getElementById('stopAll').onclick = () => Speech.stop();
    document.getElementById('toQuiz').onclick = () => { this.page = 'quiz'; this.renderPage(); };
  },

  // 考核页：按中文默写韩语
  renderQuiz() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const rows = s.turns.map((t, i) => {
      const isUser = t.role === 'user';
      return `
        <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg p-3 mb-2">
          <div class="flex items-center justify-between mb-1">
            <div class="text-[10px] text-slate-400">${isUser ? s.roles.user : s.roles.clerk} · 第 ${i + 1} 句</div>
            <button id="sayQ_${i}" class="text-xs px-2 py-0.5 rounded-full bg-brand-600 text-white">🔊 听一遍</button>
          </div>
          <div class="font-medium text-sm leading-tight mb-1">${t.zh}</div>
          <textarea id="qIn_${i}" rows="1" class="q-input w-full border border-slate-300 dark:border-slate-600 rounded-lg p-2 bg-white dark:bg-slate-800 text-base font-medium" placeholder="用韩语写出这句话…">${this.inputs[i] ? this.inputs[i].replace(/[↵\n]/g, ' ') : ''}</textarea>
          <div id="qRes_${i}" class="mt-1 text-xs"></div>
        </div>`;
    }).join('');
    const pageArea = document.getElementById('pageArea');
    pageArea.innerHTML = `
      <div class="mb-1 text-xs text-slate-500">✏️ 默写考核 · 根据中文写出对应的韩语</div>
      <div class="space-y-0 mb-2">${rows}</div>
      <div class="text-center">
        <button id="checkQuiz" class="px-5 py-2 rounded-lg bg-indigo-600 text-white font-medium">✅ 检查答案</button>
        <button id="backStudy" class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 ml-2">← 回到学习</button>
      </div>
    `;
    s.turns.forEach((_, i) => {
      const sb = document.getElementById(`sayQ_${i}`);
      if (sb) sb.onclick = () => Speech.speak(this.koOf(s.turns[i]));
      const inp = document.getElementById(`qIn_${i}`);
      if (inp) inp.onkeydown = (e) => { if (e.key === 'Enter') this.perLine(i); };
    });
    document.getElementById('checkQuiz').onclick = () => this.checkAll();
    document.getElementById('backStudy').onclick = () => { this.page = 'study'; this.renderPage(); };
  },

  // 规范化比较：去空格、标点、空白与换行
  _norm(s) {
    return (s || '').replace(/[\s\u3000，。！？、；：""''（）a-zA-Z·-]/g, '').toLowerCase();
  },

  perLine(i) {
    const inp = document.getElementById(`qIn_${i}`);
    const res = document.getElementById(`qRes_${i}`);
    if (!inp || !res) return;
    const s = window.DAILY_SCENARIOS[this.idx];
    const ans = this.koOf(s.turns[i]);
    const right = this._norm(inp.value) === this._norm(ans);
    this.inputs[i] = inp.value;
    res.innerHTML = right
      ? '<span class="text-emerald-600">✓ 正确</span>'
      : `<span class="text-red-500">✗ 参考答案：${ans}</span>`;
    if (right) {}
  },

  checkAll() {
    const s = window.DAILY_SCENARIOS[this.idx];
    let right = 0;
    s.turns.forEach((t, i) => {
      const inp = document.getElementById(`qIn_${i}`);
      const res = document.getElementById(`qRes_${i}`);
      if (!inp) return;
      const ans = this.koOf(t);
      const ok = this._norm(inp.value) === this._norm(ans);
      this.inputs[i] = inp.value;
      if (ok) right++;
      if (res) res.innerHTML = ok
        ? '<span class="text-emerald-600">✓ 正确</span>'
        : `<span class="text-red-500">✗ 参考答案：${ans}</span>`;
    });
    const total = s.turns.length;
    if (right >= total) {
      Toast.show('🎉 本场景默写全部正确！');
      this.completeScene();
    } else {
      Toast.show(`❌ 正确 ${right}/${total} 句，对照参考答案再试一次`);
      // 标记当前场景已完成但未全对：不调用 recordTask
    }
  },

  completeScene() {
    if (!this.completed.has(this.idx)) {
      this.completed.add(this.idx);
      this.renderTabs();
      if (this.completed.size >= window.DAILY_SCENARIOS.length) {
        Store.recordTask('dialogue');
        Toast.show('🎉 全部场景对话完成！+20 积分');
      } else {
        Toast.show('✓ 场景完成');
      }
    }
  },

  nav(dir) {
    const n = window.DAILY_SCENARIOS.length;
    this.idx = (this.idx + dir + n) % n;
    this.startScene();
  }
};