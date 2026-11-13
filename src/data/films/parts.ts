import type { Film } from "./types";

const meaning = "#2f7d32";
const water = "#4fb6ff";
const fire = "#ff7a2f";
const red = "#d9453a";
const moon = "#ffc75a";

export const films: readonly Film[] = [
  {
    question: "water-radical",
    scenes: [
      {
        turn: 0, title: "三点水的字", duration: 11,
        cues: [
          { kind: "glyph", char: "江", at: [240, 330], size: 170, from: 0.3, to: 4.4 },
          { kind: "glyph", char: "河", at: [480, 330], size: 170, from: 0.7, to: 4.4 },
          { kind: "glyph", char: "湖", at: [720, 330], size: 170, from: 1.1, to: 4.4 },
          { kind: "glyph", char: "海", at: [960, 330], size: 170, from: 1.5, to: 4.4 },
          { kind: "flow", path: [[150, 560], [450, 600], [750, 540], [1050, 590]], color: water, count: 10, from: 2, to: 4.4 },
          { kind: "glyph", char: "洗", at: [360, 330], size: 170, from: 4.6 },
          { kind: "glyph", char: "汗", at: [600, 330], size: 170, from: 5.1 },
          { kind: "glyph", char: "泪", at: [840, 330], size: 170, from: 5.6 },
          { kind: "sprite", icon: "💧", path: [[600, 560]], size: 90, wobble: true, from: 6.2 },
          { kind: "text", at: [600, 800], text: "偏旁：告诉你和什么有关", from: 7.6 }
        ]
      },
      {
        turn: 1, title: "水变成三个点", duration: 12,
        cues: [
          { kind: "evolve", at: [330, 360], size: 280, every: 1.6, from: 0.3, forms: [{ icon: "💧" }, { script: "oracle", char: "水" }, { script: "seal", char: "水" }, { script: "kai", char: "水" }] },
          { kind: "arrow", path: [[520, 360], [640, 360]], text: "放到左边", from: 5.4 },
          { kind: "write", char: "江", at: [880, 380], size: 360, stroke: 0.6, mark: [0, 1, 2], color: water, from: 5.8 },
          { kind: "text", at: [600, 800], text: "挤窄了，变成三个点", from: 9.8 }
        ]
      },
      {
        turn: 2, title: "两点水是冰", duration: 11,
        cues: [
          { kind: "glyph", char: "仌", script: "seal", at: [330, 340], size: 280, color: water, caption: "古时候的冰", from: 0.4 },
          { kind: "sprite", icon: "🧊", path: [[330, 650]], size: 110, from: 1.6 },
          { kind: "glyph", char: "冰", at: [850, 190], size: 150, from: 3.4 },
          { kind: "glyph", char: "冷", at: [850, 390], size: 150, from: 4 },
          { kind: "glyph", char: "冻", at: [850, 590], size: 150, from: 4.6 },
          { kind: "text", at: [600, 810], text: "水冻成冰，少了一个点", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "四点底是火", duration: 11,
        cues: [
          { kind: "evolve", at: [330, 340], size: 260, every: 1.5, from: 0.3, forms: [{ icon: "🔥" }, { script: "oracle", char: "火" }, { script: "seal", char: "火" }, { script: "kai", char: "火" }] },
          { kind: "arrow", path: [[520, 340], [640, 340]], text: "放到下面", color: fire, from: 5 },
          { kind: "glyph", char: "热", at: [850, 180], size: 150, from: 5.6 },
          { kind: "glyph", char: "煮", at: [850, 380], size: 150, from: 6.2 },
          { kind: "glyph", char: "照", at: [850, 580], size: 150, from: 6.8 },
          { kind: "text", at: [600, 810], text: "压扁了，变成四个点", from: 8 }
        ]
      },
      {
        turn: 4, title: "看位置、数点点", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 70], text: "三点水、两点水：在左边", size: "s", from: 0.3, to: 3 },
          { kind: "write", char: "冷", at: [600, 390], size: 540, stroke: 0.6, mark: [0, 1], color: water, from: 0.6 },
          { kind: "text", at: [600, 70], text: "四点底：在下面", size: "s", from: 3.2, to: 6.4 },
          { kind: "label", at: [430, 380], text: "两个点：冰", side: "left", color: water, from: 2.2 },
          { kind: "myth", wrong: "冷是三点水", right: "冷是两点水：冰才冷", from: 6.6 }
        ]
      }
    ]
  },
  {
    question: "moon-radical",
    scenes: [
      {
        turn: 0, title: "不是月亮的月", duration: 11,
        cues: [
          { kind: "glyph", char: "肚", at: [250, 330], size: 200, from: 0.3, to: 5 },
          { kind: "glyph", char: "脸", at: [600, 330], size: 200, from: 0.8, to: 5 },
          { kind: "glyph", char: "胖", at: [950, 330], size: 200, from: 1.3, to: 5 },
          { kind: "sprite", icon: "🌙", path: [[600, 620]], size: 110, wobble: true, from: 2.2, to: 5 },
          { kind: "text", at: [600, 110], text: "跟月亮没关系？", from: 2.6, to: 5 },
          { kind: "glyph", char: "肉", script: "oracle", at: [400, 380], size: 280, caption: "甲骨文的肉", from: 5.2 },
          { kind: "sprite", icon: "🥩", path: [[850, 380]], size: 170, from: 5.8 },
          { kind: "text", at: [600, 800], text: "肉月旁：和身体有关", from: 8 }
        ]
      },
      {
        turn: 1, title: "肉和月，以前不像", duration: 12,
        cues: [
          { kind: "glyph", char: "肉", script: "oracle", at: [330, 170], size: 150, caption: "甲骨文的肉", from: 0.5 },
          { kind: "glyph", char: "月", script: "oracle", at: [870, 170], size: 150, caption: "甲骨文的月", from: 1.4 },
          { kind: "text", at: [600, 170], text: "不一样", size: "s", from: 2.2, to: 5.2 },
          { kind: "glyph", char: "肉", script: "seal", at: [330, 410], size: 150, caption: "小篆的肉", from: 3.6 },
          { kind: "glyph", char: "月", script: "seal", at: [870, 410], size: 150, caption: "小篆的月", from: 4.2 },
          { kind: "text", at: [600, 410], text: "有点像了", size: "s", from: 5, to: 8.4 },
          { kind: "glyph", char: "月", at: [330, 650], size: 150, color: meaning, caption: "肉月旁", from: 6.2 },
          { kind: "glyph", char: "月", at: [870, 650], size: 150, color: moon, caption: "月亮", from: 6.8 },
          { kind: "text", at: [600, 650], text: "几乎一样！", from: 7.4 },
          { kind: "text", at: [600, 840], text: "今天要靠意思分辨", size: "s", from: 9 }
        ]
      },
      {
        turn: 2, title: "身上全是肉", duration: 10,
        cues: [
          { kind: "sprite", icon: "🧒", path: [[600, 440]], size: 280, from: 0.3, to: 7.2 },
          { kind: "glyph", char: "肚", at: [370, 540], size: 130, color: meaning, from: 1 },
          { kind: "glyph", char: "脸", at: [380, 230], size: 130, color: meaning, from: 1.8 },
          { kind: "glyph", char: "胳", at: [830, 250], size: 130, color: meaning, from: 2.6 },
          { kind: "glyph", char: "膊", at: [990, 250], size: 130, color: meaning, from: 3 },
          { kind: "glyph", char: "肝", at: [830, 560], size: 130, color: meaning, from: 4 },
          { kind: "glyph", char: "肺", at: [990, 560], size: 130, color: meaning, from: 4.4 },
          { kind: "text", at: [600, 810], text: "都是肉月旁", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "真的月亮在这里", duration: 11,
        cues: [
          { kind: "sprite", icon: "🌕", path: [[600, 170]], size: 130, from: 0.3, to: 4.6 },
          { kind: "glyph", char: "期", at: [270, 430], size: 200, caption: "星期", from: 1.6 },
          { kind: "highlight", at: [320, 430], size: [100, 200], color: moon, from: 2.2 },
          { kind: "glyph", char: "朗", at: [600, 430], size: 200, caption: "明朗", from: 3.6 },
          { kind: "highlight", at: [650, 430], size: [100, 200], color: moon, from: 4.2 },
          { kind: "glyph", char: "望", at: [930, 430], size: 200, caption: "望日：月最圆", from: 5.6 },
          { kind: "highlight", at: [970, 395], size: [90, 110], color: moon, from: 6.2 },
          { kind: "text", at: [600, 800], text: "真的月：多在右边或下面", from: 7.6 }
        ]
      },
      {
        turn: 4, title: "月字旁的误会", duration: 12,
        cues: [
          { kind: "glyph", char: "月", script: "oracle", at: [330, 340], size: 240, color: moon, caption: "月亮", from: 0.4 },
          { kind: "glyph", char: "肉", script: "oracle", at: [870, 340], size: 240, color: meaning, caption: "身体", from: 1.4 },
          { kind: "myth", wrong: "月字旁都和月亮有关", right: "很多是肉变的，和身体有关", from: 2.6, to: 9 },
          { kind: "text", at: [600, 110], text: "先想：是身体吗？", from: 9.2 }
        ]
      }
    ]
  },
  {
    question: "shell-money",
    scenes: [
      {
        turn: 0, title: "拿海贝当钱用", duration: 12,
        cues: [
          { kind: "glyph", char: "买", at: [220, 300], size: 170, from: 0.3, to: 4.8 },
          { kind: "glyph", char: "卖", at: [470, 300], size: 170, from: 0.6, to: 4.8 },
          { kind: "glyph", char: "贵", at: [730, 300], size: 170, from: 0.9, to: 4.8 },
          { kind: "glyph", char: "财", at: [980, 300], size: 170, from: 1.2, to: 4.8 },
          { kind: "text", at: [600, 560], text: "全都藏着一个「贝」", color: red, from: 2.0, to: 4.8 },
          { kind: "evolve", at: [600, 380], size: 290, every: 1.6, from: 5.0, forms: [{ icon: "🐚", label: "海贝" }, { script: "oracle", char: "貝" }, { script: "seal", char: "貝" }, { script: "kai", char: "贝" }] },
          { kind: "text", at: [600, 800], text: "商朝周朝：海贝就是钱", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "两串贝壳是一朋", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "南方海里的货贝，很珍贵", from: 0.3, to: 5.6 },
          { kind: "sprite", icon: "🐚", path: [[250, 380]], size: 150, from: 0.6, to: 5.6 },
          { kind: "count", at: [760, 380], label: "妇好墓海贝", start: 0, end: 6800, unit: "多枚", over: 2.2, from: 1.4, to: 5.8 },
          { kind: "glyph", char: "朋", script: "oracle", at: [380, 390], size: 260, caption: "甲骨文的朋", from: 6.0 },
          { kind: "glyph", char: "朋", script: "seal", at: [820, 390], size: 240, caption: "小篆的朋", from: 7.2 },
          { kind: "label", at: [380, 260], text: "五个一串，两串一朋", side: "top", pos: [380, 160], color: red, from: 6.6 },
          { kind: "text", at: [600, 800], text: "「朋友」的朋：两串贝壳", from: 8.8 }
        ]
      },
      {
        turn: 2, title: "捡贝壳与掏贝壳", duration: 13,
        cues: [
          { kind: "glyph", char: "貝", script: "oracle", at: [240, 380], size: 190, color: red, caption: "海贝", path: [[380, 380]], travel: 1.3, from: 0.4, to: 3.4 },
          { kind: "glyph", char: "又", script: "oracle", at: [760, 380], size: 190, caption: "手去捡", path: [[620, 380]], travel: 1.3, from: 0.6, to: 3.4 },
          { kind: "glyph", char: "得", script: "oracle", at: [400, 380], size: 260, caption: "路上捡到贝", from: 3.4, to: 6.4 },
          { kind: "glyph", char: "得", at: [820, 380], size: 240, caption: "得到", from: 4.0, to: 6.4 },
          { kind: "glyph", char: "网", script: "oracle", at: [260, 210], size: 150, path: [[260, 290]], travel: 1.0, from: 6.6, to: 8.6 },
          { kind: "glyph", char: "貝", script: "oracle", at: [260, 570], size: 150, color: red, path: [[260, 490]], travel: 1.0, from: 6.8, to: 8.6 },
          { kind: "glyph", char: "買", script: "oracle", at: [260, 390], size: 230, caption: "甲骨文的买", from: 8.6 },
          { kind: "glyph", char: "买", at: [580, 390], size: 210, caption: "今天的买", from: 9.2 },
          { kind: "glyph", char: "貴", script: "seal", at: [920, 390], size: 230, color: red, caption: "双手捧贝：贵", from: 9.8 },
          { kind: "text", at: [600, 800], text: "掏贝壳去买，捧着贝很贵", from: 10.4 }
        ]
      },
      {
        turn: 3, title: "分掉贝与惦记贝", duration: 12,
        cues: [
          { kind: "glyph", char: "分", script: "oracle", at: [330, 190], size: 140, path: [[330, 280]], travel: 1.1, from: 0.4, to: 2.8 },
          { kind: "glyph", char: "貝", script: "oracle", at: [330, 560], size: 140, color: red, path: [[330, 460]], travel: 1.1, from: 0.6, to: 2.8 },
          { kind: "glyph", char: "贫", at: [330, 380], size: 240, caption: "贝壳分完了", from: 2.8 },
          { kind: "text", at: [330, 140], text: "分 + 贝", size: "s", from: 3.0 },
          { kind: "glyph", char: "今", at: [870, 190], size: 140, path: [[870, 280]], travel: 1.1, from: 4.4, to: 6.8 },
          { kind: "glyph", char: "貝", script: "oracle", at: [870, 560], size: 140, color: red, path: [[870, 460]], travel: 1.1, from: 4.6, to: 6.8 },
          { kind: "glyph", char: "贪", at: [870, 380], size: 240, caption: "老惦记着贝", from: 6.8 },
          { kind: "text", at: [870, 140], text: "今 + 贝", size: "s", from: 7.0 },
          { kind: "text", at: [600, 800], text: "贝分掉变穷，想要没完是贪", from: 8.6 }
        ]
      },
      {
        turn: 4, title: "从海贝到金属钱", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐚", path: [[190, 340]], size: 130, from: 0.4 },
          { kind: "arrow", path: [[290, 340], [420, 340]], text: "铜贝·铸币", from: 1.4 },
          { kind: "sprite", icon: "🪙", path: [[520, 340]], size: 130, from: 2.0 },
          { kind: "glyph", char: "錢", script: "seal", at: [780, 340], size: 200, caption: "小篆的钱", from: 3.4 },
          { kind: "glyph", char: "钱", at: [1030, 340], size: 200, color: meaning, caption: "金字旁", from: 4.4 },
          { kind: "myth", wrong: "古人一直用金银铜钱买东西", right: "最早用海贝，后来才改用金属钱", from: 6.8 }
        ]
      }
    ]
  },
  {
    question: "radical-dictionary",
    scenes: [
      {
        turn: 0, title: "一部一部排好", duration: 11,
        cues: [
          { kind: "sprite", icon: "📕", path: [[200, 360]], size: 170, from: 0.3, to: 6 },
          { kind: "text", at: [600, 110], text: "部首：一群字共同的偏旁", from: 1.4 },
          { kind: "glyph", char: "江", at: [520, 380], size: 170, color: meaning, from: 2.6 },
          { kind: "glyph", char: "河", at: [740, 380], size: 170, color: meaning, from: 3 },
          { kind: "glyph", char: "湖", at: [960, 380], size: 170, color: meaning, from: 3.4 },
          { kind: "shape", shape: "rect", at: [740, 380], size: [700, 250], color: "none", outline: true, from: 4.2 },
          { kind: "sprite", icon: "📚", path: [[200, 620]], size: 140, from: 6.2 },
          { kind: "text", at: [600, 800], text: "分好类，找得快", from: 7 }
        ]
      },
      {
        turn: 1, title: "许慎分了五百四十部", duration: 12,
        cues: [
          { kind: "text", at: [600, 100], text: "东汉 · 许慎《说文解字》", from: 0.3 },
          { kind: "count", at: [600, 290], label: "分成", start: 0, end: 540, unit: "部", from: 3 },
          { kind: "glyph", char: "一", script: "seal", at: [330, 560], size: 200, caption: "从「一」开始", from: 5.4 },
          { kind: "arrow", path: [[460, 560], [740, 560]], from: 6.2 },
          { kind: "glyph", char: "亥", script: "seal", at: [870, 560], size: 200, caption: "到「亥」结束", from: 6.8 },
          { kind: "text", at: [600, 820], text: "部太多，不好找", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "部首变少了", duration: 11,
        cues: [
          { kind: "count", at: [230, 330], label: "《说文》", start: 0, end: 540, unit: "部", from: 0.3 },
          { kind: "sprite", icon: "📜", path: [[230, 560]], size: 110, from: 0.6 },
          { kind: "count", at: [600, 330], label: "明清字典", start: 540, end: 214, unit: "部", from: 2 },
          { kind: "sprite", icon: "📘", path: [[600, 560]], size: 110, from: 2.4 },
          { kind: "count", at: [970, 330], label: "今天的字典", start: 214, end: 201, unit: "部", from: 5.4 },
          { kind: "sprite", icon: "📗", path: [[970, 560]], size: 110, from: 5.8 },
          { kind: "text", at: [600, 800], text: "部首少了，好记多了", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "三步查一个字", duration: 13,
        cues: [
          { kind: "text", at: [600, 90], text: "第一步：找部首", from: 0.3, to: 3.6 },
          { kind: "glyph", char: "湖", at: [300, 430], size: 280, from: 0.5 },
          { kind: "highlight", at: [215, 430], size: [100, 260], color: meaning, from: 1.2 },
          { kind: "label", at: [215, 430], text: "部首：三点水", pos: [230, 230], color: meaning, from: 1.6 },
          { kind: "text", at: [600, 90], text: "第二步：数剩下几画", from: 3.8, to: 8.8 },
          { kind: "write", char: "胡", at: [820, 430], size: 380, stroke: 0.45, from: 4 },
          { kind: "text", at: [600, 90], text: "第三步：翻到那一页", from: 9 },
          { kind: "sprite", icon: "📖", path: [[820, 760]], size: 110, from: 9.4 }
        ]
      },
      {
        turn: 4, title: "部首难找也不怕", duration: 10,
        cues: [
          { kind: "sprite", icon: "🤔", path: [[220, 380]], size: 160, from: 0.3 },
          { kind: "text", at: [600, 110], text: "部首藏得深？", from: 0.5 },
          { kind: "arrow", path: [[340, 380], [470, 380]], from: 1.6 },
          { kind: "shape", shape: "rect", at: [740, 330], size: [420, 160], color: moon, text: "难检字表", from: 2 },
          { kind: "label", at: [740, 330], text: "按笔画多少排", side: "bottom", from: 3 },
          { kind: "shape", shape: "pill", at: [740, 620], size: [320, 100], color: "#6cc4ff", text: "音节表", from: 5 },
          { kind: "text", at: [600, 810], text: "多查几次就熟了", from: 7.2 }
        ]
      }
    ]
  },
  {
    question: "dog-radical",
    scenes: [
      {
        turn: 0, title: "一样的偏旁", duration: 11,
        cues: [
          { kind: "glyph", char: "猫", at: [250, 360], size: 200, from: 0.3, to: 5.6 },
          { kind: "glyph", char: "狗", at: [600, 360], size: 200, from: 0.8, to: 5.6 },
          { kind: "glyph", char: "猴", at: [950, 360], size: 200, from: 1.3, to: 5.6 },
          { kind: "highlight", at: [195, 360], size: [90, 200], color: red, from: 2.2, to: 5.6 },
          { kind: "highlight", at: [545, 360], size: [90, 200], color: red, from: 2.5, to: 5.6 },
          { kind: "highlight", at: [895, 360], size: [90, 200], color: red, from: 2.8, to: 5.6 },
          { kind: "glyph", char: "犬", at: [400, 400], size: 280, caption: "犬：就是狗", from: 5.8 },
          { kind: "sprite", icon: "🐕", path: [[850, 400]], size: 180, from: 6.4 },
          { kind: "text", at: [600, 800], text: "反犬旁：犬字变的", from: 7.6 }
        ]
      },
      {
        turn: 1, title: "像在画一只狗", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "看犬字，像画狗", from: 0.3 },
          { kind: "sprite", icon: "🐕", path: [[300, 430]], size: 200, from: 1 },
          { kind: "glyph", char: "犬", script: "oracle", at: [820, 430], size: 320, rotate: -90, from: 2.6, to: 7.6 },
          { kind: "label", at: [820, 430], text: "瘦身子，尾巴翘", side: "bottom", pos: [820, 680], from: 4, to: 7.4 },
          { kind: "glyph", char: "犬", script: "oracle", at: [820, 430], size: 320, rotate: -90, turnTo: 0, over: 1.5, caption: "站起来的犬", from: 7.6 },
          { kind: "text", at: [600, 820], text: "头朝上，竖着站", size: "s", from: 9.6 }
        ]
      },
      {
        turn: 2, title: "犬到了左边", duration: 13,
        cues: [
          { kind: "evolve", at: [330, 380], size: 260, every: 1.5, from: 0.3, forms: [{ script: "oracle", char: "犬" }, { script: "seal", char: "犬" }, { script: "kai", char: "犬" }] },
          { kind: "arrow", path: [[520, 380], [640, 380]], text: "放到左边", from: 4.8 },
          { kind: "write", char: "狗", at: [880, 400], size: 360, stroke: 0.6, mark: [0, 1, 2], color: red, from: 5.4 },
          { kind: "text", at: [600, 810], text: "撇、弯钩、撇", from: 7.4 }
        ]
      },
      {
        turn: 3, title: "反犬旁一家", duration: 11,
        cues: [
          { kind: "glyph", char: "狼", at: [270, 330], size: 190, color: meaning, from: 0.4 },
          { kind: "sprite", icon: "🐺", path: [[270, 580]], size: 110, from: 0.9, to: 8 },
          { kind: "glyph", char: "猴", at: [600, 330], size: 190, color: meaning, from: 2.2 },
          { kind: "sprite", icon: "🐒", path: [[600, 580]], size: 110, from: 2.7, to: 8 },
          { kind: "glyph", char: "狮", at: [930, 330], size: 190, color: meaning, from: 4 },
          { kind: "sprite", icon: "🦁", path: [[930, 580]], size: 110, from: 4.5, to: 8 },
          { kind: "text", at: [600, 600], text: "多半是走兽", from: 8.2 }
        ]
      },
      {
        turn: 4, title: "猫和猪的秘密", duration: 13,
        cues: [
          { kind: "glyph", char: "貓", script: "seal", at: [300, 280], size: 180, caption: "豸字旁的猫", from: 0.5 },
          { kind: "glyph", char: "豬", script: "seal", at: [300, 590], size: 180, caption: "豕字旁的猪", from: 2.6 },
          { kind: "text", at: [600, 110], text: "1955 年选了反犬旁", from: 6 },
          { kind: "arrow", path: [[480, 430], [700, 430]], from: 6.6 },
          { kind: "glyph", char: "猫", at: [880, 280], size: 180, caption: "今天的猫", from: 7.2 },
          { kind: "glyph", char: "猪", at: [880, 590], size: 180, caption: "今天的猪", from: 7.8 }
        ]
      },
      {
        turn: 5, title: "别和提手旁弄混", duration: 12,
        cues: [
          { kind: "write", char: "打", at: [330, 400], size: 340, grid: true, stroke: 0.5, mark: [0, 1, 2], color: "#ff9f43", from: 0.5 },
          { kind: "text", at: [330, 630], text: "提手旁：和手有关", size: "s", from: 3.2 },
          { kind: "write", char: "狗", at: [870, 400], size: 340, grid: true, stroke: 0.5, mark: [0, 1, 2], color: red, from: 4.2 },
          { kind: "text", at: [870, 630], text: "反犬旁：和野兽有关", size: "s", from: 8.4 },
          { kind: "text", at: [600, 800], text: "看意思：手还是野兽？", from: 9.6 }
        ]
      }
    ]
  },
  {
    question: "bird-radical",
    scenes: [
      {
        turn: 0, title: "两只鸟", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐦", path: [[600, 360]], size: 110, wobble: true, from: 0.3 },
          { kind: "evolve", at: [300, 360], size: 260, every: 1.4, from: 1, forms: [{ script: "oracle", char: "隹" }, { script: "seal", char: "隹" }, { script: "kai", char: "隹" }] },
          { kind: "evolve", at: [900, 360], size: 260, every: 1.4, from: 5, forms: [{ script: "oracle", char: "鳥" }, { script: "seal", char: "鳥" }, { script: "kai", char: "鸟" }] },
          { kind: "text", at: [600, 110], text: "隹：读作追", from: 1.6, to: 4.8 },
          { kind: "text", at: [600, 810], text: "都是照着鸟画的", from: 9.4 }
        ]
      },
      {
        turn: 1, title: "短尾巴和长尾巴", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "《说文解字》这样分", from: 0.3 },
          { kind: "glyph", char: "隹", at: [300, 320], size: 190, caption: "尾巴短", from: 1 },
          { kind: "glyph", char: "鸟", at: [900, 320], size: 190, caption: "尾巴长", from: 3.4 },
          { kind: "glyph", char: "雀", at: [600, 600], size: 200, caption: "麻雀", from: 6.4 },
          { kind: "highlight", at: [600, 630], size: [190, 120], color: meaning, from: 7.4 }
        ]
      },
      {
        turn: 2, title: "分得不严格", duration: 13,
        cues: [
          { kind: "glyph", char: "隹", script: "oracle", at: [300, 360], size: 230, caption: "甲骨文的隹", from: 0.4, to: 6.4 },
          { kind: "glyph", char: "鳥", script: "oracle", at: [900, 360], size: 230, caption: "甲骨文的鸟", from: 0.9, to: 6.4 },
          { kind: "arrow", path: [[460, 360], [740, 360]], text: "常常混着用", from: 2, to: 6.4 },
          { kind: "glyph", char: "雉", at: [600, 330], size: 260, caption: "雉：野鸡", from: 6.6 },
          { kind: "highlight", at: [660, 330], size: [120, 260], color: meaning, from: 7.4 },
          { kind: "label", at: [660, 330], text: "尾巴长，却是隹", side: "right", from: 8 },
          { kind: "myth", wrong: "看偏旁就知道尾巴长短", right: "隹和鸟常常混着用", from: 9.6 }
        ]
      },
      {
        turn: 3, title: "两种写法都行", duration: 13,
        cues: [
          { kind: "glyph", char: "雞", script: "seal", at: [300, 280], size: 180, caption: "隹字旁", from: 0.5 },
          { kind: "highlight", at: [350, 280], size: [100, 190], color: meaning, from: 1.2, to: 7 },
          { kind: "glyph", char: "鷄", script: "seal", at: [300, 600], size: 180, caption: "鸟字旁", from: 2.6 },
          { kind: "highlight", at: [350, 600], size: [100, 190], color: meaning, from: 3.3, to: 7 },
          { kind: "arrow", path: [[460, 440], [660, 440]], text: "今天", from: 7 },
          { kind: "write", char: "鸡", at: [880, 440], size: 360, stroke: 0.6, mark: [2, 3, 4, 5, 6], color: meaning, from: 7.6 }
        ]
      },
      {
        turn: 4, title: "小鸟停在树上", duration: 13,
        cues: [
          { kind: "glyph", char: "小", at: [330, 230], size: 150, path: [[600, 250]], travel: 1.2, from: 0.4, to: 3 },
          { kind: "glyph", char: "隹", at: [870, 480], size: 150, path: [[600, 450]], travel: 1.2, from: 1, to: 3 },
          { kind: "glyph", char: "雀", at: [600, 360], size: 300, caption: "小小的鸟：雀", from: 3, to: 6.2 },
          { kind: "glyph", char: "木", script: "oracle", at: [380, 560], size: 260, caption: "木：树", from: 6.4 },
          { kind: "glyph", char: "隹", script: "oracle", at: [160, 220], size: 160, path: [[380, 360]], travel: 1.6, from: 7.2 },
          { kind: "glyph", char: "集", script: "oracle", at: [880, 430], size: 280, caption: "甲骨文的集", from: 9.4 }
        ]
      },
      {
        turn: 5, title: "带隹的字", duration: 12,
        cues: [
          { kind: "glyph", char: "雁", at: [300, 360], size: 220, caption: "大雁", from: 0.4 },
          { kind: "highlight", at: [340, 390], size: [120, 160], color: meaning, from: 1.4 },
          { kind: "glyph", char: "雕", at: [880, 360], size: 220, caption: "雕", from: 3.4 },
          { kind: "highlight", at: [935, 360], size: [110, 220], color: meaning, from: 4.6 },
          { kind: "highlight", at: [825, 360], size: [110, 220], color: "#b48cff", from: 5.8 },
          { kind: "text", at: [600, 810], text: "带隹的字，多和鸟有关", from: 8.4 }
        ]
      }
    ]
  }
];
