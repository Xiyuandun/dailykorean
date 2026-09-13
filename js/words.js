// DailyEnglish - 模块一：单词训练
const WordModule = {
  idx: 0,
  score: 0,
  quizIdx: 0,
  quizAnswers: [],

  init() {
    const s = Store.get();
    this.idx = s.wordIndex || 0;
    this.score = 0;
    // 用当天的实际单词数量填充各处"总数"显示（标题/进度/完成页）
    const total = (Array.isArray(window.DAILY_WORDS) && window.DAILY_WORDS.length) || 10;
    for (const id of ['wordTotalTitle', 'wordProgressTotal', 'wordTotalDone']) {
      const el = document.getElementById(id);
      if (el) el.textContent = total;
    }
    document.getElementById('prevWord').onclick = () => this.prev();
    document.getElementById('nextWord').onclick = () => this.next();
    document.getElementById('downloadPdf').onclick = () => this.downloadPdf();
    if (s.wordQuizDone) {
      this.showDone();
    } else if (this.idx >= window.DAILY_WORDS.length) {
      this.startQuiz();
    } else {
      this.render();
    }
  },

  render() {
    const w = window.DAILY_WORDS[this.idx];
    if (!w) { this.startQuiz(); return; }
    const total = window.DAILY_WORDS.length;
    document.getElementById('wordProgress').textContent = `${this.idx + 1} / ${total}`;
    document.getElementById('wordBar').style.width = `${((this.idx + 1) / total) * 100}%`;
    const card = document.getElementById('wordCard');
    card.classList.remove('word-pop'); void card.offsetWidth; card.classList.add('word-pop');
    card.innerHTML = `
      <div class="mb-4">
        <div class="text-4xl font-bold text-brand-600 dark:text-brand-400">${w.word}</div>
        <div class="text-slate-500 dark:text-slate-400 mt-1">${w.phonetic}</div>
      </div>
      <div class="flex justify-center gap-2 mb-5">
        <button id="playBtn" class="px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700">🔊 朗读</button>
        <button id="slowBtn" class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300">🐢 慢速</button>
      </div>
      <div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 mb-4">
        <div class="text-sm text-slate-500 mb-1">释义</div>
        <div class="font-medium">${w.meaning}</div>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 mb-4">
        <div class="text-sm text-amber-700 dark:text-amber-400 mb-1">例句</div>
        <div class="font-medium mb-1">${w.example}</div>
        <div class="text-sm text-slate-500">${w.exampleZh}</div>
      </div>
    `;
    document.getElementById('playBtn').onclick = () => Speech.speak(w.word);
    document.getElementById('slowBtn').onclick = () => Speech.speak(w.word, 0.6);
  },

  prev() {
    if (this.idx > 0) { this.idx--; Store.set({ wordIndex: this.idx }); this.render(); }
  },

  next() {
    this.idx++;
    Store.set({ wordIndex: this.idx });
    if (this.idx >= window.DAILY_WORDS.length) {
      this.startQuiz();
    } else {
      this.render();
    }
  },

  startQuiz() {
    document.getElementById('wordLearnView').classList.add('hidden');
    document.getElementById('wordQuizView').classList.remove('hidden');
    this.quizIdx = 0;
    this.score = 0;
    this.quizAnswers = [];
    this.renderQuiz();
  },

  renderQuiz() {
    const words = window.DAILY_WORDS;
    const total = 6;  // 6 道题
    const wrap = document.getElementById('quizContainer');
    if (this.quizIdx >= total) { this.finishQuiz(); return; }
    // 三种题型循环：0 听韩语选韩语词，1 中文选韩语词，2 听韩语选中文
    const type = this.quizIdx % 3;
    const target = words[Math.floor(Math.random() * words.length)];
    const opts = this.shuffle([target, ...this.others(target.word, 3)]);
    let html = `<div class="mb-3 text-sm text-slate-500">第 ${this.quizIdx + 1} / ${total} 题</div>`;
    window._curQ = null;

    if (type === 0) {
      // 题型一：根据韩语语音选择对应的韩语单词
      window._curQ = { answer: target.word };
      html += `<div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
        <div class="font-medium mb-3">🔊 播放韩语读音，选出你听到的韩语单词：</div>
        <button id="quizPlay" class="px-5 py-2 rounded-lg bg-brand-600 text-white mb-3">🔊 播放</button>
        <div class="grid grid-cols-2 gap-2" id="quizOpts"></div>
      </div>`;
      wrap.innerHTML = html;
      document.getElementById('quizPlay').onclick = () => Speech.speak(target.word);
      const ow0 = document.getElementById('quizOpts');
      opts.forEach(o => {
        const b = document.createElement('button');
        b.className = 'choice-btn border border-slate-300 dark:border-slate-600 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-left';
        b.textContent = o.word;
        b.onclick = () => this.answerChoice(b, o.word === target.word);
        ow0.appendChild(b);
      });
    } else if (type === 1) {
      // 题型二：根据中文翻译选择对应的韩语单词
      window._curQ = { answer: target.word };
      html += `<div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
        <div class="font-medium mb-3">根据中文意思，选择对应的韩语单词：</div>
        <div class="text-lg font-bold mb-3 text-brand-600">${target.meaning}</div>
        <div class="grid grid-cols-2 gap-2" id="quizOpts"></div>
      </div>`;
      wrap.innerHTML = html;
      const ow1 = document.getElementById('quizOpts');
      opts.forEach(o => {
        const b = document.createElement('button');
        b.className = 'choice-btn border border-slate-300 dark:border-slate-600 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-left';
        b.textContent = `${o.word}  ${o.phonetic.replace(/[\/]/g, '')}`;
        b.onclick = () => this.answerChoice(b, o.word === target.word);
        ow1.appendChild(b);
      });
    } else {
      // 题型三：根据韩语语音选择对应的中文翻译
      const cOpts = this.shuffle([target, ...this.othersByMeaning(target.meaning, 3)]);
      window._curQ = { answer: target.meaning };
      html += `<div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
        <div class="font-medium mb-3">🔊 播放韩语读音，选出对应的中文意思：</div>
        <button id="quizPlay" class="px-5 py-2 rounded-lg bg-brand-600 text-white mb-3">🔊 播放</button>
        <div class="grid grid-cols-2 gap-2" id="quizOpts"></div>
      </div>`;
      wrap.innerHTML = html;
      document.getElementById('quizPlay').onclick = () => Speech.speak(target.word);
      const ow2 = document.getElementById('quizOpts');
      cOpts.forEach(o => {
        const b = document.createElement('button');
        b.className = 'choice-btn border border-slate-300 dark:border-slate-600 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-left';
        b.textContent = o.meaning;
        b.onclick = () => this.answerChoice(b, o.meaning === target.meaning);
        ow2.appendChild(b);
      });
    }
  },

  answerChoice(btn, correct) {
    document.querySelectorAll('#quizOpts button').forEach(b => b.disabled = true);
    btn.classList.add(correct ? 'choice-correct' : 'choice-wrong');
    if (correct) { this.score++; Toast.show('✓ 正确！'); }
    else Toast.show('✗ 正确答案：' + window._curQ.answer);
    setTimeout(() => { this.quizIdx++; this.renderQuiz(); }, 1200);
  },

  finishQuiz() {
    Store.set({ wordQuizDone: true, wordCorrect: this.score, wordIndex: window.DAILY_WORDS.length });
    Store.recordTask('word');
    this.showDone();
    Toast.show(`🎉 单词任务完成！+20 积分`);
  },

  showDone() {
    document.getElementById('wordLearnView').classList.add('hidden');
    document.getElementById('wordQuizView').classList.add('hidden');
    document.getElementById('wordDoneView').classList.remove('hidden');
    const s = Store.get();
    document.getElementById('wordCorrectCount').textContent = s.wordCorrect;
  },

  downloadPdf() {
    // 简易 PDF：用浏览器打印功能
    const w = window.open('', '_blank');
    let rows = window.DAILY_WORDS.map(x =>
      `<tr><td>${x.word}</td><td>${x.phonetic}</td><td>${x.meaning}</td><td>${x.example}</td></tr>`).join('');
    w.document.write(`<html><head><title>DailyKorean 今日单词表</title>
      <style>body{font-family:sans-serif;padding:20px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:6px;text-align:left;font-size:12px}h1{color:#1e63e8}</style>
      </head><body><h1>📖 DailyKorean 今日单词表</h1>
      <p>${new Date().toLocaleDateString()}</p>
      <table><thead><tr><th>单词</th><th>音标</th><th>释义</th><th>例句</th></tr></thead><tbody>${rows}</tbody></table>
      <script>window.onload=()=>window.print()</script></body></html>`);
    w.document.close();
  },

  shuffle(arr) { return arr.sort(() => Math.random() - 0.5); },
  others(exclude, n) {
    return this.shuffle(window.DAILY_WORDS.filter(x => x.word !== exclude)).slice(0, n);
  },
  othersByMeaning(exclude, n) {
    return this.shuffle(window.DAILY_WORDS.filter(x => x.meaning !== exclude)).slice(0, n);
  }
};
