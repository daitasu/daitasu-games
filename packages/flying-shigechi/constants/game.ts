import type { Charactor, Vector } from "~/types/game";

//　地表位置
export const GROUND_LEVEL = 100;
// プレイヤーの大きさ
export const PLAYER_SIZE = 90;
// 初期プレイヤー位置
export const INITIAL_POSITION: Vector = {
  x: 50,
  y: GROUND_LEVEL,
};
// 初期速度 (x方向, y方向)
export const INITIAL_VELOCITY: Vector = { x: 0, y: 0 };
// 重力加速度
export const GRAVITY = -3;
// 更新間隔 (秒)
export const TIME_STEP = 0.08;

export const CHARACTORS: Charactor[] = [
  {
    id: "mushroom",
    name: "きのこ",
    imagePath: "mushroom",
    description: "スタンダード",
    jump: 0,
    weight: 0,
  },
  {
    id: "tomato",
    name: "トマト",
    imagePath: "tomato",
    description: "軽い",
    jump: 10,
    weight: 1,
  },
  {
    id: "broccoli",
    name: "ブロッコリー",
    description: "ちょい重い",
    imagePath: "broccoli",
    jump: 0,
    weight: -5,
  },
  {
    id: "carrot",
    name: "人参",
    imagePath: "carrot",
    description: "ウサギとカメならウサギ派。脱兎のごとく",
    jump: 30,
    weight: -5,
  },
  {
    id: "chinese_cabbage",
    name: "白菜",
    imagePath: "chinese_cabbage",
    description: "めちゃ重い",
    jump: -10,
    weight: -5,
  },
  {
    id: "potato",
    name: "じゃがいも",
    imagePath: "potato",
    description: "ウサギとカメならカメ派。マイペース",
    jump: -3,
    weight: 1,
  },
];
