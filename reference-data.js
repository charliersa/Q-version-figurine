/* 輔助資料：Blender 快捷鍵速查 + 列印安全須知 */
window.BLENDER_SHORTCUTS = [
  {
    group: "視角操作", icon: "view", color: "model",
    desc: "迷路了不要慌——隨時用 Home 或數字鍵回正。",
    keys: [
      { k: ["滑鼠中鍵"], a: "環繞旋轉視角" },
      { k: ["Shift", "中鍵"], a: "平移畫面" },
      { k: ["滾輪"], a: "縮放遠近" },
      { k: ["Home"], a: "全覽所有物件" },
      { k: ["Numpad 1 / 3 / 7"], a: "前 / 側 / 頂 正視圖" },
      { k: ["Numpad 5"], a: "正交 / 透視 切換" },
      { k: ["Numpad ."], a: "聚焦選取物件" },
    ],
  },
  {
    group: "模式與變換", icon: "move", color: "model",
    desc: "G / R / S 是 Blender 的效率核心，務必練到反射動作。",
    keys: [
      { k: ["Tab"], a: "物件 ⇄ 編輯模式" },
      { k: ["Ctrl", "Tab"], a: "模式快速選單" },
      { k: ["G"], a: "移動（Grab）" },
      { k: ["R"], a: "旋轉（Rotate）" },
      { k: ["S"], a: "縮放（Scale）" },
      { k: ["G", "→", "X / Y / Z"], a: "鎖定單一軸向移動" },
      { k: ["Shift", "D"], a: "複製物件" },
    ],
  },
  {
    group: "建模指令", icon: "model", color: "sculpt",
    desc: "加線控形、擠出長肉、倒角收邊、細分變圓。",
    keys: [
      { k: ["Ctrl", "R"], a: "Loop Cut 環切加線" },
      { k: ["E"], a: "Extrude 擠出" },
      { k: ["Ctrl", "B"], a: "Bevel 倒角" },
      { k: ["Ctrl", "1～3"], a: "Subdivision 細分層級" },
      { k: ["A"], a: "全選" },
      { k: ["Alt", "A"], a: "取消選取" },
      { k: ["L"], a: "選取相連網格" },
    ],
  },
  {
    group: "雕刻模式", icon: "sculpt", color: "paint",
    desc: "Smooth 是最常用的收尾筆刷，過頭了隨時撫平。",
    keys: [
      { k: ["F"], a: "調整筆刷半徑" },
      { k: ["Shift", "F"], a: "調整筆刷強度" },
      { k: ["Shift", "（按住）"], a: "暫時切換 Smooth 撫平" },
      { k: ["Ctrl", "（按住）"], a: "筆刷反向（凸 ⇄ 凹）" },
      { k: ["M"], a: "Mask 遮罩筆刷" },
      { k: ["Alt", "M"], a: "清除遮罩" },
      { k: ["Ctrl", "I"], a: "反轉遮罩" },
    ],
  },
  {
    group: "通用必備", icon: "save", color: "print",
    desc: "養成隨手存檔的習慣，創作歷程不留遺憾。",
    keys: [
      { k: ["Ctrl", "Z"], a: "復原" },
      { k: ["Ctrl", "Shift", "Z"], a: "重做" },
      { k: ["Ctrl", "S"], a: "儲存檔案" },
      { k: ["X / Delete"], a: "刪除" },
      { k: ["Z"], a: "著色模式圓餅選單" },
    ],
  },
];

window.SAFETY_DATA = {
  intro: "光固化樹脂與清洗用酒精都屬於化學品。動手列印前，請務必先讀懂這一頁——安全認知不過關，不得進入第十四週實機操作。",
  rules: [
    { icon: "glove", title: "全程配戴手套口罩", level: "must",
      text: "未固化的樹脂具刺激性，皮膚接觸可能過敏。從注入樹脂、取件到清洗，全程都要戴手套；研磨打磨時加戴口罩。" },
    { icon: "wind", title: "保持列印區通風", level: "must",
      text: "樹脂與酒精會散發氣味與揮發物，列印區須保持通風，避免長時間在密閉空間操作。" },
    { icon: "waste", title: "廢液不可倒入水槽", level: "must",
      text: "廢棄樹脂與殘渣嚴禁直接倒入水槽。須先以 UV 照射 / 日曬完全固化，再當一般廢棄物處理。" },
    { icon: "fire", title: "酒精遠離火源", level: "warn",
      text: "清洗用酒精易燃，使用與存放都要遠離火源與高溫，用畢隨即加蓋。" },
    { icon: "uv", title: "二次固化要適度", level: "warn",
      text: "二次固化讓成品達到最終硬度，但過度固化會使作品變脆。UV 燈數分鐘即可，日曬約半小時。" },
    { icon: "film", title: "保護樹脂槽離型膜", level: "tip",
      text: "離型膜是耗材，刮傷或霧化會導致列印失敗。取件時避免硬刮槽底，發現損傷即更換。" },
    { icon: "check", title: "每次列印前檢查", level: "tip",
      text: "列印前確認平台已調平、樹脂槽無殘渣、樹脂量足夠，並記錄起始時間以利監看。" },
  ],
};
