# AGENTS.md：给接手这个仓库的代码助手

## 这是什么

「📜 汉字奇遇记」：给 4–12 岁孩子的汉字科普网站，奇遇记系列（身体奇遇记 bodyverse、化学奇遇记 chemverse）的一员。小念（男孩）看到、写到一个字，问爸爸；爸爸回答，小念接着爸爸的话追问，5–8 轮一路讲到道理，最后小念用自己的话总结。每个问题都配一部讲解动画：甲骨文、小篆、楷书的字形在宣纸、龟甲、竹简、田字格上出现、拼合、变身、一笔一笔写出来，小念和爸爸的配音把整段问答读出来，动画跟着声音走。另有「一个字的一生」查字页，数据来自开源项目 yigezi。

技术栈：React 18 + TypeScript（strict）+ Vite 5，首页 3D 场景用 three + @react-three/fiber。Hash 路由，没有后端，所有内容都是 `src/data/` 里的 TypeScript 数据。

**写内容、写动画、调页面样式之前，先读 `skills/hanverse-explainer/SKILL.md`**。那里写的是这个项目的讲法、画法、页面风格和可以直接用的汉字事实。

## 命令

需要 Node.js 22.18+，测试和脚本直接用 Node 的 TypeScript 类型擦除跑 `.ts` 文件。

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | 全部测试（`node --test tests/*.test.mjs`） |
| `npm run build` | 生产构建 |
| `node tests/dialogue-rules.mjs src/data/questions/<主题>.ts` | 检查问答写法 |
| `node tests/film-rules.mjs [src/data/films/<主题>.ts]` | 检查动画（含字形能不能显示） |
| `npm run fonts` | 按动画里用到的小篆字切字体子集（约 1 分钟，要 `python -m pip install fonttools brotli`） |
| `npm run strokes` | 取动画里 `write` 要用的笔顺数据（要联网） |
| `npm run voice [-- <问题id>...]` | 给新的或改过的问答句子配音 |
| `npm run zi -- <yigezi 目录>` | 从 yigezi 重新导入查字数据和古文字字体，导入后要跑 `npm run fonts` |

交付前四个都要过：`npm run typecheck`、`npm test`、`node tests/film-rules.mjs`、`npm run build`。

## 地图

| 路由 | 页面 | 文件 |
|---|---|---|
| `#/` | 首页：标题、小念和爸爸的 3D 场景、11 个主题、查字入口 | `src/pages/HomePage.tsx` |
| `#/topic/<主题>` | 一个主题的问题列表，按入门 / 进阶 / 挑战排 | `src/pages/QuestionListPage.tsx` |
| `#/q/<问题id>` | 一问一答 + 讲解动画 + 这一问里的字 | `src/pages/QuestionPage.tsx` |
| `#/zi/<字>` | 一个字的一生：甲骨文 → 小篆 → 楷书，《说文》、谐声一家字 | `src/pages/ZiPage.tsx`（按需加载） |

内容和引擎：

- `src/data/questions/<主题>.ts`：问题和问答，类型在 `types.ts`。11 个主题：`origin` `picture` `point` `together` `sound` `change` `parts` `write` `fun` `story`（汉字的故事）`art`（书法艺术与鉴赏）。
- `src/data/films/<主题>.ts`：每个问题一部动画，格式见 `types.ts`，汇总在 `index.ts`。
- `src/lib/film.ts`：时间线、镜头，全是纯函数；`src/components/film/FilmStage.tsx` 把某一时刻画成 SVG（底图、字形、笔顺），`FilmPlayer.tsx` 管播放、拖动、分段和配音同步。
- `src/lib/narration.ts`：配音版时间线，按每轮问答的配音长度把对应的戏等比例拉长。
- `src/lib/scripts.ts`：四种字体的字族和名字；`src/lib/zi.ts`：查字（先换成繁体，再找甲骨文、小篆、《说文》）。
- `public/zi/zi-data.json`：查字数据（1.7 MB，查字页才加载）。`public/fonts/`：`oracle.woff2` 甲骨文，`seal-full.woff2` 完整小篆（8.7 MB，只给查字页），`seal-core.woff2` 动画用的小篆子集。`public/art/`：动画和问答里用的碑帖、墨迹、照片，来源和许可见 `THIRD_PARTY_NOTICES.md`。
- `src/data/strokes.json`：`write` 用的笔顺数据；`src/data/seal-subset.json`：子集里有哪些字。两个都由工具生成，测试会检查和动画对得上。
- `src/data/voice.ts` + `src/data/voice-manifest.json`：配音的时长和指纹；音频在 `public/voice/<问题id>/<轮次>-<nian|dad>.mp3`。
- `tools/`：`zi/` 导入 yigezi，`fonts/` 切小篆子集，`strokes/` 取笔顺，`voice/` 配音，`glyphs.mjs` 统计动画用到的字形。
- `src/components/RunLab3D.tsx`、`run-lab/`：首页小星球上的 3D 小念和爸爸，和身体奇遇记共用，轻易不要改。

