export type Vector = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export type GameState = "play" | "stop" | "gameover";

export type Charactor = {
  id: string;
  name: string;
  imagePath: string;
  description: string;
  jump: number;
  weight: number;
};
