import type { Film } from "./types";

const ink = "#4a3b2a";
const red = "#d9453a";

export const films: readonly Film[] = [
  {
    question: "stroke-order",
    scenes: [
      {
        turn: 0, title: "先横后竖", view: "grid", duration: 10,
        cues: [
          { kind: "write", char: "十", at: [600, 450], size: 640, stroke: 1.2, mark: [0], from: 0.8 },
          { kind: "label", at: [420, 450], text: "第一笔：横", side: "left", from: 2 },
          { kind: "text", at: [600, 75], text: "先横后竖", size: "l", from: 3.8 },
          { kind: "text", at: [600, 830], text: "这个顺序叫笔顺", from: 6.5 }
        ]
      },
      {
        turn: 1, title: "笔顺的规矩", duration: 12,
        cues: [
          { kind: "write", char: "人", at: [250, 400], size: 300, grid: true, stroke: 0.8, from: 0.5 },
          { kind: "text", at: [250, 620], text: "先撇后捺", size: "s", from: 1.4 },
          { kind: "write", char: "三", at: [600, 400], size: 300, grid: true, stroke: 0.8, from: 2.8 },
          { kind: "text", at: [600, 620], text: "从上到下", size: "s", from: 3.6 },
          { kind: "write", char: "明", at: [950, 400], size: 300, grid: true, stroke: 0.6, from: 5.8 },
          { kind: "text", at: [950, 620], text: "从左到右", size: "s", from: 6.6 },
          { kind: "text", at: [600, 800], text: "从上往下，从左往右", from: 10.4 }
        ]
      },
      {
        turn: 2, title: "先里头，后封口", view: "grid", duration: 12,
        cues: [
          { kind: "text", at: [600, 75], text: "先外面，再里面，最后封口", from: 0.3 },
          { kind: "write", char: "日", at: [600, 450], size: 640, stroke: 1.1, mark: [3], from: 0.6, to: 6.6 },
          { kind: "label", at: [600, 645], text: "最后封口", side: "bottom", from: 4.8, to: 6.6 },
          { kind: "write", char: "国", at: [600, 450], size: 640, stroke: 0.5, mark: [7], from: 6.8 },
          { kind: "sprite", icon: "📦", path: [[1060, 450]], size: 110, from: 9.6 }
        ]
      },
      {
        turn: 3, title: "先中间，后两边", view: "grid", duration: 12,
        cues: [
          { kind: "sprite", icon: "📦", path: [[1060, 280]], size: 110, wobble: true, from: 0.4, to: 3.4 },
          { kind: "text", at: [600, 75], text: "先封口？里面挤歪了", from: 0.5, to: 3.4 },
          { kind: "write", char: "小", at: [600, 450], size: 640, stroke: 0.9, mark: [0], from: 3.6 },
          { kind: "text", at: [600, 75], text: "先中间，后两边", from: 3.8 },
          { kind: "glyph", char: "小", script: "oracle", at: [1060, 330], size: 200, caption: "甲骨文的小", from: 7 },
          { kind: "write", char: "水", at: [140, 620], size: 220, grid: true, stroke: 0.6, from: 8.6 }
        ]
      },
      {
        turn: 4, title: "五种基本笔画", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "横 竖 撇 点 折", size: "l", from: 0.3 },
          { kind: "line", path: [[90, 400], [250, 390]], color: ink, width: 22, draw: 0.6, from: 0.8, to: 8 },
          { kind: "line", path: [[400, 300], [400, 480]], color: ink, width: 22, draw: 0.6, from: 1.6, to: 8 },
          { kind: "line", path: [[640, 300], [615, 390], [540, 470]], color: ink, width: 22, draw: 0.6, from: 2.4, to: 8 },
          { kind: "line", path: [[790, 350], [835, 400]], color: ink, width: 26, draw: 0.4, from: 3.2, to: 8 },
          { kind: "line", path: [[960, 320], [1110, 320], [1095, 470]], color: ink, width: 22, draw: 0.8, from: 4, to: 8 },
          { kind: "text", at: [600, 620], text: "提、捺、钩是它们变的", size: "s", from: 5, to: 8 },
          { kind: "write", char: "十", at: [600, 450], size: 360, grid: true, stroke: 0.8, from: 8.3 },
          { kind: "text", at: [600, 800], text: "十 = 一横 + 一竖", from: 10.4 }
        ]
      },
      {
        turn: 5, title: "写得快、写得稳", duration: 12,
        cues: [
          { kind: "write", char: "日", at: [380, 430], size: 420, grid: true, stroke: 0.9, from: 0.8 },
          { kind: "shape", shape: "pill", at: [880, 300], size: [240, 90], color: "#ffe2b8", text: "写得快", from: 5 },
          { kind: "shape", shape: "pill", at: [880, 430], size: [240, 90], color: "#d8f0d0", text: "顺手", from: 6 },
          { kind: "shape", shape: "pill", at: [880, 560], size: [240, 90], color: "#dbe8ff", text: "字稳", from: 7 },
          { kind: "sprite", icon: "📱", path: [[880, 720]], size: 90, from: 9 },
          { kind: "label", at: [880, 720], text: "手写输入更准", side: "left", from: 9.4 }
        ]
      }
    ]
  },
  {
    question: "punctuation-dots",
    scenes: [
      {
        turn: 0, title: "没有标点的古书", view: "slips", duration: 12,
        cues: [
          { kind: "glyph", char: "子", at: [789, 250], size: 95, from: 0.3, to: 6.0 },
          { kind: "glyph", char: "曰", at: [789, 380], size: 95, from: 0.5, to: 6.0 },
          { kind: "glyph", char: "学", at: [789, 510], size: 95, from: 0.7, to: 6.0 },
          { kind: "glyph", char: "而", at: [789, 640], size: 95, from: 0.9, to: 6.0 },
          { kind: "sprite", icon: "😮‍💨", path: [[348, 430]], size: 130, wobble: true, from: 1.8, to: 6.0 },
          { kind: "text", at: [600, 95], text: "密密麻麻，在哪儿喘气？", from: 2.2, to: 6.0 },
          { kind: "glyph", char: "乎", at: [915, 360], size: 130, color: red, from: 6.2 },
          { kind: "glyph", char: "哉", at: [663, 460], size: 130, color: red, from: 6.7 },
          { kind: "glyph", char: "也", at: [411, 360], size: 130, color: red, from: 7.2 },
          { kind: "glyph", char: "矣", at: [159, 460], size: 130, color: red, from: 7.7 },
          { kind: "text", at: [600, 95], text: "靠语气词帮忙找停顿", from: 8.2 }
        ]
      },
      {
        turn: 1, title: "红笔点圈点", duration: 13,
        cues: [
          { kind: "glyph", char: "句", script: "oracle", at: [280, 360], size: 200, caption: "话说完了", from: 0.4, to: 7.4 },
          { kind: "line", path: [[430, 385], [452, 395], [460, 418], [450, 440], [428, 448], [406, 438], [398, 416], [408, 394], [430, 385]], color: red, width: 8, draw: 0.7, from: 1.4, to: 7.4 },
          { kind: "glyph", char: "讀", script: "seal", at: [800, 360], size: 200, caption: "念 dòu：稍停", from: 3.0, to: 7.4 },
          { kind: "line", path: [[945, 395], [972, 432]], color: red, width: 16, draw: 0.4, from: 4.0, to: 7.4 },
          { kind: "text", at: [600, 110], text: "句读（jù dòu）", from: 4.4, to: 7.4 },
          { kind: "sprite", icon: "🖌️", path: [[240, 380]], size: 140, from: 7.6 },
          { kind: "glyph", char: "圈", script: "seal", at: [560, 380], size: 210, color: red, caption: "小篆的圈", from: 8.0 },
          { kind: "glyph", char: "點", script: "seal", at: [880, 380], size: 210, color: red, caption: "小篆的点", from: 8.6 },
          { kind: "text", at: [600, 800], text: "好文章：可圈可点！", size: "l", color: red, from: 9.4 }
        ]
      },
      {
        turn: 2, title: "下雨天留客", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "下雨天留客天留我不留", size: "l", from: 0.3 },
          { kind: "sprite", icon: "🏠", path: [[180, 350]], size: 110, from: 1.4, to: 5.0 },
          { kind: "text", at: [520, 350], text: "天留，我不留", from: 1.8 },
          { kind: "shape", shape: "pill", at: [960, 350], size: [190, 85], color: "#f6d6d0", text: "赶客走", from: 2.4 },
          { kind: "sprite", icon: "🖌️", path: [[180, 580]], size: 110, from: 5.2 },
          { kind: "text", at: [520, 580], text: "留我不？留！", color: red, from: 5.8 },
          { kind: "shape", shape: "pill", at: [960, 580], size: [190, 85], color: "#d8f0d0", text: "留客住", from: 6.4 },
          { kind: "text", at: [600, 810], text: "停顿一换，意思全反了！", from: 8.2 }
        ]
      },
      {
        turn: 3, title: "宋朝明朝的刻书", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "宋朝明朝：书上刻圈点竖线", from: 0.3, to: 7.0 },
          { kind: "glyph", char: "書", script: "seal", at: [240, 340], size: 200, caption: "小篆的书", from: 0.8 },
          { kind: "glyph", char: "文", script: "oracle", at: [560, 340], size: 200, caption: "甲骨文的文", from: 1.6 },
          { kind: "line", path: [[820, 230], [820, 440]], color: red, width: 10, draw: 0.7, from: 2.8 },
          { kind: "label", at: [820, 440], text: "单线：人名", side: "bottom", pos: [800, 530], color: red, from: 3.4, to: 6.8 },
          { kind: "line", path: [[980, 230], [980, 440]], color: red, width: 8, draw: 0.7, from: 4.2 },
          { kind: "line", path: [[1004, 230], [1004, 440]], color: red, width: 8, draw: 0.7, from: 4.4 },
          { kind: "label", at: [992, 440], text: "双线：地名", side: "bottom", pos: [1010, 530], color: red, from: 4.8, to: 6.8 },
          { kind: "myth", wrong: "古代的书从来不印停顿记号", right: "宋明刻书已有圈点，只是没问号等", from: 7.2 }
        ]
      },
      {
        turn: 4, title: "新式标点来帮忙", duration: 12,
        cues: [
          { kind: "text", at: [600, 120], text: "1920 年推行新式标点", from: 0.3 },
          { kind: "count", at: [600, 280], label: "联名教授", start: 0, end: 6, unit: "位", over: 1.2, from: 1.2, to: 4.6 },
          { kind: "shape", shape: "circle", at: [200, 450], size: [150, 150], color: "#ffe2b8", text: "，", motion: "grow", over: 0.6, from: 4.8 },
          { kind: "shape", shape: "circle", at: [400, 450], size: [150, 150], color: "#f6d6d0", text: "。", motion: "grow", over: 0.6, from: 5.3 },
          { kind: "shape", shape: "circle", at: [600, 450], size: [150, 150], color: "#dbe8ff", text: "？", motion: "grow", over: 0.6, from: 5.8 },
          { kind: "shape", shape: "circle", at: [800, 450], size: [150, 150], color: "#d8f0d0", text: "！", motion: "grow", over: 0.6, from: 6.3 },
          { kind: "shape", shape: "circle", at: [1000, 450], size: [150, 150], color: "#ece2ff", text: "“ ”", motion: "grow", over: 0.6, from: 6.8 },
          { kind: "text", at: [600, 790], text: "看书再也不用猜在哪儿喘气！", from: 8.2 }
        ]
      }
    ]
  },
  {
    question: "brush-slips",
    scenes: [
      {
        turn: 0, title: "刀刻和笔写", duration: 12,
        cues: [
          { kind: "sprite", icon: "🐢", path: [[250, 340]], size: 130, from: 0.4, to: 6 },
          { kind: "sprite", icon: "🦴", path: [[250, 560]], size: 130, from: 0.8, to: 6 },
          { kind: "sprite", icon: "🔪", path: [[460, 250], [330, 450]], size: 80, travel: 1.4, from: 1.4, to: 6 },
          { kind: "text", at: [600, 110], text: "刀刻在龟甲牛骨上", from: 1.6, to: 6 },
          { kind: "sprite", icon: "🎋", path: [[700, 420]], size: 160, from: 6 },
          { kind: "sprite", icon: "🖌️", path: [[920, 420]], size: 120, from: 7 },
          { kind: "text", at: [600, 110], text: "竹片 + 毛笔 + 绳子", from: 8.4 },
          { kind: "text", at: [600, 800], text: "串起来就是一册书", from: 9.8 }
        ]
      },
      {
        turn: 1, title: "手拿着笔：聿", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "甲骨上的毛笔字", from: 0.3, to: 3.6 },
          { kind: "sprite", icon: "🦴", path: [[600, 420]], size: 200, from: 0.4, to: 3.6 },
          { kind: "line", path: [[540, 380], [660, 380]], color: red, width: 10, from: 1, to: 3.6 },
          { kind: "glyph", char: "聿", script: "oracle", at: [360, 420], size: 300, caption: "聿：手拿着笔", from: 3.8 },
          { kind: "arrow", path: [[540, 420], [680, 420]], text: "加竹字头", from: 6.4 },
          { kind: "glyph", char: "筆", script: "seal", at: [860, 420], size: 260, caption: "小篆的筆", from: 7 },
          { kind: "text", at: [600, 800], text: "今天：竹 + 毛 = 笔", from: 9.4 }
        ]
      },
      {
        turn: 2, title: "「册」和「典」", view: "slips", duration: 12,
        cues: [
          { kind: "evolve", at: [348, 400], size: 260, every: 1.4, from: 0.6, forms: [{ script: "oracle", char: "冊" }, { script: "seal", char: "冊" }, { script: "kai", char: "册" }] },
          { kind: "glyph", char: "典", script: "oracle", at: [852, 400], size: 280, caption: "双手捧着册", from: 4.4 },
          { kind: "highlight", at: [852, 480], size: [260, 110], color: red, from: 5.6, to: 8 },
          { kind: "text", at: [600, 800], text: "竹子会烂，还没找到", from: 8.4 }
        ]
      },
      {
        turn: 3, title: "竖着写，从右往左", view: "slips", duration: 12,
        cues: [
          { kind: "highlight", at: [1041, 450], size: [130, 800], from: 0.4, to: 4 },
          { kind: "label", at: [1041, 300], text: "比手指还窄", side: "left", from: 0.8, to: 4 },
          { kind: "arrow", path: [[1041, 180], [1041, 700]], text: "从上往下", from: 1.6, to: 7.6 },
          { kind: "arrow", path: [[980, 800], [320, 800]], text: "从右往左", from: 3.6, to: 7.6 },
          { kind: "text", at: [600, 110], text: "竖着写，从右往左排", from: 4.4 },
          { kind: "glyph", char: "馬", script: "oracle", at: [537, 430], size: 260, rotate: -90, turnTo: 0, over: 1.5, caption: "站起来的马", from: 6 },
          { kind: "glyph", char: "虎", script: "oracle", at: [285, 430], size: 220, from: 8.4 },
          { kind: "glyph", char: "象", script: "oracle", at: [789, 430], size: 220, from: 9 }
        ]
      },
      {
        turn: 4, title: "丝绸和纸", duration: 12,
        cues: [
          { kind: "sprite", icon: "🧣", path: [[240, 380]], size: 140, from: 0.5 },
          { kind: "label", at: [240, 380], text: "帛书：写在丝绸上", side: "bottom", from: 1 },
          { kind: "text", at: [600, 110], text: "西汉已经有纸", from: 3, to: 6 },
          { kind: "sprite", icon: "🌳", path: [[700, 260]], size: 80, from: 4.4, to: 7.6 },
          { kind: "sprite", icon: "👕", path: [[850, 230]], size: 80, from: 4.8, to: 7.6 },
          { kind: "sprite", icon: "🕸️", path: [[1000, 260]], size: 80, from: 5.2, to: 7.6 },
          { kind: "sprite", icon: "📜", path: [[850, 440]], size: 160, from: 5.8 },
          { kind: "text", at: [600, 110], text: "105 年 · 蔡伦", from: 6.2 },
          { kind: "myth", wrong: "纸是蔡伦发明的", right: "西汉就有纸，蔡伦把它改好了", from: 8 }
        ]
      },
      {
        turn: 5, title: "纸代替了竹简", duration: 11,
        cues: [
          { kind: "shape", shape: "rect", at: [320, 400], size: [200, 300], color: "#d9c08a", text: "竹简", motion: "shrink", from: 0.5, to: 5 },
          { kind: "shape", shape: "rect", at: [880, 400], size: [240, 320], color: "#fffaf0", text: "纸", motion: "grow", outline: true, from: 1, to: 5 },
          { kind: "text", at: [600, 110], text: "纸又轻又便宜", from: 2, to: 5.4 },
          { kind: "sprite", icon: "🖌️", path: [[600, 420]], size: 180, from: 5.4 },
          { kind: "text", at: [600, 110], text: "书法、春联还用毛笔", from: 5.8 },
          { kind: "sprite", icon: "✏️", path: [[900, 640]], size: 90, from: 8.4 },
          { kind: "text", at: [600, 800], text: "铅笔钢笔很晚才有", size: "s", from: 8.6 }
        ]
      }
    ]
  },
  {
    question: "how-many",
    scenes: [
      {
        turn: 0, title: "汉字有多少个", duration: 12,
        cues: [
          { kind: "sprite", icon: "📖", path: [[300, 420]], size: 200, from: 0.4 },
          { kind: "text", at: [600, 110], text: "三百多年前 · 清朝", from: 2.6 },
          { kind: "count", at: [820, 330], label: "康熙字典", start: 0, end: 47000, unit: "个左右", from: 3.6, over: 2.5 },
          { kind: "count", at: [820, 580], label: "今天最大的字典", start: 0, end: 80000, unit: "多个", from: 8 }
        ]
      },
      {
        turn: 1, title: "大部分是老字", duration: 12,
        cues: [
          { kind: "shape", shape: "circle", at: [600, 450], size: [520, 520], color: "#efe2c8", text: "八万多个字", from: 0.5 },
          { kind: "text", at: [600, 110], text: "大部分：老字、老写法", from: 2.4 },
          { kind: "sprite", icon: "📷", path: [[1040, 300]], size: 110, from: 6 },
          { kind: "label", at: [1040, 300], text: "老相册", side: "bottom", from: 6.4 },
          { kind: "sprite", icon: "👨‍👩‍👦", path: [[1040, 620]], size: 110, from: 8.4 },
          { kind: "text", at: [600, 800], text: "天天见的就那么几个", from: 8.8 }
        ]
      },
      {
        turn: 2, title: "今天在用的字", duration: 12,
        cues: [
          { kind: "sprite", icon: "📋", path: [[220, 300]], size: 120, from: 0.5 },
          { kind: "count", at: [620, 300], label: "通用规范汉字表", start: 0, end: 8105, unit: "个", from: 1.4 },
          { kind: "count", at: [620, 560], label: "第一级", start: 0, end: 3500, unit: "个", from: 5.2 },
          { kind: "sprite", icon: "🎒", path: [[220, 560]], size: 120, from: 5.6 },
          { kind: "text", at: [600, 800], text: "小学到初中要学会", from: 8 }
        ]
      },
      {
        turn: 3, title: "常用字最能干", duration: 12,
        cues: [
          { kind: "meter", at: [600, 280], label: "2500 个字", start: 0, end: 0.9797, color: "#6fd39a", from: 1, over: 2.4 },
          { kind: "text", at: [600, 380], text: "100 个字认出约 98 个", from: 3.6 },
          { kind: "meter", at: [600, 580], label: "3500 个字", start: 0, end: 0.9948, color: "#4fb6ff", from: 6.6, over: 2.4 },
          { kind: "text", at: [600, 680], text: "认出 99 个还多", from: 9 }
        ]
      },
      {
        turn: 4, title: "天天上班的字", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "忙碌的字，天天上班", from: 0.5 },
          { kind: "glyph", char: "我", at: [210, 400], size: 180, motion: "pulse", from: 2 },
          { kind: "glyph", char: "是", at: [470, 400], size: 180, motion: "pulse", from: 2.6 },
          { kind: "glyph", char: "不", at: [730, 400], size: 180, motion: "pulse", from: 3.2 },
          { kind: "glyph", char: "人", at: [990, 400], size: 180, motion: "pulse", from: 3.8 },
          { kind: "sprite", icon: "💼", path: [[600, 640]], size: 100, from: 5 },
          { kind: "text", at: [600, 800], text: "有的字一年见不到几回", from: 8 }
        ]
      },
      {
        turn: 5, title: "三千年都在上班", duration: 12,
        cues: [
          { kind: "glyph", char: "人", script: "oracle", at: [160, 380], size: 160, caption: "人", from: 0.6 },
          { kind: "glyph", char: "口", script: "oracle", at: [380, 380], size: 160, caption: "口", from: 1.2 },
          { kind: "glyph", char: "日", script: "oracle", at: [600, 380], size: 160, caption: "日", from: 1.8 },
          { kind: "glyph", char: "月", script: "oracle", at: [820, 380], size: 160, caption: "月", from: 2.4 },
          { kind: "glyph", char: "水", script: "oracle", at: [1040, 380], size: 160, caption: "水", from: 3 },
          { kind: "text", at: [600, 110], text: "三千多年，一直在上班", from: 4.4 },
          { kind: "text", at: [600, 800], text: "3500 个：书报都难不倒", from: 8 }
        ]
      }
    ]
  },
  {
    question: "lanting-zhi",
    scenes: [
      {
        turn: 0, title: "兰亭的聚会", duration: 12,
        cues: [
          { kind: "sprite", icon: "🏞️", path: [[300, 420]], size: 200, from: 0.3 },
          { kind: "text", at: [600, 110], text: "353 年 · 三月三日", from: 1.2 },
          { kind: "sprite", icon: "📜", path: [[850, 300]], size: 150, from: 4 },
          { kind: "label", at: [850, 300], text: "序：写在前面的话", side: "bottom", pos: [850, 420], from: 4.8 },
          { kind: "count", at: [850, 600], label: "序里的之", start: 0, end: 20, unit: "多个", from: 7.4 }
        ]
      },
      {
        turn: 1, title: "故意变着写？", duration: 12,
        cues: [
          { kind: "glyph", char: "之", at: [300, 400], size: 200, from: 0.4, to: 5.4 },
          { kind: "glyph", char: "之", at: [600, 400], size: 200, from: 0.7, to: 5.4 },
          { kind: "glyph", char: "之", at: [900, 400], size: 200, from: 1, to: 5.4 },
          { kind: "text", at: [600, 110], text: "一模一样，像排队", from: 1.8, to: 5.4 },
          { kind: "sprite", icon: "🖌️", path: [[250, 420], [600, 360], [950, 440]], size: 150, travel: 2.4, wobble: true, from: 5.6, to: 8.2 },
          { kind: "text", at: [600, 110], text: "笔跟着心情走", from: 6.2 },
          { kind: "glyph", char: "之", at: [300, 430], size: 170, rotate: -10, from: 7.2 },
          { kind: "glyph", char: "之", at: [600, 400], size: 230, from: 7.6 },
          { kind: "glyph", char: "之", at: [900, 420], size: 190, rotate: 9, from: 8.2 },
          { kind: "text", at: [600, 800], text: "同一个字，不同姿态", from: 8.6 }
        ]
      },
      {
        turn: 2, title: "之只有三笔", duration: 13,
        cues: [
          { kind: "write", char: "之", at: [330, 440], size: 440, grid: true, stroke: 0.9, mark: [2], color: red, from: 0.4 },
          { kind: "text", at: [600, 110], text: "一点、横撇、捺", from: 0.8, to: 4.8 },
          { kind: "glyph", char: "之", script: "song", at: [760, 300], size: 150, caption: "站得笔直", from: 5 },
          { kind: "glyph", char: "之", at: [1010, 330], size: 200, rotate: -12, caption: "歪着头", from: 6.2 },
          { kind: "glyph", char: "之", script: "seal", at: [870, 600], size: 190, rotate: 8, caption: "像在跳舞", from: 7.4 },
          { kind: "text", at: [600, 830], text: "换着字体比一比", size: "s", from: 9.4 }
        ]
      },
      {
        turn: 3, title: "真迹去哪儿了", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "据说进了唐太宗的陵墓", from: 0.4, to: 5 },
          { kind: "sprite", icon: "👑", path: [[300, 330]], size: 130, from: 1, to: 5 },
          { kind: "sprite", icon: "⛰️", path: [[300, 600]], size: 150, from: 1.6, to: 5 },
          { kind: "sprite", icon: "📜", path: [[700, 330], [330, 600]], size: 100, travel: 1.6, from: 2.4, to: 5 },
          { kind: "shape", shape: "rect", at: [600, 430], size: [380, 380], color: "#fffaf0", outline: true, from: 5.2 },
          { kind: "write", char: "之", at: [600, 430], size: 340, stroke: 0.8, from: 5.8 },
          { kind: "text", at: [600, 800], text: "唐朝人描下来：摹本", from: 8.6 }
        ]
      },
      {
        turn: 4, title: "一代一代学它", duration: 11,
        cues: [
          { kind: "glyph", char: "之", at: [240, 380], size: 150, rotate: -6, from: 0.4 },
          { kind: "glyph", char: "之", script: "song", at: [480, 400], size: 130, from: 0.9 },
          { kind: "glyph", char: "之", at: [720, 370], size: 180, rotate: 8, from: 1.4 },
          { kind: "glyph", char: "之", script: "seal", at: [960, 390], size: 150, from: 1.9 },
          { kind: "text", at: [600, 110], text: "有变化，又像一家人", from: 3.6 },
          { kind: "text", at: [600, 800], text: "学书法的人一代代学它", from: 7 }
        ]
      }
    ]
  },
  {
    question: "movable-type",
    scenes: [
      {
        turn: 0, title: "像照镜子", duration: 12,
        cues: [
          { kind: "shape", shape: "rect", at: [330, 380], size: [300, 300], color: "#f3dccb", from: 0.3 },
          { kind: "glyph", char: "印", script: "seal", at: [330, 380], size: 240, color: red, mirror: true, caption: "印章上：反的", from: 0.6 },
          { kind: "sprite", icon: "🪞", path: [[600, 620]], size: 100, from: 2.4 },
          { kind: "arrow", path: [[520, 380], [680, 380]], text: "盖下去", from: 3.2 },
          { kind: "glyph", char: "印", script: "seal", at: [870, 380], size: 240, color: red, caption: "纸上：正的", from: 4 },
          { kind: "text", at: [600, 810], text: "左右一翻，就正了", from: 7 }
        ]
      },
      {
        turn: 1, title: "一整块木板", duration: 12,
        cues: [
          { kind: "text", at: [600, 110], text: "唐朝：整页刻在木板上", from: 0.3, to: 4.2 },
          { kind: "shape", shape: "rect", at: [380, 440], size: [300, 420], color: "#d9b98a", from: 0.5, to: 8.4 },
          { kind: "glyph", char: "印", at: [380, 340], size: 150, mirror: true, from: 1.2, to: 8.4 },
          { kind: "glyph", char: "书", at: [380, 540], size: 150, mirror: true, from: 1.6, to: 8.4 },
          { kind: "shape", shape: "rect", at: [880, 440], size: [300, 420], color: "#fffaf0", outline: true, from: 4.4 },
          { kind: "glyph", char: "印", at: [880, 340], size: 150, from: 5.2 },
          { kind: "glyph", char: "书", at: [880, 540], size: 150, from: 5.6 },
          { kind: "text", at: [600, 110], text: "印别的书，又要重刻", from: 8.6 }
        ]
      },
      {
        turn: 2, title: "毕昇的活字", duration: 13,
        cues: [
          { kind: "text", at: [600, 110], text: "北宋 · 毕昇", from: 0.3, to: 6.2 },
          { kind: "shape", shape: "rect", at: [330, 400], size: [170, 170], color: "#c98a5a", from: 0.8 },
          { kind: "glyph", char: "之", script: "song", at: [330, 400], size: 130, mirror: true, from: 1.2 },
          { kind: "shape", shape: "rect", at: [540, 400], size: [170, 170], color: "#c98a5a", from: 1.6 },
          { kind: "glyph", char: "也", script: "song", at: [540, 400], size: 130, mirror: true, from: 2 },
          { kind: "sprite", icon: "🔥", path: [[435, 620]], size: 100, wobble: true, from: 3.6, to: 6.2 },
          { kind: "arrow", path: [[660, 400], [780, 400]], text: "排在铁板上", from: 6.4, to: 9.8 },
          { kind: "shape", shape: "rect", at: [960, 400], size: [260, 300], color: "#9aa3ad", text: "铁板", from: 7 },
          { kind: "text", at: [600, 810], text: "能拆能排的字：活字", from: 10 }
        ]
      },
      {
        turn: 3, title: "之和也，二十多个", duration: 12,
        cues: [
          { kind: "glyph", char: "之", script: "song", at: [330, 320], size: 180, mirror: true, caption: "反着刻的之", from: 0.5 },
          { kind: "count", at: [330, 580], label: "之的小印", start: 0, end: 20, unit: "多个", from: 1.4 },
          { kind: "glyph", char: "也", script: "song", at: [870, 320], size: 180, mirror: true, caption: "反着刻的也", from: 2.4 },
          { kind: "count", at: [870, 580], label: "也的小印", start: 0, end: 20, unit: "多个", from: 3.2 },
          { kind: "text", at: [600, 110], text: "不常用的字，临时刻", from: 6 },
          { kind: "text", at: [600, 800], text: "沈括《梦溪笔谈》", from: 8.8 }
        ]
      },
      {
        turn: 4, title: "排好、压平、印", duration: 13,
        cues: [
          { kind: "shape", shape: "rect", at: [380, 430], size: [300, 420], color: "#9aa3ad", from: 0.3, to: 9.4 },
          { kind: "glyph", char: "之", script: "song", at: [380, 330], size: 150, mirror: true, from: 1, to: 9.4 },
          { kind: "glyph", char: "也", script: "song", at: [380, 530], size: 150, mirror: true, from: 1.4, to: 9.4 },
          { kind: "sprite", icon: "🔥", path: [[380, 720]], size: 90, wobble: true, from: 2.4, to: 5.2 },
          { kind: "shape", shape: "rect", at: [880, 430], size: [300, 420], color: "#fffaf0", outline: true, from: 5.6 },
          { kind: "glyph", char: "之", script: "song", at: [880, 330], size: 150, from: 6.4 },
          { kind: "glyph", char: "也", script: "song", at: [880, 530], size: 150, from: 6.8 },
          { kind: "text", at: [600, 800], text: "两块铁板轮着用：快！", from: 9.6 }
        ]
      }
    ]
  }
];
