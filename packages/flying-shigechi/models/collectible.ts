import type { Vector, Size } from "~/types/game";
import {
  type UpdateStrategy,
  DefaultUpdateStrategy,
} from "./enemyUpdateStrategy";
import { GROUND_LEVEL } from "~/constants/game";
import type { Sprite } from "~/models/sprite";

type Constructor = {
  gameWindowSize: Size;
  updateStrategy?: UpdateStrategy;
  AdditionalVelocity?: number;
};

export class Collectible implements Sprite {
  id: number;
  position: Vector;
  velocity: Vector;
  size: Size;
  isActive: boolean;
  updateStrategy: UpdateStrategy;

  constructor({
    gameWindowSize,
    updateStrategy = new DefaultUpdateStrategy(),
    AdditionalVelocity = 0,
  }: Constructor) {
    this.id = Date.now();
    this.isActive = true;
    this.size = { width: 42, height: 60 };
    this.velocity = { x: -15 + AdditionalVelocity, y: 0 };
    this.updateStrategy = updateStrategy;

    const maxY =
      gameWindowSize.height !== 0
        ? gameWindowSize.height - this.size.height * 2
        : 500 - this.size.height;

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
