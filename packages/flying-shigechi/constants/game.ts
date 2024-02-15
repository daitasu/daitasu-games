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
    description: "aaa",
    jumpSkill: 1,
    weight: 1,
  },
  {
    id: "tomato",
    name: "トマト",
    imagePath: "tomato",
    description: "aaa",
    jumpSkill: 1,
    weight: 1,
  },
  {
    id: "broccoli",
    name: "ブロッコリー",
    description: "aaa",
    imagePath: "broccoli",
    jumpSkill: 1,
    weight: 1,
  },
  {
    id: "carrot",
    name: "人参",
    imagePath: "carrot",
    description: "aaa",
    jumpSkill: 1,
    weight: 1,
  },
  {
    id: "chinese_cabbage",

    name: "白菜",
    imagePath: "chinese_cabbage",
    description: "aaa",
    jumpSkill: 1,
    weight: 1,
  },
  {
    id: "potato",
    name: "じゃがいも",
    imagePath: "potato",
    description: "aaa",
    jumpSkill: 1,
    weight: 1,
  },
];
