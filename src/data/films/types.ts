/**
 * 讲解动画：每个问题一部短片，由几场戏组成，每场戏配对话里的一轮问答。
 *
 * 画面坐标是 1200×900，坐标都写成 [x, y]。底图是画出来的：宣纸、龟甲、竹简、田字格。
 * 一场戏里的每个元素都只由时间 t 决定，所以能暂停、拖动、从任意一帧开始看。
 */

/** paper 宣纸（默认）、shell 一整块龟甲、slips 一排竹简、grid 中间一个大田字格 */
export type ViewId = "paper" | "shell" | "slips" | "grid";

export type Point = readonly [number, number];

/**
 * 字体：oracle 甲骨文、seal 小篆、kai 楷书（手写体，只有简体）、song 印刷体（简繁都有）。
 * 甲骨文和小篆的字体是按繁体字做的，写「馬」「魚」「鳥」，不写「马」「鱼」「鸟」；检查器会提示。
 */
export type Script = "oracle" | "seal" | "kai" | "song";

/** 字的一种样子：一张图（emoji）或者某种字体写的字 */
export type Form =
  | { readonly icon: string; readonly label?: string }
  | { readonly script: Script; readonly char: string; readonly label?: string };

type Timed = {
  /** 出现的时间（秒，从这场戏开头算） */
  readonly from: number;
  /** 消失的时间，不写就留到这场戏结束 */
  readonly to?: number;
};

