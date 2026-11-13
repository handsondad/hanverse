# 📜 汉字奇遇记

给 4–12 岁孩子的汉字科普网站。小念（男孩）看到一个字觉得奇怪，问爸爸；爸爸回答，小念接着爸爸的话追问，5–8 轮一路讲到原理，最后小念用自己的话总结。每个问题都配一部有配音的讲解动画，动画里的字会从甲骨文一路长成今天的样子，也会一笔一笔写出来。

和 [身体奇遇记](https://handsondad.github.io/bodyverse/)、[化学奇遇记](https://handsondad.github.io/chemverse/) 是一个系列。

## 网站里有什么

- **首页**：标题、小念和爸爸的 3D 场景、11 个主题共 66 个问题：汉字从哪来、画出来的字、做记号的字、拼起来的字、一半管读音、字的变身、偏旁部首、写字的学问、好玩的汉字、汉字的故事、书法艺术与鉴赏；还有「一个字的一生」查字入口。
- **问题列表**：每个主题的问题按入门、进阶、挑战排好，听过的会做标记。
- **一问一答**：从头读到尾就能弄懂标题里的问题。讲到的字排在页面下方，点一下就能去查这个字；底部有折叠的「给大人」提示。
- **讲解动画**：
  - 一场戏配一轮问答，播到哪一轮，那一轮的问答就亮起来；点回答下面的「🎬 看动画」可以直接跳到那一段。
  - 底图有宣纸、龟甲、竹简、田字格 4 种。字可以用甲骨文、小篆、楷书显示，可以从甲骨文一步步变成楷书，也可以按笔顺一笔一笔写出来。
  - 画面随时可以暂停、拖进度条。
- **配音**：小念和爸爸把整段问答读出来，正在说话的气泡会亮起来，动画跟着声音走。播放器右下角的 🔊 可以关掉声音，回到无声版。
- **一个字的一生**（`#/zi/<字>`）：输入一个字，看它的甲骨文、小篆、楷书三个样子和「看它长大」动画，看繁简对应、读音相同的一家字，以及小念和爸爸聊过它的问题。「给大人」一栏有《说文解字》原文、反切、古音构拟和古文字纠正。

## 本地运行

需要 Node.js 22.18+（测试直接用 Node 跑 `.ts` 文件）。

```bash
npm install
npm run dev
```

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run typecheck` | 类型检查 |
| `npm test` | 全部测试 |
| `npm run build` | 生产构建，输出到 `dist/` |
| `npm run preview` | 本地预览构建结果 |
| `npm run voice [-- <问题id>...]` | 给新的或改过的问答配音（要联网，需要 Python 和 `edge-tts`） |
| `npm run fonts` | 按动画里用到的小篆重新切字体子集（需要 Python 和 `fonttools`、`brotli`） |
| `npm run strokes` | 取动画里要一笔一笔写的字的笔顺数据（要联网） |
| `npm run zi -- <yigezi 目录>` | 从 yigezi 重新导入查字数据和古文字字体，导入后要再跑 `npm run fonts` |

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 会跑测试、构建，并发布到 GitHub Pages。仓库 Settings → Pages 的 Source 要选 **GitHub Actions**。

资源用的是相对路径，路由用的是 `#/...`，所以放在任何子路径下都能打开，刷新也不会 404。

## 加新内容

- 给代码助手的说明：[AGENTS.md](AGENTS.md)，包括项目地图、加一个新问题的步骤、硬性规矩和已知的坑。
- 讲法、画法和页面风格：[skills/hanverse-explainer/SKILL.md](skills/hanverse-explainer/SKILL.md)，问答、动画、页面样式和查过的资料分别在同目录的 `dialogue.md`、`film.md`、`design.md`、`facts.md`。

简单说，一个新问题要做这几件事：在 `src/data/questions/` 写问答，在 `src/data/films/` 写动画；动画里用了新的小篆就跑 `npm run fonts`，用了新的笔顺字就跑 `npm run strokes`；然后跑 `npm run voice -- <问题id>` 配音，最后跑 `npm test`。问答和动画各有检查脚本：

```bash
node tests/dialogue-rules.mjs src/data/questions/<主题>.ts
node tests/film-rules.mjs src/data/films/<主题>.ts
```

## 目录

| 位置 | 内容 |
|---|---|
| `src/pages/` | 首页、问题列表、问答页、查字页 |
| `src/data/questions/` | 问答，一个主题一个文件 |
| `src/data/films/` | 讲解动画，一个主题一个文件 |
| `src/lib/film.ts`、`src/components/film/` | 动画引擎和播放器 |
| `src/lib/narration.ts`、`src/data/voice.ts` | 配音时间线 |
| `src/lib/scripts.ts`、`src/lib/zi.ts` | 古文字字体和查字逻辑 |
| `src/data/strokes.json`、`src/data/seal-subset.json` | 笔顺数据、小篆子集里的字 |
| `public/fonts/` | 甲骨文字体、小篆字体（子集和全量） |
| `public/zi/` | 查字数据（说文、简繁、谐声、纠正） |
| `public/voice/` | 配音音频 |
| `tools/` | 导入数据、切字体、取笔顺、配音的工具 |
| `tests/` | 测试和内容检查脚本 |
| `skills/` | 内容和风格的 skill |

## 素材和许可

- **古文字字体和查字数据**：整理自 [yigezi（一个字）](https://github.com/Ivan666jjj/yigezi)。甲骨文是 Oracular 鏡原甲骨文、小篆是开元小篆（都是 SIL OFL 1.1），小篆缺字用全字库说文解字补（OGDL-Taiwan-1.0，须显名：數位發展部，CNS11643中文標準交換碼全字庫網站，https://www.cns11643.gov.tw）。《说文》数据来自 shuowen.org，简繁来自 OpenCC（都是 Apache-2.0）。
- **笔顺**：Make Me a Hanzi / hanzi-writer-data，Arphic Public License。
- **配音**：微软 Edge 在线语音（edge-tts）生成，只按非商业使用考虑。
- **3D 角色**：CC0 模型，见 [public/models/CREDITS.md](public/models/CREDITS.md)。

完整清单见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)，许可全文在 `licenses/`。这个网站按家庭和非商业学习使用制作，商用前要逐个核实素材许可。
