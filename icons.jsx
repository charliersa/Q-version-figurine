/* SVG 圖示庫 + Q版吉祥物 logo — 圓潤線條風 */
const I = ({ d, fill, vb = "0 0 24 24", w = 24, sw = 2, children, style }) => (
  <svg viewBox={vb} width={w} height={w} fill={fill || "none"} stroke={fill ? "none" : "currentColor"}
    strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {d ? <path d={d} /> : children}
  </svg>
);

/* 命名圖示 */
const ICONS = {
  // 導覽
  map: (p) => <I {...p}><path d="M3 6.5 9 4l6 2.5L21 4v13.5L15 20 9 17.5 3 20z"/><path d="M9 4v13.5M15 6.5V20"/></I>,
  book: (p) => <I {...p}><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v15H5.5A1.5 1.5 0 0 1 4 17.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H12v15h6.5a1.5 1.5 0 0 0 1.5-1.5z"/></I>,
  keyboard: (p) => <I {...p}><rect x="2.5" y="5.5" width="19" height="13" rx="2.5"/><path d="M6.5 9.5h.01M10 9.5h.01M13.5 9.5h.01M17 9.5h.01M7 13h10"/></I>,
  shield: (p) => <I {...p}><path d="M12 3 5 6v5c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6z"/><path d="m9.2 11.7 1.9 1.9 3.6-3.7"/></I>,
  printer: (p) => <I {...p}><path d="M7 9V3.5h10V9"/><rect x="4" y="9" width="16" height="7" rx="1.8"/><path d="M7 14h10v6.5H7z"/><path d="M16.5 12h.01"/></I>,

  // 階段
  design: (p) => <I {...p}><path d="M4 20.5 8 19l9.5-9.5a2.1 2.1 0 0 0-3-3L5 16z"/><path d="M14 6.5 17.5 10"/><path d="M4 20.5 5 16"/></I>,
  cube: (p) => <I {...p}><path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/></I>,
  sculpt: (p) => <I {...p}><path d="M7 21c-1.5-2-2-4.5-2-7 0-4.4 3.1-8 7-8s7 3.6 7 8c0 2.5-.5 5-2 7"/><path d="M9.5 11.5h.01M14.5 11.5h.01M10 15.5c1.2 1 2.8 1 4 0"/></I>,
  brush: (p) => <I {...p}><path d="M14.5 3.5 20.5 9.5 12 18l-6-6z"/><path d="M6 12 3.5 17.5 9 15"/><path d="M3.5 17.5C2 19 3 21.5 5.5 20.5"/></I>,

  // 區塊
  target: (p) => <I {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor" stroke="none"/></I>,
  steps: (p) => <I {...p}><path d="M5 7h14M5 12h14M5 17h9"/><circle cx="3.2" cy="7" r="1.1" fill="currentColor" stroke="none"/><circle cx="3.2" cy="12" r="1.1" fill="currentColor" stroke="none"/><circle cx="3.2" cy="17" r="1.1" fill="currentColor" stroke="none"/></I>,
  bulb: (p) => <I {...p}><path d="M9 17h6M10 20.5h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2H14.5c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></I>,

  // UI
  check: (p) => <I {...p} sw={3}><path d="m5 12.5 4.5 4.5L19 7"/></I>,
  clock: (p) => <I {...p}><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></I>,
  arrowR: (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6"/></I>,
  arrowL: (p) => <I {...p}><path d="M19 12H5M11 6l-6 6 6 6"/></I>,
  chevR: (p) => <I {...p}><path d="m9 5 7 7-7 7"/></I>,
  menu: (p) => <I {...p}><path d="M4 7h16M4 12h16M4 17h16"/></I>,
  spark: (p) => <I {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></I>,
  flag: (p) => <I {...p}><path d="M6 21V4M6 4h11l-2 3 2 3H6"/></I>,

  // 安全
  glove: (p) => <I {...p}><path d="M8 21v-5l-1.5-1.5a2 2 0 0 1 2.8-2.8L10 13V5.5a1.5 1.5 0 0 1 3 0V11m0-1a1.5 1.5 0 0 1 3 0v2m0-1a1.5 1.5 0 0 1 3 0v4c0 3-2 6-5 6z"/></I>,
  wind: (p) => <I {...p}><path d="M3 9h11a2.5 2.5 0 1 0-2.5-2.5M3 13h15a2.5 2.5 0 1 1-2.5 2.5M3 17h8a2 2 0 1 1-2 2"/></I>,
  waste: (p) => <I {...p}><path d="M5 7h14M9 7V5h6v2M7 7l1 13h8l1-13"/><path d="M11 11v5M13 11v5"/></I>,
  fire: (p) => <I {...p}><path d="M12 3c.5 3-2 4-2 7a2 2 0 1 0 4 0c1 1.5 2 2.5 2 4.5a4 4 0 1 1-8 0C8 11 11 9 12 3z"/></I>,
  uv: (p) => <I {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M5 5l1.8 1.8M17.2 17.2 19 19M19 5l-1.8 1.8M6.8 17.2 5 19"/></I>,
  film: (p) => <I {...p}><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M8 5v14M16 5v14M3.5 9.5h4.5M16 9.5h4.5M3.5 14.5h4.5M16 14.5h4.5"/></I>,
};

function Icon({ name, size = 24, className, style }) {
  const C = ICONS[name];
  return C ? <span className={className} style={{ display: "inline-flex", ...style }}>{C({ w: size })}</span> : null;
}

/* Q版吉祥物：一隻列印出來的小公仔頭 */
function Mascot({ size = 46 }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none">
      <rect x="3" y="3" width="50" height="50" rx="16" fill="#FFE2D6"/>
      <rect x="3" y="3" width="50" height="50" rx="16" stroke="#FF7A59" strokeWidth="2.5"/>
      {/* 頭 */}
      <circle cx="28" cy="25" r="14" fill="#FFF6EA" stroke="#3A3340" strokeWidth="2.2"/>
      {/* 瀏海 */}
      <path d="M14.5 23c0-8 6-13 13.5-13S41.5 15 41.5 23c-2-2-4-3-6.5-3.2.5 1.4.3 2.6-.4 3.6-.8-2-2.2-3.4-4.2-3.8.4 1.6 0 3-1 4-1-2.2-2.6-3.4-4.8-3.6.3 1.4 0 2.6-.8 3.6-1.6-1.8-3.4-2.8-5.5-2.8z" fill="#7C6CF0" stroke="#3A3340" strokeWidth="2" strokeLinejoin="round"/>
      {/* 眼睛 */}
      <circle cx="22.5" cy="26" r="2.6" fill="#3A3340"/>
      <circle cx="33.5" cy="26" r="2.6" fill="#3A3340"/>
      <circle cx="23.4" cy="25.1" r=".9" fill="#fff"/>
      <circle cx="34.4" cy="25.1" r=".9" fill="#fff"/>
      {/* 腮紅 */}
      <ellipse cx="19" cy="30" rx="2.4" ry="1.5" fill="#FF9DB0"/>
      <ellipse cx="37" cy="30" rx="2.4" ry="1.5" fill="#FF9DB0"/>
      {/* 嘴 */}
      <path d="M25.5 31c1.5 1.6 3.5 1.6 5 0" stroke="#3A3340" strokeWidth="2" strokeLinecap="round"/>
      {/* 底座列印層 */}
      <path d="M16 44h24" stroke="#FF9E2C" strokeWidth="3" strokeLinecap="round"/>
      <path d="M19 48h18" stroke="#FFC785" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

Object.assign(window, { Icon, Mascot, ICONS });