export type Cue = Timed &
  (
    /** 贴在某处的标签，带一根引线；pos 是标签放的位置，不写就放在 side 那一边 */
    | { readonly kind: "label"; readonly at: Point; readonly text: string; readonly pos?: Point; readonly side?: "left" | "right" | "top" | "bottom"; readonly color?: string }
    /** 一圈柔光，把注意力引到一块地方上；size 是这块地方的宽高 */
    | { readonly kind: "highlight"; readonly at: Point; readonly size?: readonly [number, number]; readonly color?: string }
    /** 一圈圈往外扩的波纹：提醒、声音、裂开 */
    | { readonly kind: "pulse"; readonly at: Point; readonly color?: string; readonly radius?: number; readonly rate?: number }
    /** 一串小点（或小图标）沿路线一直流动：水、读音、传过去的东西 */
    | { readonly kind: "flow"; readonly path: readonly Point[]; readonly color?: string; readonly icon?: string; readonly count?: number; readonly speed?: number; readonly size?: number }
    /** 一笔画出来的箭头，可以带一句话 */
    | { readonly kind: "arrow"; readonly path: readonly Point[]; readonly color?: string; readonly text?: string; readonly draw?: number }
    /** 一笔画出来的线，没有箭头：裂纹、刻痕、记号 */
    | { readonly kind: "line"; readonly path: readonly Point[]; readonly color?: string; readonly width?: number; readonly draw?: number }
    /**
     * 一个表情图标：一个点就原地弹出来，几个点就沿路线走一趟（用 travel 秒）。
     * rotate 是一开始转的角度（度），写了 turnTo 就在 over 秒里转到那个角度。
     */
    | {
        readonly kind: "sprite";
        readonly icon: string;
        readonly path: readonly Point[];
        readonly size?: number;
        readonly travel?: number;
        readonly spin?: boolean;
        readonly wobble?: boolean;
        readonly rotate?: number;
        readonly turnTo?: number;
        readonly over?: number;
      }
    /** 示意图形：屋顶、竹片、方框……可以写字 */
    | {
        readonly kind: "shape";
        readonly shape: "circle" | "rect" | "pill";
        readonly at: Point;
        readonly size: readonly [number, number];
        readonly color: string;
        readonly text?: string;
        readonly motion?: "pulse" | "wiggle" | "grow" | "shrink";
        /** grow / shrink 用几秒变完，默认 2 */
        readonly over?: number;
        /** 加一圈墨色虚线边，里面照样用 color 填；只要框不要底色就把 color 写成 "none"，不然会盖住前面的字 */
        readonly outline?: boolean;
      }
    /**
     * 一个字。script 不写就是楷书；size 是字的大小（默认 220）；caption 是字下面的小字说明。
     * 写了 path 就沿路线挪过去（用 travel 秒），用来把两个字拼成一个字。
     * rotate / turnTo / over 和 sprite 一样，用来把「站起来的马」转回去。
     * mirror 左右翻过来画，像印章、活字上刻的反字。
     */
    | {
        readonly kind: "glyph";
        readonly char: string;
        readonly at: Point;
        readonly script?: Script;
        readonly size?: number;
        readonly color?: string;
        readonly caption?: string;
        readonly path?: readonly Point[];
        readonly travel?: number;
        readonly rotate?: number;
        readonly turnTo?: number;
        readonly over?: number;
        readonly mirror?: boolean;
        readonly motion?: "pulse" | "wiggle";
      }
    /** 同一个字一步步变样子：图画 → 甲骨文 → 小篆 → 楷书……每 every 秒（默认 1.6）换一种，下面写着是哪种字体 */
    | { readonly kind: "evolve"; readonly at: Point; readonly forms: readonly Form[]; readonly size?: number; readonly every?: number }
    /**
     * 按笔顺一笔一笔写出一个字（楷书）。每笔 stroke 秒（默认 0.7），size 是字框边长（默认 420）。
     * upTo 只写前几笔；mark 里的笔画（从 0 数）用 color 标出来，别的笔画是墨色。
     */
    | {
        readonly kind: "write";
        readonly char: string;
        readonly at: Point;
        readonly size?: number;
        readonly stroke?: number;
        readonly upTo?: number;
        readonly mark?: readonly number[];
        readonly color?: string;
        readonly grid?: boolean;
      }
    /**
     * 一行大字，用来点出关键词。text、count、meter 是字幕性质的：坐标指的是
     * 镜头里看到的屏幕位置（同样按 1200×900），镜头怎么推拉都留在原处。
     */
    | { readonly kind: "text"; readonly at: Point; readonly text: string; readonly size?: "s" | "m" | "l"; readonly color?: string }
    /** 数字从 start 数到 end，比如 0 → 4500 个字 */
    | { readonly kind: "count"; readonly at: Point; readonly label: string; readonly start: number; readonly end: number; readonly unit?: string; readonly over?: number }
    /** 一根进度条，从 start 涨（或落）到 end，取值 0～1 */
    | { readonly kind: "meter"; readonly at: Point; readonly label: string; readonly start: number; readonly end: number; readonly color?: string; readonly over?: number }
    /**
     * 一张真东西的照片或扫描图（碑帖、墨迹、老建筑），镶在白边框里。src 是 public/ 下的路径，如 "art/jizhi.jpg"；
     * 图按原比例放进 size 这个框，框的比例要和图差不多。想看局部就推镜头。caption 写作品名，不超过 10 个字。
     */
    | { readonly kind: "image"; readonly src: string; readonly at: Point; readonly size: readonly [number, number]; readonly caption?: string }
    /** 常见误会：先写错误的说法再划掉，然后换成正确的说法 */
    | { readonly kind: "myth"; readonly wrong: string; readonly right: string }
  );

/** 镜头：在 t 秒时对准 at，放大 zoom 倍；两个关键帧之间平滑推拉 */
export type CameraKey = { readonly t: number; readonly at: Point; readonly zoom: number };

export type FilmScene = {
  /** 配对话里第几轮（从 0 数） */
  readonly turn: number;
  /** 这场戏的小标题，不超过 12 个字 */
  readonly title: string;
  /** 底图，不写就是宣纸 */
  readonly view?: ViewId;
  readonly camera?: readonly CameraKey[];
  /** 秒 */
  readonly duration: number;
  readonly cues: readonly Cue[];
};

export type Film = {
  readonly question: string;
  readonly scenes: readonly FilmScene[];
};
