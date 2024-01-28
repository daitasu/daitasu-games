import type { Vector, Size } from "~/types/game";
import type { UsePlayer } from "./usePlayer";

export type UseEnemies = {
  enemies: Enemy[];
  spwanEnemy: () => Enemy;
  update: () => void;
};

export class Enemy {
  position: Vector;
  velocity: Vector;
  size: Size;
  isActive: boolean;

  constructor(gameWindowSize: Size) {
    this.position = { x: 900, y: 300 };
    this.velocity = { x: -10, y: 0 };
    this.isActive = true;
    this.size = { width: 60, height: 60 };
  }

  update() {}
  collideWithPlayer(player: UsePlayer) {}
}

export const useEnemies = (gameWindowSize: Size): UseEnemies => {
  const enemies = reactive<Enemy[]>([]);

  const spwanEnemy = (): Enemy => {
    const enemy = new Enemy(gameWindowSize);
    enemies.push(enemy);

    return enemies.slice(-1)[0];
  };

  const update = () => {};

  return {
    enemies,
    spwanEnemy,
    update,
  };
};
