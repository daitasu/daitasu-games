import type { Vector, Size } from "~/types/game";
import {
  type UpdateStrategy,
  DefaultUpdateStrategy,
} from "./enemyUpdateStrategy";
import { GROUND_LEVEL } from "~/constants/game";

export class Enemy {
  id: number;
  position: Vector;
  velocity: Vector;
  size: Size;
  isActive: boolean;
  updateStrategy: UpdateStrategy;

  constructor(
    gameWindowSize: Size,
    updateStrategy: UpdateStrategy = new DefaultUpdateStrategy()
  ) {
    this.id = Date.now();
    this.isActive = true;
    this.size = { width: 60, height: 60 };
    this.velocity = { x: -15, y: 0 };
    this.updateStrategy = updateStrategy;

    const maxY =
      gameWindowSize.height !== 0
        ? gameWindowSize.height - this.size.height
        : 600 - this.size.height;

    const randomY = Math.floor(Math.random() * maxY) + GROUND_LEVEL;

    this.position = { x: 900, y: randomY };
  }

  update() {
    this.updateStrategy.update(this);

    if (this.position.x < 0 - this.size.width) {
      this.isActive = false;
    }
  }
}
