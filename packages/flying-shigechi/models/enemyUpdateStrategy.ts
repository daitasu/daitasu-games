import { Enemy } from "~/models/enemy";

export interface UpdateStrategy {
  update(enemy: Enemy): void;
}

export class DefaultUpdateStrategy implements UpdateStrategy {
  update(enemy: Enemy) {
    enemy.position.x += enemy.velocity.x;
  }
}

class FastUpdateStrategy implements UpdateStrategy {
  update(enemy: Enemy) {
    // FastEnemyのための特別な更新処理
    enemy.position.x += enemy.velocity.x * 2; // 例：速度を倍にする
  }
}

class SlowUpdateStrategy implements UpdateStrategy {
  update(enemy: Enemy) {
    // SlowEnemyのための特別な更新処理
    enemy.position.x += enemy.velocity.x / 2; // 例：速度を半分にする
  }
}
