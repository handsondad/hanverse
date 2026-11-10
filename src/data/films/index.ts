import { films as art } from "./art.ts";
import { films as change } from "./change.ts";
import { films as fun } from "./fun.ts";
import { films as origin } from "./origin.ts";
import { films as parts } from "./parts.ts";
import { films as picture } from "./picture.ts";
import { films as point } from "./point.ts";
import { films as sound } from "./sound.ts";
import { films as story } from "./story.ts";
import { films as together } from "./together.ts";
import { films as write } from "./write.ts";
import type { Film } from "./types";

export type { Film, FilmScene, Cue, Form, Point, Script, ViewId } from "./types";

export const films: readonly Film[] = [...origin, ...picture, ...point, ...together, ...sound, ...change, ...parts, ...write, ...fun, ...story, ...art];

const byQuestion = new Map(films.map((film) => [film.question, film]));

export const filmFor = (questionId: string): Film | undefined => byQuestion.get(questionId);
