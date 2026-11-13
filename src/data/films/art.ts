import type { Film } from "./types";

const ink = "#4a3b2a";
const gold = "#c9a227";
const blue = "#4fb6ff";

export const films: readonly Film[] = [
  {
    question: "yong-eight",
    scenes: [
      {
        turn: 0, title: "永字八法", duration: 12,
        cues: [
          { kind: "text", at: [600, 90], text: "永字八法", size: "l", from: 0.4 },
          { kind: "write", char: "永", at: [760, 430], size: 460, grid: true, stroke: 0.9, from: 0.8 },
          { kind: "text", at: [760, 760], text: "藏着八种笔画", from: 6 },
          { kind: "glyph", char: "永", script: "oracle", at: [260, 430], size: 260, caption: "甲骨文的永", from: 8.4 }
        ]
      },
      {
        turn: 1, title: "一笔里拐弯", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 75], text: "五笔里藏着八种", from: 0.4, to: 4.8 },
          { kind: "write", char: "永", at: [600, 450], size: 640, stroke: 0.8, mark: [1, 2], from: 0.6 },
          { kind: "label", at: [565, 300], text: "横", side: "left", from: 5.2 },
          { kind: "label", at: [625, 520], text: "竖", side: "right", from: 6.2 },
          { kind: "label", at: [575, 705], text: "钩", side: "left", from: 7.2 },
          { kind: "label", at: [430, 420], text: "提", side: "left", from: 8.6 },
          { kind: "label", at: [380, 620], text: "长撇", side: "left", from: 9.6 }
        ]
      },
      {
        turn: 2, title: "古人起的名字", view: "grid", duration: 11,
        cues: [
          { kind: "write", char: "永", at: [600, 450], size: 640, stroke: 0.5, mark: [0, 2, 4], from: 0.3 },
          { kind: "label", at: [600, 190], text: "点：侧", side: "right", from: 3.4 },
          { kind: "label", at: [360, 640], text: "长撇：掠", side: "left", from: 4.6 },
          { kind: "label", at: [850, 690], text: "捺：磔", side: "right", from: 5.8 },
          { kind: "text", at: [600, 830], text: "点横竖钩提撇捺", from: 7.6 }
        ]
      },
      {
        turn: 3, title: "谁总结的？", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "谁总结的？说法不一样", from: 0.3 },
          { kind: "shape", shape: "pill", at: [250, 330], size: [280, 100], color: "#ffe2b8", text: "东汉书法家", from: 1.2 },
          { kind: "shape", shape: "pill", at: [600, 330], size: [220, 100], color: "#d8f0d0", text: "王羲之", from: 2 },
          { kind: "shape", shape: "pill", at: [950, 330], size: [220, 100], color: "#dbe8ff", text: "智永", from: 3 },
          { kind: "label", at: [950, 330], text: "王羲之第七代子孙", side: "bottom", from: 3.6 },
          { kind: "sprite", icon: "⏳", path: [[600, 560]], size: 120, from: 6 },
          { kind: "myth", wrong: "王羲之只练永字十五年", right: "唐宋笔记里的传说", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "智永的千字文", duration: 12,
        cues: [
          { kind: "image", src: "art/zhiyong.jpg", at: [300, 440], size: [300, 660], caption: "智永《真草千字文》", from: 0.3 },
          { kind: "count", at: [860, 230], label: "千字文", start: 0, end: 800, unit: "多本", from: 1.4 },
          { kind: "highlight", at: [408, 440], size: [70, 650], from: 5 },
          { kind: "text", at: [860, 450], text: "一行楷书", from: 5.4 },
          { kind: "highlight", at: [337, 440], size: [70, 650], color: blue, from: 7 },
          { kind: "text", at: [860, 560], text: "一行草书", from: 7.4 },
          { kind: "text", at: [860, 720], text: "写的是一样的字", from: 9 }
        ]
      },
      {
        turn: 5, title: "先学楷书", duration: 12,
        camera: [
          { t: 0, at: [600, 450], zoom: 1 },
          { t: 1.5, at: [370, 270], zoom: 2.2 },
          { t: 5.5, at: [370, 270], zoom: 2.2 },
          { t: 7, at: [600, 450], zoom: 1 }
        ],
        cues: [
          { kind: "image", src: "art/zhiyong.jpg", at: [300, 440], size: [300, 660], from: 0 },
          { kind: "highlight", at: [408, 170], size: [80, 90], from: 2, to: 5.5 },
          { kind: "highlight", at: [337, 175], size: [80, 90], color: blue, from: 3, to: 5.5 },
          { kind: "text", at: [980, 250], text: "楷书：一笔是一笔", from: 2.4, to: 6.5 },
          { kind: "write", char: "永", at: [820, 450], size: 400, grid: true, stroke: 0.6, from: 7.2 },
          { kind: "text", at: [820, 760], text: "先把八种笔画写稳", from: 9 }
        ]
      }
    ]
  },
  {
    question: "silkworm-swallow",
    scenes: [
      {
        turn: 0, title: "宽宽扁扁的隶书", duration: 12,
        cues: [
          { kind: "image", src: "art/caoquan.jpg", at: [380, 430], size: [416, 490], caption: "东汉《曹全碑》", from: 0.3 },
          { kind: "glyph", char: "隸", script: "seal", at: [880, 340], size: 190, caption: "小篆的隶", from: 1.8 },
          { kind: "text", at: [880, 580], text: "公元 185 年立碑", from: 4 },
          { kind: "text", at: [600, 815], text: "宽宽扁扁 · 像张开翅膀", from: 7 }
        ]
      },
      {
        turn: 1, title: "把小篆拉直拍扁", duration: 12,
        cues: [
          { kind: "glyph", char: "漢", script: "seal", at: [250, 410], size: 220, caption: "小篆：瘦长圆弯", from: 0.4 },
          { kind: "shape", shape: "rect", at: [250, 400], size: [170, 310], color: "none", outline: true, from: 1.4 },
          { kind: "arrow", path: [[380, 410], [640, 410]], text: "拉直拍扁", from: 3.2 },
          { kind: "shape", shape: "rect", at: [880, 410], size: [340, 190], color: "#ffe2c4", outline: true, from: 4.6 },
          { kind: "glyph", char: "汉", at: [880, 410], size: 190, caption: "干脆好写", from: 5.2 },
          { kind: "text", at: [600, 800], text: "古文字到今天文字的大转弯", from: 7.8 }
        ]
      },
      {
        turn: 2, title: "一波三折：蚕头燕尾", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "一波三折", size: "l", from: 0.4 },
          { kind: "line", path: [[220, 470], [280, 495], [580, 455], [860, 495], [990, 420]], color: ink, width: 24, draw: 1.8, from: 0.8 },
          { kind: "shape", shape: "circle", at: [235, 480], size: [42, 42], color: ink, from: 0.9 },
          { kind: "highlight", at: [250, 482], size: [120, 110], from: 2.8, to: 5 },
          { kind: "label", at: [250, 482], text: "蚕头：圆圆顿笔", side: "top", from: 3.2 },
          { kind: "highlight", at: [935, 455], size: [150, 130], color: blue, from: 5.2, to: 7.6 },
          { kind: "label", at: [935, 455], text: "燕尾（雁尾）：往上挑", side: "top", from: 5.6 },
          { kind: "glyph", char: "燕", script: "oracle", at: [600, 690], size: 150, caption: "甲骨文的燕", from: 7.8 }
        ]
      },
      {
        turn: 3, title: "老规矩：雁不双飞", duration: 12,
        cues: [
          { kind: "text", at: [600, 105], text: "雁不双飞（燕不双飞）", size: "l", from: 0.4 },
          { kind: "line", path: [[400, 250], [800, 245]], color: ink, width: 16, draw: 0.7, from: 1 },
          { kind: "line", path: [[430, 365], [770, 360]], color: ink, width: 16, draw: 0.7, from: 2 },
          { kind: "label", at: [770, 360], text: "别的横老实收住", side: "right", from: 2.8, to: 7.2 },
          { kind: "line", path: [[270, 495], [330, 515], [600, 480], [840, 515], [950, 445]], color: "#d9453a", width: 22, draw: 1.2, from: 4 },
          { kind: "label", at: [950, 445], text: "只亮一条大尾巴", side: "top", from: 5.4 },
          { kind: "myth", wrong: "每一笔横都要挑出燕尾", right: "雁不双飞：一字只亮一条大尾巴", from: 7.4 }
        ]
      },
      {
        turn: 4, title: "完好如初的《曹全碑》", duration: 13,
        camera: [
          { t: 0, at: [600, 450], zoom: 1 },
          { t: 4.8, at: [600, 450], zoom: 1 },
          { t: 6.4, at: [660, 370], zoom: 1.9 },
          { t: 10.2, at: [660, 370], zoom: 1.9 },
          { t: 11.6, at: [600, 450], zoom: 1 }
        ],
        cues: [
          { kind: "image", src: "art/caoquan.jpg", at: [600, 430], size: [459, 540], caption: "西安碑林博物馆藏", from: 0.2 },
          { kind: "count", at: [190, 360], label: "立碑至今", start: 0, end: 1800, unit: "多年", from: 0.8, to: 4.8 },
          { kind: "highlight", at: [775, 360], size: [85, 300], from: 6.6, to: 10.2 },
          { kind: "label", at: [775, 240], text: "字迹完好秀美", side: "left", from: 7, to: 10.2 },
          { kind: "text", at: [600, 820], text: "沙土保护 · 明朝在陕西出土", from: 10.4 }
        ]
      }
    ]
  },
  {
    question: "yan-liu",
    scenes: [
      {
        turn: 0, title: "颜筋柳骨", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "颜筋柳骨", size: "l", from: 0.3 },
          { kind: "glyph", char: "筋", at: [320, 400], size: 240, caption: "颜真卿", from: 1.5 },
          { kind: "glyph", char: "骨", at: [880, 400], size: 240, caption: "柳公权", from: 2.5 },
          { kind: "sprite", icon: "💪", path: [[130, 400]], size: 90, from: 3.5 },
          { kind: "sprite", icon: "🦴", path: [[1070, 400]], size: 90, from: 4.5 },
          { kind: "text", at: [600, 700], text: "1043 年 · 范仲淹", from: 7 },
          { kind: "text", at: [600, 810], text: "本来夸朋友石曼卿", size: "s", from: 8.5 }
        ]
      },
      {
        turn: 1, title: "宽大饱满", duration: 12,
        cues: [
          { kind: "image", src: "art/duobao.jpg", at: [330, 450], size: [330, 612], caption: "颜真卿《多宝塔碑》", from: 0.3 },
          { kind: "text", at: [850, 140], text: "752 年 · 44 岁", from: 1.4 },
          { kind: "text", at: [850, 300], text: "宽大、饱满", from: 3.5 },
          { kind: "line", path: [[740, 480], [960, 480]], color: ink, width: 8, draw: 0.6, from: 5.5 },
          { kind: "line", path: [[850, 400], [850, 640]], color: ink, width: 30, draw: 0.6, from: 6.5 },
          { kind: "text", at: [850, 740], text: "横细竖粗，像有筋", from: 8 },
          { kind: "sprite", icon: "💪", path: [[1070, 560]], size: 90, from: 9 }
        ]
      },
      {
        turn: 2, title: "瘦硬有棱角", duration: 12,
        cues: [
          { kind: "image", src: "art/xuanmi-tian.jpg", at: [330, 430], size: [360, 360], caption: "柳公权《玄秘塔碑》", from: 0.3 },
          { kind: "text", at: [600, 110], text: "841 年 · 64 岁", from: 1.2 },
          { kind: "highlight", at: [228, 410], size: [90, 90], from: 4, to: 7 },
          { kind: "label", at: [228, 410], text: "方方的，有棱角", pos: [330, 195], from: 4.4, to: 7 },
          { kind: "image", src: "art/xuanmi-jia.jpg", at: [870, 430], size: [360, 360], from: 6.5 },
          { kind: "text", at: [600, 800], text: "瘦瘦硬硬，像骨头", from: 8.5 }
        ]
      },
      {
        turn: 3, title: "大力士和武士", duration: 12,
        cues: [
          { kind: "image", src: "art/duobao.jpg", at: [300, 430], size: [300, 556], from: 0.3 },
          { kind: "image", src: "art/xuanmi-tian.jpg", at: [900, 430], size: [340, 340], from: 0.8 },
          { kind: "sprite", icon: "🏋️", path: [[540, 250]], size: 90, from: 2 },
          { kind: "sprite", icon: "🤺", path: [[660, 250]], size: 90, from: 3.5 },
          { kind: "text", at: [600, 470], text: "楷书四大家", size: "s", from: 6.5 },
          { kind: "text", at: [600, 820], text: "学楷书常从字帖开始", from: 8.5 }
        ]
      },
      {
        turn: 4, title: "心正则笔正", duration: 12,
        cues: [
          { kind: "sprite", icon: "👑", path: [[250, 300]], size: 130, from: 0.5 },
          { kind: "label", at: [250, 300], text: "唐朝的皇帝", side: "bottom", from: 1 },
          { kind: "sprite", icon: "🖌️", path: [[250, 600]], size: 120, from: 2 },
          { kind: "text", at: [700, 130], text: "用笔在心，心正则笔正", from: 3 },
          { kind: "evolve", at: [760, 420], size: 260, every: 1.8, from: 4.5, forms: [{ script: "oracle", char: "心" }, { script: "kai", char: "心" }] },
          { kind: "text", at: [700, 800], text: "借写字劝皇帝做正直的人", from: 8.5 }
        ]
      }
    ]
  },
  {
    question: "slender-gold",
    scenes: [
      {
        turn: 0, title: "像金丝一样细", duration: 12,
        cues: [
          { kind: "sprite", icon: "👑", path: [[220, 330]], size: 130, from: 0.4 },
          { kind: "label", at: [220, 330], text: "宋徽宗", side: "bottom", from: 1 },
          { kind: "text", at: [600, 110], text: "瘦金体", size: "l", from: 0.8, to: 8.4 },
          { kind: "line", path: [[420, 380], [560, 300], [700, 420], [840, 300], [1000, 400]], color: gold, width: 5, draw: 2, from: 2.5 },
          { kind: "text", at: [660, 560], text: "像金丝一样细、一样硬", from: 4.5 },
          { kind: "text", at: [600, 110], text: "他自己叫它：瘦金书", from: 8.6 }
        ]
      },
      {
        turn: 1, title: "看笔画的头和尾", duration: 12,
        camera: [
          { t: 0, at: [600, 450], zoom: 1 },
          { t: 2, at: [600, 450], zoom: 2.2 },
          { t: 5.5, at: [600, 450], zoom: 2.2 },
          { t: 7, at: [450, 470], zoom: 2.2 },
          { t: 10, at: [450, 470], zoom: 2.2 },
          { t: 11.5, at: [600, 450], zoom: 1 }
        ],
        cues: [
          { kind: "image", src: "art/nongfang.jpg", at: [600, 400], size: [980, 291], from: 0.2 },
          { kind: "highlight", at: [680, 452], size: [70, 60], from: 2.6, to: 6 },
          { kind: "label", at: [680, 452], text: "横：收笔顿一下", side: "top", from: 3, to: 6 },
          { kind: "highlight", at: [445, 526], size: [60, 70], from: 7.3, to: 10.5 },
          { kind: "label", at: [445, 526], text: "竖：像鹤的膝盖", side: "right", from: 7.6, to: 10.5 },
          { kind: "text", at: [600, 820], text: "收笔都顿一下", from: 8.5 }
        ]
      },
      {
        turn: 1, title: "细线加顿点", duration: 10,
        cues: [
          { kind: "line", path: [[260, 300], [620, 290]], color: ink, width: 7, draw: 1, from: 0.4 },
          { kind: "shape", shape: "circle", at: [628, 292], size: [28, 28], color: ink, from: 1.5 },
          { kind: "label", at: [628, 292], text: "横收笔顿一下", side: "right", from: 1.8, to: 4.6 },
          { kind: "line", path: [[440, 400], [440, 720]], color: ink, width: 7, draw: 1, from: 3 },
          { kind: "shape", shape: "circle", at: [440, 722], size: [28, 28], color: ink, from: 4 },
          { kind: "text", at: [600, 110], text: "竖收笔像鹤的膝盖", from: 4.6, to: 7 },
          { kind: "sprite", icon: "🗡️", path: [[850, 560]], size: 110, from: 6.5 },
          { kind: "sprite", icon: "🍃", path: [[1040, 560]], size: 110, from: 7.2 },
          { kind: "text", at: [800, 800], text: "撇像匕首，捺像柳叶", from: 7.6 }
        ]
      },
      {
        turn: 2, title: "《秾芳诗帖》", duration: 12,
        cues: [
          { kind: "image", src: "art/nongfang.jpg", at: [600, 380], size: [980, 291], caption: "宋徽宗《秾芳诗帖》", from: 0.3 },
          { kind: "arrow", path: [[1060, 185], [140, 185]], text: "从右往左读", from: 1.5 },
          { kind: "highlight", at: [990, 380], size: [110, 280], from: 2.5, to: 5 },
          { kind: "text", at: [600, 90], text: "每行两个字", from: 3 },
          { kind: "count", at: [330, 700], label: "一共", start: 0, end: 20, unit: "行", from: 5 },
          { kind: "count", at: [870, 700], label: "一共", start: 0, end: 40, unit: "个字", from: 7 },
          { kind: "text", at: [600, 840], text: "字大近 5 寸 · 台北故宫", size: "s", from: 9 }
        ]
      },
      {
        turn: 3, title: "如幽兰丛竹", duration: 12,
        cues: [
          { kind: "image", src: "art/nongfang.jpg", at: [600, 300], size: [980, 291], from: 0.3 },
          { kind: "text", at: [600, 560], text: "如幽兰丛竹", size: "l", from: 2 },
          { kind: "glyph", char: "竹", script: "oracle", at: [300, 720], size: 180, caption: "甲骨文的竹", from: 4 },
          { kind: "sprite", icon: "🎋", path: [[620, 730]], size: 120, from: 5 },
          { kind: "sprite", icon: "🌿", path: [[880, 730]], size: 110, from: 6 },
          { kind: "text", at: [600, 80], text: "用画画的办法写字", from: 8 }
        ]
      },
      {
        turn: 4, title: "会写会画的皇帝", duration: 12,
        cues: [
          { kind: "sprite", icon: "👑", path: [[600, 300]], size: 150, from: 0.4 },
          { kind: "sprite", icon: "🎨", path: [[330, 330]], size: 110, from: 1.5 },
          { kind: "sprite", icon: "🖌️", path: [[870, 330]], size: 110, from: 2 },
          { kind: "text", at: [600, 110], text: "字写得好，画画得好", from: 2.5 },
          { kind: "text", at: [600, 560], text: "可是没当好皇帝", from: 5.5 },
          { kind: "text", at: [600, 720], text: "北宋在他和儿子手里亡国", from: 7.5 }
        ]
      }
    ]
  },
  {
    question: "wild-cursive",
    scenes: [
      {
        turn: 0, title: "像在跳舞的字", duration: 12,
        cues: [
          { kind: "image", src: "art/huaisu.jpg", at: [600, 330], size: [1000, 320], caption: "怀素《自叙帖》", from: 0.3 },
          { kind: "text", at: [600, 90], text: "草书：写得快，笔画连着", from: 1 },
          { kind: "glyph", char: "舞", script: "oracle", at: [220, 695], size: 190, caption: "甲骨文的舞", from: 4 },
          { kind: "text", at: [700, 690], text: "颠张 · 醉素", size: "l", from: 7 },
          { kind: "sprite", icon: "🍶", path: [[1020, 720]], size: 100, from: 8.5 }
        ]
      },
      {
        turn: 1, title: "人称张颠", duration: 12,
        cues: [
          { kind: "sprite", icon: "🍶", path: [[250, 330]], size: 130, from: 0.5 },
          { kind: "text", at: [600, 110], text: "喝醉了，大喊着跑来跑去", from: 1.2, to: 6.5 },
          { kind: "sprite", icon: "🏃", path: [[180, 600], [600, 560], [1020, 600]], size: 110, travel: 2.5, wobble: true, from: 2, to: 5.6 },
          { kind: "sprite", icon: "🖌️", path: [[700, 380]], size: 130, from: 5.8 },
          { kind: "label", at: [700, 380], text: "头发蘸墨写字", side: "right", from: 6.2 },
          { kind: "text", at: [600, 800], text: "人称张颠", size: "l", from: 8.5 }
        ]
      },
      {
        turn: 2, title: "看舞剑，看抢路", duration: 12,
        cues: [
          { kind: "sprite", icon: "🗡️", path: [[280, 360]], size: 140, wobble: true, from: 0.5 },
          { kind: "label", at: [280, 360], text: "公孙大娘舞剑", side: "bottom", from: 1 },
          { kind: "arrow", path: [[430, 360], [730, 360]], text: "草书大有进步", from: 3 },
          { kind: "sprite", icon: "🖌️", path: [[880, 360]], size: 130, from: 3.8 },
          { kind: "sprite", icon: "🧺", path: [[180, 680], [540, 680]], size: 100, travel: 1.5, from: 6.4 },
          { kind: "sprite", icon: "👸", path: [[1020, 680], [660, 680]], size: 100, travel: 1.5, from: 6.8 },
          { kind: "text", at: [600, 820], text: "抢着过路，悟出门道", from: 8.6 }
        ]
      },
      {
        turn: 3, title: "夏天的云和芭蕉", duration: 13,
        cues: [
          { kind: "glyph", char: "云", script: "oracle", at: [260, 330], size: 220, caption: "甲骨文的云", from: 0.5 },
          { kind: "sprite", icon: "☁️", path: [[620, 280], [820, 260]], size: 150, travel: 3, wobble: true, from: 1.2 },
          { kind: "text", at: [600, 90], text: "看夏天的云，变来变去", from: 1.6, to: 6.4 },
          { kind: "sprite", icon: "🌿", path: [[260, 680]], size: 140, from: 6 },
          { kind: "count", at: [760, 620], label: "种芭蕉", start: 0, end: 10000, unit: "多棵", from: 6.5 },
          { kind: "text", at: [600, 830], text: "木盘、木板都写穿了", from: 10 }
        ]
      },
      {
        turn: 4, title: "《自叙帖》", duration: 12,
        camera: [
          { t: 0, at: [600, 450], zoom: 1 },
          { t: 4, at: [600, 450], zoom: 1 },
          { t: 5.5, at: [330, 400], zoom: 2 },
          { t: 9, at: [330, 400], zoom: 2 },
          { t: 10.5, at: [600, 450], zoom: 1 }
        ],
        cues: [
          { kind: "image", src: "art/huaisu.jpg", at: [600, 400], size: [1000, 320], caption: "怀素《自叙帖》", from: 0.3 },
          { kind: "text", at: [600, 110], text: "777 年 · 702 个字", from: 1.4, to: 4.2 },
          { kind: "highlight", at: [124, 400], size: [70, 270], from: 5.6, to: 9.2 },
          { kind: "text", at: [880, 790], text: "大历年间的冬天", from: 6, to: 9.4 },
          { kind: "text", at: [600, 820], text: "台北故宫博物院收藏", from: 10.6 }
        ]
      },
      {
        turn: 5, title: "看着乱，有规矩", duration: 12,
        cues: [
          { kind: "myth", wrong: "草书想怎么写就怎么写", right: "每个字都有固定的写法", from: 0.4, to: 5.6 },
          { kind: "text", at: [600, 110], text: "像大家说好的暗号", from: 3, to: 5.6 },
          { kind: "image", src: "art/zhiyong.jpg", at: [300, 400], size: [270, 594], caption: "智永《真草千字文》", from: 5.8 },
          { kind: "highlight", at: [397, 400], size: [64, 580], from: 7 },
          { kind: "text", at: [820, 300], text: "一行楷书", from: 7.3 },
          { kind: "highlight", at: [332, 400], size: [64, 580], color: blue, from: 8 },
          { kind: "text", at: [820, 420], text: "一行草书：连起来了", from: 8.3 }
        ]
      }
    ]
  },
  {
    question: "nephew-draft",
    scenes: [
      {
        turn: 0, title: "一张草稿", duration: 12,
        cues: [
          { kind: "image", src: "art/jizhi.jpg", at: [600, 440], size: [360, 665], caption: "颜真卿《祭侄文稿》", from: 0.3 },
          { kind: "glyph", char: "祭", script: "oracle", at: [230, 360], size: 200, caption: "甲骨文的祭", from: 2 },
          { kind: "text", at: [990, 280], text: "祭：想念去世的人", size: "s", from: 2.8 },
          { kind: "text", at: [990, 420], text: "侄：侄子", size: "s", from: 4 },
          { kind: "text", at: [990, 560], text: "758 年", from: 6 },
          { kind: "text", at: [990, 680], text: "侄子在战乱中去世", size: "s", from: 7.2 }
        ]
      },
      {
        turn: 1, title: "涂改三十多处", duration: 13,
        camera: [
          { t: 0, at: [600, 450], zoom: 1 },
          { t: 6, at: [600, 450], zoom: 1 },
          { t: 7.5, at: [630, 460], zoom: 2.2 },
          { t: 11, at: [630, 460], zoom: 2.2 },
          { t: 12.5, at: [600, 450], zoom: 1 }
        ],
        cues: [
          { kind: "image", src: "art/jizhi.jpg", at: [600, 440], size: [360, 665], from: 0 },
          { kind: "count", at: [990, 230], label: "一共", start: 0, end: 23, unit: "行", from: 0.8, to: 6 },
          { kind: "count", at: [990, 420], label: "一共", start: 0, end: 234, unit: "个字", from: 2.2, to: 6 },
          { kind: "text", at: [990, 600], text: "涂改三十多处", size: "s", from: 3.8, to: 6 },
          { kind: "highlight", at: [631, 460], size: [60, 130], from: 7.8, to: 11.5 },
          { kind: "text", at: [1060, 460], text: "后来添的字", size: "s", from: 8, to: 11.5 }
        ]
      },
      {
        turn: 2, title: "越写越快", duration: 12,
        cues: [
          { kind: "image", src: "art/jizhi.jpg", at: [300, 440], size: [360, 665], from: 0.3 },
          { kind: "meter", at: [850, 230], label: "写字速度", start: 0.25, end: 0.9, color: "#ff9f43", from: 1.2 },
          { kind: "meter", at: [850, 400], label: "字的大小", start: 0.3, end: 0.85, color: "#6fd39a", from: 3 },
          { kind: "meter", at: [850, 570], label: "笔上的墨", start: 0.9, end: 0.15, color: ink, from: 4.8 },
          { kind: "text", at: [850, 740], text: "露出白丝：飞白", from: 7.5 }
        ]
      },
      {
        turn: 3, title: "天下第二", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "每一笔都带着心情", from: 0.4, to: 4.6 },
          { kind: "sprite", icon: "😟", path: [[450, 420]], size: 120, from: 1.2, to: 4.6 },
          { kind: "sprite", icon: "😢", path: [[750, 420]], size: 120, from: 2, to: 4.6 },
          { kind: "shape", shape: "rect", at: [400, 560], size: [240, 320], color: "#ffe2b8", text: "兰亭序", from: 5 },
          { kind: "text", at: [400, 340], text: "第一", from: 5.4 },
          { kind: "shape", shape: "rect", at: [800, 620], size: [240, 200], color: "#dbe8ff", text: "祭侄文稿", from: 6 },
          { kind: "text", at: [800, 460], text: "第二", from: 6.4 },
          { kind: "text", at: [600, 820], text: "天下行书第二", size: "l", from: 8 }
        ]
      },
      {
        turn: 4, title: "天下最有名的三张", duration: 12,
        cues: [
          { kind: "shape", shape: "pill", at: [950, 380], size: [260, 100], color: "#d8f0d0", text: "寒食帖", from: 0.5 },
          { kind: "shape", shape: "pill", at: [250, 380], size: [260, 100], color: "#ffe2b8", text: "兰亭序", from: 3 },
          { kind: "shape", shape: "pill", at: [600, 380], size: [260, 100], color: "#dbe8ff", text: "祭侄文稿", from: 3.6 },
          { kind: "text", at: [600, 140], text: "天下三大行书", size: "l", from: 5 },
          { kind: "sprite", icon: "🏛️", path: [[600, 600]], size: 140, from: 8 },
          { kind: "text", at: [600, 800], text: "藏在台北故宫博物院", from: 8.4 }
        ]
      },
      {
        turn: 5, title: "猜猜写字人的心情", duration: 12,
        cues: [
          { kind: "glyph", char: "心", script: "oracle", at: [270, 420], size: 260, caption: "甲骨文的心", from: 0.5 },
          { kind: "text", at: [600, 110], text: "猜一猜写字人的心情", from: 1.4 },
          { kind: "sprite", icon: "😊", path: [[680, 420]], size: 120, from: 3 },
          { kind: "sprite", icon: "😣", path: [[860, 420]], size: 120, from: 3.8 },
          { kind: "sprite", icon: "😢", path: [[1040, 420]], size: 120, from: 4.6 },
          { kind: "text", at: [700, 780], text: "字会悄悄告诉你", from: 7.5 }
        ]
      }
    ]
  }
];
