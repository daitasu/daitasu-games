import type { Size } from "~/types/game";
import { Enemy } from "~/models/enemy";

export type UseEnemies = {
  enemies: ComputedRef<Enemy[]>;
  spwanEnemy: () => Enemy;
  deleteOldestEnemy: () => void;
  resetEnemies: () => void;
  update: () => void;
};

export const useEnemies = (gameWindowSize: Size): UseEnemies => {
  let innerEnemies: Enemy[] = reactive<Enemy[]>([]);

  const enemies = computed(() => {
    return innerEnemies;
  });

  const resetEnemies = (): void => {
    innerEnemies.length = 0;
  };

  const spwanEnemy = (): Enemy => {
    const enemy = new Enemy(gameWindowSize);
    innerEnemies.push(enemy);

    return innerEnemies.slice(-1)[0];
  };

  const deleteOldestEnemy = (): void => {
    if (!innerEnemies[0].isActive) {
      innerEnemies.shift();
    }
  };

  const update = () => {
    innerEnemies.forEach((enemy) => {
      enemy.update();
    });
  };

  return {
    enemies,
    spwanEnemy,
    deleteOldestEnemy,
    resetEnemies,
    update,
  };
};