## 加一个新问题

1. **问答**：写进 `src/data/questions/<主题>.ts`，跑 `node tests/dialogue-rules.mjs` 直到通过。
2. **动画**：写进 `src/data/films/<主题>.ts`，跑 `node tests/film-rules.mjs src/data/films/<主题>.ts` 直到通过。
3. **字形**：用了新的小篆字跑 `npm run fonts`，用了新的 `write` 字跑 `npm run strokes`。
4. **配音**：`npm run voice -- <问题id>`。要联网，需要 `python -m pip install edge-tts`，PATH 里要有 ffmpeg / ffprobe。
5. **测试**：`npm test`。每个问题都要有动画，每句话都要有配音而且读的是现在的文字，字体子集和笔顺数据要和动画对得上。
6. **浏览器里看一遍**：打开 `#/q/<问题id>`，看古文字显示对不对，再看一眼手机宽度（390px）。

## 硬性规矩

- **孩子的内容**：
  - 不编数字。屏幕上的数字必须是爸爸台词里说过的，出处写在 `parentTip` 或 `skills/hanverse-explainer/facts.md`。
  - 造字的解释有争议就说有争议；传说要说是传说。
  - 不用术语表里的词，见 `tests/dialogue-rules.mjs` 的 `jargon`。
- **小念是男孩**，用"他"；配音是 `zh-CN-YunxiaNeural`。爸爸是 `zh-CN-YunxiNeural`。
- **素材许可**（详见 `THIRD_PARTY_NOTICES.md`）：
  - 甲骨文字体 Oracular 鏡原甲骨文、小篆字体开元小篆是 SIL OFL 1.1；改过的字体（包括切子集）不能沿用原来的名字，所以子集叫 HanSeal Core。
  - 小篆缺字补自全字库，OGDL-Taiwan-1.0，**必须保留显名声明**：數位發展部，CNS11643中文標準交換碼全字庫網站，https://www.cns11643.gov.tw 。
  - 笔顺数据来自 Make Me a Hanzi / hanzi-writer-data，Arphic Public License，`licenses/ARPHICPL.TXT` 要跟着发布。
  - 配音由微软 Edge 在线语音生成，只按非商业使用考虑。
  - 新素材要在 `THIRD_PARTY_NOTICES.md` 里写明来源。
- **代码风格**：照周围代码写。中文注释只写代码本身表达不了的约束；改动要小而完整，不顺手重构无关代码。

## 已知的坑

- **`.ts` 扩展名**：Node 直接跑 `.ts`，所以 `src/data/` 和 `src/lib/` 里被测试导入的文件，相互导入时要写 `.ts` 扩展名（如 `./motion.ts`）。`tsconfig` 开了 `allowImportingTsExtensions`。
- **繁体才有古文字**：甲骨文、小篆字体按繁体编，`glyph` 写 `馬` 不写 `马`。检查器会告诉你该写哪个。
- **字体加载**：古文字字体用 `font-display: block`，没加载完是空白，不会先露出楷书。截图前等 `document.fonts.ready`。
- **配音会串**：播放器同一时间只让一部动画出声。用浏览器测有声动画，测完把它暂停，或者离开问答页。
- **并行写文件**：几个代理同时往 `src/` 写文件时，Vite 可能报 EBUSY 退出，重启 `npm run dev` 即可。`npm run fonts` 和 `npm run strokes` 会改共享文件，不要几个代理同时跑。
