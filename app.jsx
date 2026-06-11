/* 頁面與主程式：總覽地圖、週次內頁、速查、安全、路由 */

/* ---------- 課程總覽地圖 ---------- */
function OverviewPage({ go }) {
  const data = window.COURSE_DATA;
  const totalSecs = data.reduce((s, w) => s + w.sections.length, 0);
  const flow = [
    { ph: "design", t: "角色設計", d: "在地文化發想、三視圖草圖與色彩計畫", icon: "design" },
    { ph: "sculpt", t: "Blender 雕刻", d: "從球體雕出頭、身、四肢與細節", icon: "sculpt" },
    { ph: "print", t: "光固化列印", d: "切片、支撐、列印與後處理", icon: "printer" },
    { ph: "paint", t: "塗裝後製", d: "筆塗上色、點睛與作品發表", icon: "brush" },
  ];
  const counts = {};
  PHASE_ORDER.forEach((p) => counts[p] = data.filter((w) => w.phase === p).length);

  return (
    <div className="wrap anim-up">
      <div className="hero">
        <div className="hero-kicker"><Icon name="spark" size={18} />十八週創客課程 · 數位教材</div>
        <h1>從一顆球體，<br />捏出一隻<span className="accent">專屬 Q 版公仔</span></h1>
        <p className="hero-lede">
          這是一套完整的 Q 版公仔創作課程：從角色設計、Blender 建模與雕刻，到光固化 3D 列印與筆塗塗裝，
          帶學生親手走過「設計 → 雕刻 → 列印 → 塗裝」的完整創客旅程，並連結在地文化與文創應用。
        </p>
        <div className="stat-row stagger">
          <div className="stat"><div className="stat-n num">18</div><div className="stat-l">教學週次</div></div>
          <div className="stat"><div className="stat-n num">{totalSecs}</div><div className="stat-l">教學節次</div></div>
          <div className="stat"><div className="stat-n num">5</div><div className="stat-l">學習階段</div></div>
          <div className="stat"><div className="stat-n num">4</div><div className="stat-l">創作流程</div></div>
        </div>
      </div>

      <div className="section-head"><h2>創作四階段</h2><span className="sh-sub">一件公仔的誕生歷程</span></div>
      <div className="flowline stagger">
        {flow.map((f, i) => (
          <div key={i} className={"flowstep " + PHASE[f.ph].cls}>
            <div className="fs-ico"><Icon name={f.icon} size={22} /></div>
            <div className="fs-t">{f.t}</div>
            <div className="fs-d">{f.d}</div>
            {i < flow.length - 1 && <Icon name="chevR" size={20} className="fs-arrow" />}
          </div>
        ))}
      </div>

      <div className="section-head"><h2>十八週學習地圖</h2><span className="sh-sub">點選任一週進入詳細教材</span></div>
      <div className="legend">
        {PHASE_ORDER.map((p) => (
          <div key={p} className={"legend-item " + PHASE[p].cls}>
            <span className="legend-sw" /><span>{PHASE[p].name}</span>
            <span style={{ color: "var(--ink-faint)", fontWeight: 600 }}>· {counts[p]}週</span>
          </div>
        ))}
      </div>

      <div className="weekgrid stagger">
        {data.map((w) => {
          const ph = PHASE[w.phase];
          return (
            <button key={w.num} className={"weekcard " + ph.cls} onClick={() => go({ v: "week", week: w.num })}>
              <div className="wc-top">
                <div className="wc-badge">
                  <span className="wb-wk">WEEK</span><span className="wb-n num">{w.num}</span>
                </div>
                <Icon name={ph.icon} size={26} className="wc-ico" />
              </div>
              <div className="wc-short">{w.short}</div>
              <div className="wc-title">{w.title}</div>
              <div className="wc-meta">
                {w.buffer
                  ? <span className="wc-tag buf">機動緩衝週</span>
                  : <span className="wc-tag">{w.sections.length} 節</span>}
                <span className="wc-tag">{ph.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- 週次內頁 ---------- */
function WeekView({ weekNum, go }) {
  const data = window.COURSE_DATA;
  const w = data.find((x) => x.num === weekNum);
  const ph = PHASE[w.phase];
  const prev = data.find((x) => x.num === weekNum - 1);
  const next = data.find((x) => x.num === weekNum + 1);
  React.useEffect(() => { window.scrollTo(0, 0); }, [weekNum]);

  return (
    <div className={"wrap anim-up " + ph.cls} key={weekNum}>
      <div className="topbar">
        <span className="chip"><span className="chip-dot" />{ph.name}</span>
        <span className="crumb">課程總覽 / 第 {w.num} 週</span>
      </div>

      <div className="week-hero">
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="wc-badge" style={{ width: 58, height: 58 }}>
            <span className="wb-wk">WEEK</span><span className="wb-n num" style={{ fontSize: 24 }}>{w.num}</span>
          </div>
          <Icon name={ph.icon} size={34} style={{ color: "var(--c)" }} />
        </div>
        <h1>{w.title}</h1>
      </div>

      {w.buffer ? (
        <div className="buffer-card">
          <span className="bc-tag"><Icon name="flag" size={15} />機動緩衝週</span>
          <p>{w.intro}</p>
        </div>
      ) : (
        <>
          <div className="week-intro">{w.intro}</div>
          <div className="section-list stagger">
            {w.sections.map((s) => (
              <SectionPanel key={s.num} weekNum={w.num} section={s} phaseCls={ph.cls} />
            ))}
          </div>
        </>
      )}

      <div className="weeknav">
        {prev ? (
          <a onClick={() => go({ v: "week", week: prev.num })}>
            <Icon name="arrowL" size={20} style={{ color: "var(--ink-faint)" }} />
            <span><span className="wn-dir num">第 {prev.num} 週</span><br /><span className="wn-name">{prev.short}</span></span>
          </a>
        ) : <span />}
        {next ? (
          <a className="next" onClick={() => go({ v: "week", week: next.num })}>
            <Icon name="arrowR" size={20} style={{ color: "var(--ink-faint)" }} />
            <span><span className="wn-dir num">第 {next.num} 週</span><br /><span className="wn-name">{next.short}</span></span>
          </a>
        ) : <span />}
      </div>
    </div>
  );
}

/* ---------- Blender 快捷鍵速查 ---------- */
function BlenderPage() {
  const groups = window.BLENDER_SHORTCUTS;
  return (
    <div className="wrap anim-up">
      <div className="topbar">
        <span className="chip ph-model"><span className="chip-dot" />軟體工具</span>
        <span className="crumb">速查表</span>
      </div>
      <div className="page-hero">
        <h1>Blender 快捷鍵速查</h1>
        <p>建模與雕刻最常用的快捷鍵都在這裡。鼓勵學生多用快捷鍵、少用選單，養成流暢的操作手感。</p>
      </div>
      <div className="kb-grid stagger">
        {groups.map((g, i) => (
          <div key={i} className={"kb-card " + PHASE[g.color].cls}>
            <div className="kb-head">
              <div className="kb-ico"><Icon name={g.icon} size={22} /></div>
              <h3>{g.group}</h3>
            </div>
            <div className="kb-desc">{g.desc}</div>
            <div className="kb-rows">
              {g.keys.map((row, j) => (
                <div key={j} className="kb-row">
                  <div className="kb-keys">
                    {row.k.map((key, n) => (
                      <React.Fragment key={n}>
                        {n > 0 && <span className="kb-plus">+</span>}
                        <span className="kbd">{key}</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="kb-act">{row.a}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 列印安全須知 ---------- */
function SafetyPage() {
  const { intro, rules } = window.SAFETY_DATA;
  const levelName = { must: "必遵守", warn: "要注意", tip: "小提醒" };
  return (
    <div className="wrap anim-up">
      <div className="topbar">
        <span className="chip ph-print"><span className="chip-dot" />光固化列印</span>
        <span className="crumb">安全須知</span>
      </div>
      <div className="page-hero">
        <h1>列印安全須知</h1>
      </div>
      <div className="safety-banner">
        <Mascot size={58} />
        <p>{intro}</p>
      </div>
      <div className="safety-grid stagger">
        {rules.map((r, i) => (
          <div key={i} className={"safe lv-" + r.level}>
            <span className="safe-level">{levelName[r.level]}</span>
            <div className="safe-ico"><Icon name={r.icon} size={26} /></div>
            <h3>{r.title}</h3>
            <p>{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 主程式 + 路由 ---------- */
function parseHash() {
  const h = (location.hash || "").replace(/^#\/?/, "");
  if (h.startsWith("week/")) return { v: "week", week: parseInt(h.split("/")[1]) || 1 };
  if (h === "blender") return { v: "blender" };
  if (h === "safety") return { v: "safety" };
  return { v: "home" };
}
function viewToHash(v) {
  if (v.v === "week") return "#/week/" + v.week;
  if (v.v === "blender") return "#/blender";
  if (v.v === "safety") return "#/safety";
  return "#/";
}

function App() {
  const [view, setView] = React.useState(parseHash());
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onHash = () => setView(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = (v) => {
    location.hash = viewToHash(v);
    setView(v);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  let page;
  if (view.v === "week") page = <WeekView weekNum={view.week} go={go} />;
  else if (view.v === "blender") page = <BlenderPage />;
  else if (view.v === "safety") page = <SafetyPage />;
  else page = <OverviewPage go={go} />;

  return (
    <div className="app">
      <button className="menu-btn" onClick={() => setMenuOpen(true)}><Icon name="menu" size={22} /></button>
      <Sidebar view={view} weeks={window.COURSE_DATA} go={go} open={menuOpen} setOpen={setMenuOpen} />
      <main className="main">{page}</main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
