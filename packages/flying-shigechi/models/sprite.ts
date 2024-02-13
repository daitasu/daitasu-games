import type { Vector, Size } from "~/types/game";
import type { UpdateStrategy } from "./enemyUpdateStrategy";

export interface Sprite {
  id: number;
  position: Vector;
  velocity: Vector;
  size: Size;
  isActive: boolean;
  updateStrategy: UpdateStrategy;
}
