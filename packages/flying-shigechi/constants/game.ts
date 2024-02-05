import type { Vector } from "~/types/game";

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
