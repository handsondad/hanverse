// 动画和问答里用到了哪些字形：切小篆子集、取笔顺数据、检查器都靠它。
import { films } from "../src/data/films/index.ts";
import { ziQuestions } from "../src/data/questions/index.ts";

/** 所有出现在画面上的字形，按字体分：{ oracle, seal, kai, song, write } 各是一个 Set */
export function usedGlyphs() {
  const used = { oracle: new Set(), seal: new Set(), kai: new Set(), song: new Set(), write: new Set() };
  const addForm = (form) => {
    if ("char" in form) used[form.script].add(form.char);
  };
  for (const film of films) {
    for (const scene of film.scenes) {
      for (const cue of scene.cues) {
        if (cue.kind === "glyph") used[cue.script ?? "kai"].add(cue.char);
        if (cue.kind === "evolve") cue.forms.forEach(addForm);
        if (cue.kind === "write") used.write.add(cue.char);
      }
    }
  }
  for (const question of ziQuestions) {
    for (const turn of question.dialogue) {
      if (turn.show?.kind === "forms") turn.show.forms.forEach(addForm);
    }
  }
  return used;
}
