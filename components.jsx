/* 共用元件：階段資料、側欄、章節面板、目標清單、時間軸、解說框 */

const PHASE = {
  design: { name: "導論 · 設計", icon: "design",  cls: "ph-design" },
  model:  { name: "Blender 建模", icon: "cube",   cls: "ph-model" },
  sculpt: { name: "Blender 雕刻", icon: "sculpt", cls: "ph-sculpt" },
  print:  { name: "光固化列印",   icon: "printer", cls: "ph-print" },
  paint:  { name: "塗裝 · 發表",  icon: "brush",  cls: "ph-paint" },
};
const PHASE_ORDER = ["design", "model", "sculpt", "print", "paint"];

/* ---------- 側欄 ---------- */
function Sidebar({ view, weeks, go, open, setOpen }) {
  const data = window.COURSE_DATA;
  const links = [
    { id: "home", icon: "map", label: "課程總覽地圖" },
    { id: "blender", icon: "keyboard", label: "Blender 快捷鍵速查" },
    { id: "safety", icon: "shield", label: "列印安全須知" },
  ];
  return (
    <>
      {open && <div className="scrim" onClick={() => setOpen(false)} />}
      <aside className={"sidebar" + (open ? " open" : "")}>
        <div className="sb-brand" onClick={() => go({ v: "home" })}>
          <Mascot size={46} />
          <div>
            <div className="sb-title">Q版公仔創客</div>
            <div className="sb-sub">3D 列印 · 建模 · 雕刻 · 數位教材</div>
          </div>
        </div>

        <nav className="sb-nav">
          {links.map((l) => (
            <button key={l.id} className={"sb-link" + (view.v === l.id ? " on" : "")}
              onClick={() => go({ v: l.id })}>
              <Icon name={l.icon} size={19} className="sb-ico" />
              <span>{l.label}</span>
            </button>
          ))}
        </nav>

        <div className="sb-divider">十八週課程</div>
        <div className="sb-weeks">
          {data.map((w) => {
            const ph = PHASE[w.phase];
            const on = view.v === "week" && view.week === w.num;
            return (
              <button key={w.num} className={"sb-week " + ph.cls + (on ? " on" : "")}
                onClick={() => go({ v: "week", week: w.num })}>
                <span className="sb-wn num">{w.num}</span>
                <span className="sb-wt">{w.short}</span>
              </button>
            );
          })}
        </div>

        <div className="sb-foot">
          <button className="sb-print-btn" onClick={() => window.openManual()}>
            <Icon name="book" size={16} />
            列印教材手冊
          </button>
        </div>
      </aside>
    </>
  );
}

/* ---------- 教學目標 可勾選清單 ---------- */
function GoalsChecklist({ weekNum, secNum, goals }) {
  const keyOf = (i) => `qfig.goal.${weekNum}.${secNum}.${i}`;
  const [done, setDone] = React.useState(() =>
    goals.map((_, i) => localStorage.getItem(keyOf(i)) === "1"));
  const toggle = (i) => {
    setDone((prev) => {
      const next = [...prev]; next[i] = !next[i];
      try { localStorage.setItem(keyOf(i), next[i] ? "1" : "0"); } catch (e) {}
      return next;
    });
  };
  const count = done.filter(Boolean).length;
  const pct = Math.round((count / goals.length) * 100);
  return (
    <div>
      <div className="block-label">
        <Icon name="target" size={22} className="bl-ico" />
        教學目標
        <span className="bl-hint">點一下打勾，追蹤達成進度</span>
      </div>
      <div className="goals">
        {goals.map((g, i) => (
          <button key={i} className={"goal" + (done[i] ? " done" : "")} onClick={() => toggle(i)}>
            <span className="goal-box"><Icon name="check" size={14} /></span>
            <span className="goal-text">{g}</span>
          </button>
        ))}
      </div>
      <div className="goals-progress">
        <span>{count}/{goals.length}</span>
        <span className="gp-bar"><span className="gp-fill" style={{ width: pct + "%" }} /></span>
        <span>{pct}%</span>
      </div>
    </div>
  );
}

/* ---------- 操作流程 時間軸 ---------- */
function Timeline({ flow }) {
  const total = flow.reduce((s, f) => s + (f.min || 0), 0);
  const mixes = flow.map((_, i) => 100 - Math.min(48, i * 16));
  return (
    <div>
      <div className="block-label">
        <Icon name="steps" size={22} className="bl-ico" />
        操作流程
        <span className="bl-hint">依分鐘數分配的課堂節奏</span>
      </div>
      <div className="timeline">
        <div className="tl-meta">
          <Icon name="clock" size={16} style={{ color: "var(--c-deep)" }} />
          <span className="tl-total">本節約 {total} 分鐘 · 共 {flow.length} 個步驟</span>
        </div>
        {total > 0 && (
          <div className="tl-bar">
            {flow.map((f, i) => (
              <div key={i} className="tl-seg" title={`${f.label} ${f.min || 0}分`}
                style={{ width: ((f.min || 0) / total * 100) + "%",
                  background: `color-mix(in srgb, var(--c) ${mixes[i]}%, #fff)` }} />
            ))}
          </div>
        )}
        {flow.map((f, i) => (
          <div key={i} className="tl-step">
            <div className="tl-rail">
              <div className="tl-time" style={{ background: `color-mix(in srgb, var(--c) ${mixes[i]}%, #fff)` }}>
                {f.min != null ? <><span className="tt-n num">{f.min}</span><span className="tt-u">分鐘</span></>
                  : <Icon name="flag" size={20} />}
              </div>
              <div className="tl-line" />
            </div>
            <div className="tl-content">
              <div className="tl-label">{f.label}</div>
              {f.desc && <div className="tl-desc">{f.desc}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 操作解說 ---------- */
function NotePanel({ text }) {
  return (
    <div className="note">
      <div className="note-head">
        <span className="nh-badge"><Icon name="bulb" size={15} />操作解說</span>
        <span style={{ fontSize: 12.5, color: "var(--ink-faint)", fontWeight: 500 }}>給授課教師的引導重點</span>
      </div>
      <p className="note-text">{text}</p>
    </div>
  );
}

/* ---------- 單一章節（節） ---------- */
function SectionPanel({ weekNum, section, phaseCls }) {
  return (
    <div className={"sec " + phaseCls}>
      <div className="sec-head">
        <div className="sec-num">
          <span className="sn-l">第</span>
          <span className="sn-n num">{section.num}</span>
        </div>
        <div>
          <div className="sh-k">第 {section.num} 節</div>
          <h3>{section.title}</h3>
        </div>
      </div>
      <div className="sec-body">
        <GoalsChecklist weekNum={weekNum} secNum={section.num} goals={section.goals} />
        <Timeline flow={section.flow} />
        {section.note && <NotePanel text={section.note} />}
      </div>
    </div>
  );
}

Object.assign(window, { PHASE, PHASE_ORDER, Sidebar, GoalsChecklist, Timeline, NotePanel, SectionPanel });
