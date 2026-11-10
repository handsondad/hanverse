// 从完整的小篆字体里切出动画要用的那几十个字：public/fonts/seal-core.woff2（几十 KB），
// 字表写到 src/data/seal-subset.json，测试会检查动画里每个小篆字都在里面。
//   npm run fonts
// 需要：python -m pip install fonttools brotli
import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { usedGlyphs } from "../glyphs.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const chars = [...usedGlyphs().seal].sort();
if (!chars.length) {
  console.log("动画里还没有用到小篆");
  process.exit(0);
}

const result = spawnSync("python", [
  join(root, "tools/fonts/subset.py"),
  join(root, "public/fonts/seal-full.woff2"),
  join(root, "public/fonts/seal-core.woff2"),
  chars.join("")
], { stdio: "inherit" });
if (result.status !== 0) process.exit(result.status ?? 1);

writeFileSync(join(root, "src/data/seal-subset.json"), `${JSON.stringify({ chars: chars.join("") })}\n`);
console.log(`小篆子集：${chars.length} 个字`);
