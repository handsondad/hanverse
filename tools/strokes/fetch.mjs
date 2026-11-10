// 取动画里 write（一笔一笔写字）要用的笔顺数据，写到 src/data/strokes.json。
//   npm run strokes
// 数据来自 hanzi-writer-data（Make Me a Hanzi，源自文鼎字体，Arphic Public License），要联网。
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { usedGlyphs } from "../glyphs.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const target = join(root, "src/data/strokes.json");
const version = "2.0.1";
const cdn = `https://cdn.jsdelivr.net/npm/hanzi-writer-data@${version}`;

const have = JSON.parse(readFileSync(target, "utf8"));
const wanted = [...usedGlyphs().write].sort();
const out = {};
for (const char of wanted) {
  if (have[char]) {
    out[char] = have[char];
    continue;
  }
  const response = await fetch(`${cdn}/${encodeURIComponent(char)}.json`);
  if (!response.ok) throw new Error(`「${char}」没有笔顺数据（HTTP ${response.status}）`);
  const { strokes, medians } = await response.json();
  out[char] = { strokes, medians };
  console.log(`取到「${char}」：${strokes.length} 笔`);
}
writeFileSync(target, `${JSON.stringify(out)}\n`);

const license = await fetch(`${cdn}/ARPHICPL.TXT`);
if (license.ok) writeFileSync(join(root, "licenses/ARPHICPL.TXT"), await license.text());
else console.warn(`没取到 ARPHICPL.TXT（HTTP ${license.status}），licenses/ 里要手动放一份`);
console.log(`笔顺数据：${Object.keys(out).length} 个字`);
