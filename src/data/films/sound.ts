import type { Film } from "./types";

const meaning = "#2f7d32";
const sound = "#b48cff";
const water = "#4fb6ff";

export const films: readonly Film[] = [
  {
    question: "ma-family",
    scenes: [
      {
        turn: 0, title: "字里藏着一匹马", duration: 11,
        cues: [
          { kind: "glyph", char: "妈", at: [240, 330], size: 180, from: 0.3, to: 5.6 },
          { kind: "glyph", char: "吗", at: [480, 330], size: 180, from: 0.8, to: 5.6 },
          { kind: "glyph", char: "骂", at: [720, 330], size: 180, from: 1.3, to: 5.6 },
          { kind: "glyph", char: "码", at: [960, 330], size: 180, from: 1.8, to: 5.6 },
          { kind: "text", at: [600, 600], text: "读起来都像「马」", color: sound, from: 2.8, to: 5.6 },
          { kind: "glyph", char: "馬", script: "oracle", at: [600, 400], size: 300, color: sound, caption: "提示读音", from: 5.8 },
          { kind: "text", at: [600, 800], text: "一半管读音，一半管意思", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "左边猜意思", duration: 13,
        cues: [
          { kind: "text", at: [380, 110], text: "绿色：管意思", size: "s", color: meaning, from: 0.3 },
          { kind: "text", at: [820, 110], text: "紫色：管读音", size: "s", color: sound, from: 0.3 },
          { kind: "glyph", char: "女", at: [140, 360], size: 150, color: meaning, path: [[205, 360]], travel: 1.2, from: 0.5, to: 2.6 },
          { kind: "glyph", char: "马", at: [360, 360], size: 150, color: sound, path: [[295, 360]], travel: 1.2, from: 0.7, to: 2.6 },
          { kind: "glyph", char: "妈", at: [250, 360], size: 200, caption: "妈妈是女的", from: 2.6 },
          { kind: "glyph", char: "口", at: [490, 360], size: 150, color: meaning, path: [[555, 360]], travel: 1.2, from: 3.4, to: 5.6 },
          { kind: "glyph", char: "马", at: [710, 360], size: 150, color: sound, path: [[645, 360]], travel: 1.2, from: 3.6, to: 5.6 },
          { kind: "glyph", char: "吗", at: [600, 360], size: 200, caption: "张嘴问问题", from: 5.6 },
          { kind: "glyph", char: "石", at: [840, 360], size: 150, color: meaning, path: [[905, 360]], travel: 1.2, from: 6.4, to: 8.6 },
          { kind: "glyph", char: "马", at: [1060, 360], size: 150, color: sound, path: [[995, 360]], travel: 1.2, from: 6.6, to: 8.6 },
          { kind: "glyph", char: "码", at: [950, 360], size: 200, caption: "像玉的石头", from: 8.6 },
          { kind: "text", at: [600, 780], text: "左边猜意思，右边猜读音", from: 9.8 }
        ]
      },
      {
        turn: 2, title: "带口的字爱张嘴", duration: 12,
        cues: [
          { kind: "glyph", char: "骂", at: [330, 380], size: 300, from: 0.3, to: 6 },
          { kind: "highlight", at: [330, 290], size: [230, 120], color: meaning, from: 1, to: 6 },
          { kind: "label", at: [330, 290], text: "今天写成两个口", side: "top", from: 1.4, to: 6 },
          { kind: "evolve", at: [860, 360], size: 240, every: 1.4, from: 2.4, to: 6.6, forms: [{ script: "oracle", char: "口" }, { script: "seal", char: "口" }, { script: "kai", char: "口" }] },
          { kind: "glyph", char: "吃", at: [240, 400], size: 170, color: meaning, from: 6.8 },
          { kind: "glyph", char: "喝", at: [480, 400], size: 170, color: meaning, from: 7.3 },
          { kind: "glyph", char: "叫", at: [720, 400], size: 170, color: meaning, from: 7.8 },
          { kind: "glyph", char: "唱", at: [960, 400], size: 170, color: meaning, from: 8.3 },
          { kind: "text", at: [600, 760], text: "带口的字，多和嘴巴有关", from: 9.2 }
        ]
      },
      {
        turn: 3, title: "声调不一样", duration: 12,
        cues: [
          { kind: "glyph", char: "马", at: [600, 190], size: 160, color: sound, caption: "第三声", from: 0.3, to: 7.6 },
          { kind: "glyph", char: "妈", at: [250, 560], size: 180, caption: "第一声", from: 1.4 },
          { kind: "line", path: [[190, 400], [310, 400]], color: sound, width: 9, draw: 0.6, from: 1.8 },
          { kind: "glyph", char: "码", at: [600, 560], size: 180, caption: "第三声", from: 3.2 },
          { kind: "line", path: [[545, 385], [595, 425], [660, 365]], color: sound, width: 9, draw: 0.8, from: 3.6 },
          { kind: "glyph", char: "骂", at: [950, 560], size: 180, caption: "第四声", from: 4.8 },
          { kind: "line", path: [[890, 365], [1010, 430]], color: sound, width: 9, draw: 0.6, from: 5.2 },
          { kind: "text", at: [600, 110], text: "马只提示，声调要拿准", from: 7.8 }
        ]
      },
      {
        turn: 4, title: "妈妈不好画", duration: 12,
        cues: [
          { kind: "sprite", icon: "👩", path: [[300, 320]], size: 130, from: 0.3, to: 5.4 },
          { kind: "sprite", icon: "👧", path: [[600, 320]], size: 130, from: 0.8, to: 5.4 },
          { kind: "sprite", icon: "👵", path: [[900, 320]], size: 130, from: 1.3, to: 5.4 },
          { kind: "sprite", icon: "❓", path: [[600, 540]], size: 100, wobble: true, from: 2.2, to: 5.4 },
          { kind: "text", at: [600, 780], text: "画出来分不清", from: 2.6, to: 5.4 },
          { kind: "glyph", char: "女", script: "oracle", at: [240, 450], size: 220, color: meaning, path: [[480, 450]], travel: 1.5, from: 5.6, to: 9.4 },
          { kind: "glyph", char: "馬", script: "oracle", at: [960, 450], size: 220, color: sound, path: [[720, 450]], travel: 1.5, from: 6, to: 9.4 },
          { kind: "glyph", char: "妈", at: [600, 450], size: 320, motion: "pulse", from: 9.4 },
          { kind: "text", at: [600, 110], text: "意思 + 读音 = 新字", from: 9.8 }
        ]
      },
      {
        turn: 5, title: "猜猜「蚂」", duration: 10,
        cues: [
          { kind: "glyph", char: "蚂", at: [600, 400], size: 300, from: 0.3 },
          { kind: "highlight", at: [525, 400], size: [130, 250], color: meaning, from: 1.2 },
          { kind: "label", at: [525, 400], text: "虫：小虫子", side: "left", from: 1.4 },
          { kind: "highlight", at: [680, 400], size: [150, 250], color: sound, from: 3 },
          { kind: "label", at: [680, 400], text: "马：读音像马", side: "right", from: 3.2 },
          { kind: "sprite", icon: "🐜", path: [[1000, 680]], size: 90, wobble: true, from: 4.4 },
          { kind: "text", at: [600, 800], text: "先猜个大概，再查字典", from: 6 }
        ]
      }
    ]
  },
  {
    question: "river-sound",
    scenes: [
      {
        turn: 0, title: "一半管意思", duration: 10,
        cues: [
          { kind: "glyph", char: "江", at: [330, 330], size: 260, from: 0.3 },
          { kind: "glyph", char: "河", at: [870, 330], size: 260, from: 0.8 },
          { kind: "highlight", at: [255, 330], size: [110, 230], color: meaning, from: 1.8, to: 4.6 },
          { kind: "highlight", at: [795, 330], size: [110, 230], color: meaning, from: 1.8, to: 4.6 },
          { kind: "text", at: [600, 110], text: "三点水：和水有关", color: meaning, from: 2.2 },
          { kind: "glyph", char: "工", at: [330, 660], size: 150, color: sound, caption: "提示读音", from: 4.8 },
          { kind: "glyph", char: "可", at: [870, 660], size: 150, color: sound, caption: "提示读音", from: 5.6 }
        ]
      },
      {
        turn: 1, title: "读音慢慢变了", duration: 13,
        cues: [
          { kind: "glyph", char: "江", at: [300, 380], size: 240, from: 0.3 },
          { kind: "glyph", char: "工", at: [900, 380], size: 240, color: sound, from: 0.8 },
          { kind: "text", at: [600, 110], text: "今天：读起来不太像", from: 1.2, to: 4 },
          { kind: "text", at: [600, 110], text: "造字时：读起来很像", color: sound, from: 4.2, to: 9.6 },
          { kind: "flow", path: [[150, 640], [450, 700], [750, 620], [1050, 680]], color: water, count: 10, from: 6.6 },
          { kind: "text", at: [600, 800], text: "读音像河水，慢慢在变", from: 7 },
          { kind: "text", at: [600, 110], text: "广东话里还挺像", from: 9.8 }
        ]
      },
      {
        turn: 2, title: "甲骨文里的「河」", duration: 12,
        cues: [
          { kind: "text", at: [600, 100], text: "三千多年前 · 甲骨文", from: 0.3, to: 5.6 },
          { kind: "glyph", char: "河", script: "oracle", at: [360, 380], size: 300, caption: "甲骨文的河", from: 0.6 },
          { kind: "glyph", char: "江", script: "seal", at: [840, 380], size: 300, caption: "小篆的江", from: 4.2 },
          { kind: "text", at: [600, 100], text: "河：黄河　江：长江", from: 5.8 },
          { kind: "flow", path: [[180, 650], [540, 650]], color: water, count: 6, from: 6.4 },
          { kind: "flow", path: [[660, 650], [1020, 650]], color: water, count: 6, from: 6.8 },
          { kind: "text", at: [600, 800], text: "后来：大小的水都叫江河", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "秀才识字读半边", duration: 12,
        cues: [
          { kind: "text", at: [600, 100], text: "秀才识字读半边", from: 0.3, to: 6 },
          { kind: "glyph", char: "湖", at: [230, 330], size: 190, caption: "读像「胡」", from: 1.8 },
          { kind: "glyph", char: "洋", at: [470, 330], size: 190, caption: "读像「羊」", from: 2.8 },
          { kind: "sprite", icon: "✅", path: [[350, 580]], size: 80, from: 3.4, to: 6.2 },
          { kind: "glyph", char: "江", at: [730, 330], size: 190, caption: "不像「工」", from: 4 },
          { kind: "glyph", char: "海", at: [970, 330], size: 190, caption: "不像「每」", from: 4.8 },
          { kind: "sprite", icon: "❌", path: [[850, 580]], size: 80, from: 5.2, to: 6.2 },
          { kind: "myth", wrong: "识字只要读半边", right: "右边只能帮你猜读音", from: 6.4 }
        ]
      },
      {
        turn: 4, title: "当个小侦探", duration: 10,
        cues: [
          { kind: "sprite", icon: "🕵️", path: [[160, 420]], size: 140, from: 0.3 },
          { kind: "glyph", char: "淋", at: [600, 380], size: 300, from: 0.8 },
          { kind: "highlight", at: [520, 380], size: [100, 260], color: meaning, from: 1.6, to: 5.4 },
          { kind: "label", at: [520, 380], text: "和水有关", side: "top", pos: [430, 180], color: meaning, from: 1.8, to: 5.4 },
          { kind: "highlight", at: [650, 380], size: [180, 260], color: sound, from: 3, to: 5.4 },
          { kind: "label", at: [650, 380], text: "读音像「林」", side: "top", pos: [800, 180], color: sound, from: 3.2, to: 5.4 },
          { kind: "sprite", icon: "📖", path: [[1020, 640]], size: 120, from: 5.6 },
          { kind: "text", at: [600, 800], text: "先猜，再查字典", from: 6 }
        ]
      }
    ]
  },
  {
    question: "most-chars",
    scenes: [
      {
        turn: 0, title: "形声字有多少", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "东汉 ·《说文解字》", from: 0.3 },
          { kind: "count", at: [330, 330], label: "收的字", start: 0, end: 9353, unit: "个", from: 1.2 },
          { kind: "count", at: [870, 330], label: "形声字", start: 0, end: 7697, unit: "个", from: 3.4 },
          { kind: "meter", at: [600, 560], label: "十个里约八个", start: 0, end: 0.82, color: sound, from: 5.8 },
          { kind: "meter", at: [600, 700], label: "今天：约八成", start: 0, end: 0.8, color: sound, from: 8.6 }
        ]
      },
      {
        turn: 1, title: "越滚越多", duration: 12,
        cues: [
          { kind: "meter", at: [600, 170], label: "甲骨文", start: 0, end: 0.14, color: sound, from: 0.4 },
          { kind: "glyph", char: "日", script: "oracle", at: [380, 420], size: 170, caption: "画出来的", from: 2.4, to: 7.4 },
          { kind: "glyph", char: "休", script: "oracle", at: [820, 420], size: 170, caption: "拼起来的", from: 3.2, to: 7.4 },
          { kind: "meter", at: [600, 640], label: "《说文》", start: 0, end: 0.82, color: sound, from: 5.6 },
          { kind: "sprite", icon: "☃️", path: [[150, 760], [1020, 760]], size: 90, travel: 3, spin: true, from: 7.6 },
          { kind: "text", at: [600, 420], text: "像滚雪球一样", size: "l", from: 8 }
        ]
      },
      {
        turn: 2, title: "画不出来了", duration: 12,
        cues: [
          { kind: "glyph", char: "日", script: "oracle", at: [180, 250], size: 150, from: 0.3, to: 4.6 },
          { kind: "glyph", char: "山", script: "oracle", at: [360, 250], size: 150, from: 0.7, to: 4.6 },
          { kind: "glyph", char: "魚", script: "oracle", at: [540, 250], size: 150, from: 1.1, to: 4.6 },
          { kind: "text", at: [880, 250], text: "想、快、慢：怎么画？", from: 2.2, to: 4.6 },
          { kind: "sprite", icon: "🐟", path: [[220, 470]], size: 110, from: 4.8 },
          { kind: "sprite", icon: "🐠", path: [[400, 470]], size: 110, from: 5.2 },
          { kind: "sprite", icon: "🦈", path: [[580, 470]], size: 110, from: 5.6 },
          { kind: "arrow", path: [[690, 470], [800, 470]], from: 6.4 },
          { kind: "glyph", char: "魚", script: "oracle", at: [960, 470], size: 220, caption: "都画成鱼？", from: 6.8 },
          { kind: "text", at: [600, 800], text: "画画的办法不够用了", from: 8.8 }
        ]
      },
      {
        turn: 3, title: "一半意思一半读音", duration: 13,
        cues: [
          { kind: "glyph", char: "鱼", at: [130, 360], size: 140, color: meaning, path: [[195, 360]], travel: 1.2, from: 0.4, to: 2.6 },
          { kind: "glyph", char: "里", at: [330, 360], size: 140, color: sound, path: [[265, 360]], travel: 1.2, from: 0.6, to: 2.6 },
          { kind: "glyph", char: "鲤", at: [230, 360], size: 200, caption: "鲤鱼", from: 2.6 },
          { kind: "glyph", char: "沙", at: [600, 170], size: 130, color: sound, path: [[600, 290]], travel: 1.2, from: 3.4, to: 5.6 },
          { kind: "glyph", char: "鱼", at: [600, 560], size: 130, color: meaning, path: [[600, 430]], travel: 1.2, from: 3.6, to: 5.6 },
          { kind: "glyph", char: "鲨", at: [600, 360], size: 200, caption: "鲨鱼", from: 5.6 },
          { kind: "glyph", char: "木", at: [870, 360], size: 140, color: meaning, path: [[935, 360]], travel: 1.2, from: 6.4, to: 8.6 },
          { kind: "glyph", char: "白", at: [1070, 360], size: 140, color: sound, path: [[1005, 360]], travel: 1.2, from: 6.6, to: 8.6 },
          { kind: "glyph", char: "柏", at: [970, 360], size: 200, caption: "柏树", from: 8.6 },
          { kind: "text", at: [600, 780], text: "要多少种，就造多少种", from: 9.8 }
        ]
      },
      {
        turn: 4, title: "化学家造新字", duration: 12,
        cues: [
          { kind: "sprite", icon: "🧪", path: [[600, 200]], size: 120, wobble: true, from: 0.3, to: 2.4 },
          { kind: "text", at: [600, 110], text: "给新发现的东西造字", from: 0.5 },
          { kind: "glyph", char: "氧", at: [240, 400], size: 200, caption: "氧气", from: 2.4 },
          { kind: "glyph", char: "氢", at: [480, 400], size: 200, caption: "氢气", from: 3 },
          { kind: "glyph", char: "锂", at: [760, 400], size: 200, caption: "金属", from: 4.6 },
          { kind: "glyph", char: "钠", at: [1000, 400], size: 200, caption: "金属", from: 5.2 },
          { kind: "highlight", at: [800, 400], size: [110, 200], color: sound, from: 6.8 },
          { kind: "text", at: [600, 780], text: "气字头：气体　金字旁：金属", size: "s", from: 8.4 }
        ]
      }
    ]
  },
  {
    question: "two-sounds",
    scenes: [
      {
        turn: 0, title: "一个字，两个读音", duration: 11,
        cues: [
          { kind: "glyph", char: "长", at: [600, 340], size: 280, from: 0.3 },
          { kind: "text", at: [300, 640], text: "长短 cháng", color: sound, from: 1.6 },
          { kind: "text", at: [900, 640], text: "长大 zhǎng", color: sound, from: 3.4 },
          { kind: "pulse", at: [600, 340], color: sound, radius: 120, from: 5, to: 7.4 },
          { kind: "text", at: [600, 800], text: "一字几个音：多音字", from: 6.4 }
        ]
      },
      {
        turn: 1, title: "头发长长的人", duration: 13,
        cues: [
          { kind: "evolve", at: [600, 380], size: 300, every: 1.6, from: 0.4, to: 6.8, forms: [{ icon: "🧓", label: "长发" }, { script: "oracle", char: "長" }, { script: "seal", char: "長" }, { script: "kai", char: "长" }] },
          { kind: "label", at: [640, 260], text: "有一种说法：长发的人", side: "right", from: 1.8, to: 6.8 },
          { kind: "text", at: [600, 800], text: "《说文》讲法不同", size: "s", from: 5, to: 6.8 },
          { kind: "shape", shape: "pill", at: [330, 420], size: [300, 110], color: "#ffe2b8", text: "长短", from: 7.2 },
          { kind: "shape", shape: "pill", at: [870, 420], size: [300, 110], color: "#d8f0d0", text: "长辈·长大", from: 8.4 },
          { kind: "text", at: [600, 800], text: "意思分家，读音分开", from: 9.8 }
        ]
      },
      {
        turn: 2, title: "十字路口的「行」", duration: 13,
        cues: [
          { kind: "glyph", char: "行", script: "oracle", at: [600, 360], size: 300, caption: "像十字路口", from: 0.4, to: 6.2 },
          { kind: "sprite", icon: "🚶", path: [[200, 660], [1000, 660]], size: 100, travel: 3.4, from: 2.2, to: 6.2 },
          { kind: "text", at: [600, 800], text: "行走 xíng", color: sound, from: 2.8, to: 6.2 },
          { kind: "glyph", char: "行", at: [360, 400], size: 220, caption: "一行字 háng", from: 6.6 },
          { kind: "sprite", icon: "🏦", path: [[860, 400]], size: 170, from: 8.6 },
          { kind: "label", at: [860, 400], text: "银行 háng", side: "bottom", pos: [860, 560], color: sound, from: 9.2 }
        ]
      },
      {
        turn: 3, title: "词就是提示", duration: 11,
        cues: [
          { kind: "glyph", char: "行", at: [600, 220], size: 170, from: 0.3 },
          { kind: "shape", shape: "pill", at: [330, 470], size: [280, 100], color: "#d8f0d0", text: "行走", from: 1.4 },
          { kind: "text", at: [330, 610], text: "走路：xíng", size: "s", color: meaning, from: 2 },
          { kind: "shape", shape: "pill", at: [870, 470], size: [280, 100], color: "#ece2ff", text: "银行", from: 3.4 },
          { kind: "text", at: [870, 610], text: "一排、店铺：háng", size: "s", color: sound, from: 4 },
          { kind: "text", at: [600, 800], text: "看词，就知道读哪个", from: 6.6 }
        ]
      },
      {
        turn: 4, title: "音乐和快乐", duration: 11,
        cues: [
          { kind: "glyph", char: "乐", at: [600, 340], size: 280, from: 0.3 },
          { kind: "sprite", icon: "🎵", path: [[260, 340]], size: 140, wobble: true, from: 1.2 },
          { kind: "text", at: [260, 560], text: "音乐 yuè", color: sound, from: 1.6 },
          { kind: "sprite", icon: "😄", path: [[940, 340]], size: 140, from: 4 },
          { kind: "text", at: [940, 560], text: "快乐 lè", color: sound, from: 4.4 },
          { kind: "arrow", path: [[380, 700], [820, 700]], text: "听音乐，真高兴", from: 5.8 }
        ]
      },
      {
        turn: 5, title: "连着词一起记", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "一对一对记", from: 0.3 },
          { kind: "shape", shape: "pill", at: [600, 270], size: [460, 110], color: "#ffe2b8", text: "长短·长大", motion: "grow", over: 0.8, from: 1.6 },
          { kind: "shape", shape: "pill", at: [600, 420], size: [460, 110], color: "#d8f0d0", text: "行走·银行", motion: "grow", over: 0.8, from: 2.8 },
          { kind: "shape", shape: "pill", at: [600, 570], size: [460, 110], color: "#ece2ff", text: "音乐·快乐", motion: "grow", over: 0.8, from: 4 },
          { kind: "sprite", icon: "📖", path: [[1000, 700]], size: 120, from: 6.6 },
          { kind: "text", at: [600, 800], text: "查字典：看几个拼音", size: "s", from: 7.2 }
        ]
      }
    ]
  },
  {
    question: "upside-fu",
    scenes: [
      {
        turn: 0, title: "倒过来的福", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [600, 400], size: [360, 360], color: "#d9453a", from: 0.3 },
          { kind: "glyph", char: "福", at: [600, 400], size: 280, color: "#ffe08a", from: 0.5, to: 3 },
          { kind: "glyph", char: "福", at: [600, 400], size: 280, color: "#ffe08a", rotate: 0, turnTo: 180, over: 1.5, from: 3 },
          { kind: "text", at: [600, 110], text: "故意倒过来贴", from: 1.4 },
          { kind: "text", at: [600, 800], text: "「倒」和「到」读音一样", color: sound, from: 5.4, to: 8.4 },
          { kind: "text", at: [600, 800], text: "福倒了 = 福到了", size: "l", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "年年有鱼", duration: 12,
        cues: [
          { kind: "pulse", at: [600, 400], color: sound, radius: 100, from: 0.4, to: 3.6 },
          { kind: "text", at: [600, 110], text: "读音一样，讨个吉利", from: 0.8, to: 4.2 },
          { kind: "text", at: [600, 110], text: "这叫谐音", color: sound, from: 4.4 },
          { kind: "glyph", char: "魚", script: "oracle", at: [330, 400], size: 240, caption: "鱼", from: 5 },
          { kind: "glyph", char: "余", at: [870, 400], size: 240, caption: "余：剩下", from: 6.4 },
          { kind: "text", at: [600, 800], text: "年年有鱼 → 年年有余", from: 7.8 }
        ]
      },
      {
        turn: 2, title: "蝙蝠的「蝠」", duration: 12,
        cues: [
          { kind: "sprite", icon: "🦇", path: [[220, 380]], size: 160, wobble: true, from: 0.5, to: 8 },
          { kind: "glyph", char: "蝠", at: [540, 380], size: 230, from: 1.4 },
          { kind: "glyph", char: "福", at: [900, 380], size: 230, from: 2.4 },
          { kind: "highlight", at: [585, 380], size: [120, 230], color: sound, from: 3.4, to: 8 },
          { kind: "highlight", at: [945, 380], size: [120, 230], color: sound, from: 3.6, to: 8 },
          { kind: "text", at: [600, 800], text: "读音一样，右边也一样", from: 4.4, to: 8 },
          { kind: "sprite", icon: "🍎", path: [[300, 660]], size: 120, from: 8.4 },
          { kind: "text", at: [700, 660], text: "苹果：平平安安", color: sound, from: 9 }
        ]
      },
      {
        turn: 3, title: "捧着酒去祭祀", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "有一种说法", size: "s", from: 0.3, to: 6.4 },
          { kind: "glyph", char: "示", script: "oracle", at: [260, 400], size: 220, color: meaning, caption: "祭台", path: [[480, 400]], travel: 1.5, from: 0.8, to: 6.4 },
          { kind: "glyph", char: "酉", script: "oracle", at: [940, 400], size: 220, caption: "酒坛子", path: [[720, 400]], travel: 1.5, from: 1.8, to: 6.4 },
          { kind: "sprite", icon: "🙌", path: [[720, 640]], size: 110, from: 3.4, to: 6.4 },
          { kind: "glyph", char: "福", script: "seal", at: [380, 400], size: 280, caption: "小篆的福", from: 6.8 },
          { kind: "glyph", char: "福", at: [860, 400], size: 260, from: 8.2 },
          { kind: "highlight", at: [805, 400], size: [120, 250], color: meaning, from: 9.4 },
          { kind: "label", at: [805, 400], text: "示字旁：祭台", side: "bottom", pos: [860, 650], color: meaning, from: 9.6 }
        ]
      },
      {
        turn: 4, title: "都是传说", duration: 11,
        cues: [
          { kind: "text", at: [600, 110], text: "好几个故事", from: 0.3 },
          { kind: "shape", shape: "pill", at: [330, 320], size: [300, 100], color: "#ffe2b8", text: "马皇后", from: 1.2 },
          { kind: "shape", shape: "pill", at: [870, 320], size: [300, 100], color: "#dbe8ff", text: "慈禧太后", from: 2.4 },
          { kind: "shape", shape: "pill", at: [600, 480], size: [300, 100], color: "#d8f0d0", text: "恭亲王府", from: 3 },
          { kind: "sprite", icon: "❓", path: [[600, 640]], size: 100, wobble: true, from: 4.4, to: 6.6 },
          { kind: "myth", wrong: "是某个皇后想出来的", right: "都是传说，没有真的记载", from: 6.6 }
        ]
      },
      {
        turn: 5, title: "大门正着贴", duration: 12,
        cues: [
          { kind: "sprite", icon: "🚪", path: [[330, 340]], size: 200, from: 0.5 },
          { kind: "glyph", char: "福", at: [330, 600], size: 150, color: "#d9453a", caption: "正着贴", from: 1.6 },
          { kind: "sprite", icon: "🗄️", path: [[870, 340]], size: 180, from: 4.6 },
          { kind: "label", at: [870, 340], text: "水缸、柜子", side: "top", pos: [870, 170], from: 5 },
          { kind: "glyph", char: "福", at: [870, 600], size: 150, color: "#d9453a", rotate: 180, caption: "倒着贴", from: 5.6 },
          { kind: "text", at: [600, 800], text: "大门正贴，柜子倒贴", from: 7.4 }
        ]
      }
    ]
  },
  {
    question: "foreign-words",
    scenes: [
      {
        turn: 0, title: "借声音写外来词", duration: 12,
        cues: [
          { kind: "sprite", icon: "🛋️", path: [[240, 310]], size: 130, from: 0.3, to: 5.2 },
          { kind: "glyph", char: "沙", at: [170, 530], size: 130, color: sound, from: 0.6, to: 5.2 },
          { kind: "glyph", char: "发", at: [340, 530], size: 130, color: sound, from: 0.8, to: 5.2 },
          { kind: "sprite", icon: "🍇", path: [[620, 360]], size: 140, from: 1.2, to: 5.2 },
          { kind: "sprite", icon: "🍫", path: [[950, 360]], size: 140, from: 1.6, to: 5.2 },
          { kind: "text", at: [600, 110], text: "借读音相近的字记声音", color: sound, from: 2.0, to: 5.2 },
          { kind: "sprite", icon: "☕", path: [[210, 400]], size: 150, from: 5.4 },
          { kind: "glyph", char: "咖", at: [550, 400], size: 230, from: 5.8 },
          { kind: "glyph", char: "啡", at: [890, 400], size: 230, from: 6.2 },
          { kind: "highlight", at: [480, 400], size: [95, 210], color: meaning, from: 7.0, to: 9.2 },
          { kind: "highlight", at: [820, 400], size: [95, 210], color: meaning, from: 7.2, to: 9.2 },
          { kind: "highlight", at: [605, 400], size: [135, 210], color: sound, from: 9.4 },
          { kind: "highlight", at: [945, 400], size: [135, 210], color: sound, from: 9.6 },
          { kind: "text", at: [600, 800], text: "口字旁：嘴里喝的东西", color: meaning, from: 7.6 }
        ]
      },
      {
        turn: 1, title: "西域传来的葡萄", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "两千多年前 · 西汉通西域", from: 0.3, to: 5.8 },
          { kind: "sprite", icon: "🍇", path: [[210, 410]], size: 150, from: 0.6 },
          { kind: "glyph", char: "蒲", script: "seal", at: [540, 400], size: 220, color: sound, caption: "先借声音", from: 1.4, to: 5.8 },
          { kind: "glyph", char: "萄", script: "seal", at: [870, 400], size: 220, color: sound, caption: "小篆字形", from: 2.0, to: 5.8 },
          { kind: "glyph", char: "葡", at: [540, 420], size: 240, from: 6.0 },
          { kind: "glyph", char: "萄", at: [870, 420], size: 240, from: 6.4 },
          { kind: "highlight", at: [540, 325], size: [220, 85], color: meaning, from: 7.4 },
          { kind: "highlight", at: [870, 325], size: [220, 85], color: meaning, from: 7.6 },
          { kind: "text", at: [600, 800], text: "戴上草字头：长藤植物", color: meaning, from: 8.2 }
        ]
      },
      {
        turn: 2, title: "专门新造的「塔」", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "佛塔早先按音译作「浮屠」", from: 0.3, to: 4.8 },
          { kind: "sprite", icon: "🛕", path: [[260, 410]], size: 170, from: 0.6, to: 4.8 },
          { kind: "shape", shape: "pill", at: [760, 410], size: [320, 110], color: "#ece2ff", text: "浮屠", from: 1.6, to: 4.8 },
          { kind: "glyph", char: "土", script: "oracle", at: [260, 400], size: 210, color: meaning, caption: "泥土建筑", from: 5.0, to: 8.2 },
          { kind: "arrow", path: [[430, 400], [600, 400]], text: "配上读音", from: 5.6, to: 8.2 },
          { kind: "glyph", char: "塔", script: "seal", at: [830, 400], size: 240, caption: "新造形声字", from: 6.2, to: 8.2 },
          { kind: "glyph", char: "塔", at: [600, 390], size: 300, motion: "pulse", from: 8.4 },
          { kind: "highlight", at: [510, 390], size: [110, 260], color: meaning, from: 9.0 },
          { kind: "highlight", at: [665, 390], size: [170, 260], color: sound, from: 9.4 },
          { kind: "text", at: [600, 800], text: "土字旁表建筑，右边表读音", from: 9.6 }
        ]
      },
      {
        turn: 3, title: "德律风变成电话", duration: 12,
        cues: [
          { kind: "sprite", icon: "☎️", path: [[200, 330]], size: 140, from: 0.4 },
          { kind: "shape", shape: "pill", at: [600, 330], size: [340, 110], color: "#ece2ff", text: "德律风", from: 1.0, to: 5.0 },
          { kind: "sprite", icon: "❓", path: [[940, 330]], size: 100, wobble: true, from: 1.8, to: 5.0 },
          { kind: "text", at: [600, 110], text: "早年按声音译：猜不出意思", from: 2.2, to: 5.0 },
          { kind: "glyph", char: "電", script: "seal", at: [460, 330], size: 180, color: meaning, caption: "小篆的电", from: 5.2 },
          { kind: "glyph", char: "电", at: [730, 330], size: 190, color: meaning, from: 5.8 },
          { kind: "glyph", char: "话", at: [970, 330], size: 190, color: meaning, from: 6.2 },
          { kind: "myth", wrong: "电话一直都叫「电话」", right: "早年曾音译「德律风」，后改意译", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "一半意思一半声音", duration: 12,
        cues: [
          { kind: "sprite", icon: "🍦", path: [[600, 190]], size: 130, from: 0.3, to: 4.8 },
          { kind: "glyph", char: "冰", script: "seal", at: [240, 420], size: 190, color: meaning, caption: "讲意思", path: [[380, 420]], travel: 1.3, from: 0.8, to: 4.8 },
          { kind: "shape", shape: "pill", at: [860, 420], size: [280, 105], color: "#ece2ff", text: "淇淋", from: 1.4, to: 4.8 },
          { kind: "glyph", char: "冰", at: [320, 370], size: 200, color: meaning, caption: "意思：冰凉", from: 5.0 },
          { kind: "glyph", char: "淇", at: [600, 370], size: 200, color: sound, from: 5.4 },
          { kind: "glyph", char: "淋", at: [880, 370], size: 200, color: sound, caption: "借音：cream", from: 5.8 },
          { kind: "shape", shape: "pill", at: [360, 640], size: [260, 90], color: "#ffe2b8", text: "芭蕾舞", from: 7.4 },
          { kind: "shape", shape: "pill", at: [840, 640], size: [260, 90], color: "#d8f0d0", text: "迷你裙", from: 8.0 },
          { kind: "text", at: [600, 810], text: "留住声音，又一看就懂", from: 8.8 }
        ]
      }
    ]
  }
];
