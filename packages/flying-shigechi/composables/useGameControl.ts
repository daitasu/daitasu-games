import { TIME_STEP } from "~/constants/game";
import type { UsePlayer } from "~/composables/usePlayer";
import { useEnemies } from "~/composables/useEnemies";
import type { Size } from "~/types/game";
import type { Enemy } from "~/models/enemy";
import { checkCollide } from "~/utils/collide";
import { useCollectibles } from "~/composables/useCollectibles";
import type { Collectible } from "~/models/collectible";
import { useGameStore } from "~/store/useGameStore";

type UseGameControl = {
  player: UsePlayer;
  enemies: Enemy[];
  collectibles: Collectible[];
  mainLoop: () => void;
};

export const useGameControl = (
  gameWindowSize: Size // TODO: 引数を辞めてglobal state にしたい
): UseGameControl => {
  const store = useGameStore();

  /*
   * 各種登場人物のセット
   */
  const player = usePlayer();
  const enemies = useEnemies(gameWindowSize);
  const collectibles = useCollectibles(gameWindowSize);

  /*
   * ゲーム全体処理
   */
  const collideEnemyWithPlayer = () => {
    const isCollided = enemies.enemies.value.some((enemy) => {
      const enemyPosAndSize = {
        position: enemy.position,
        size: enemy.size,
      };
      const playerPosAndSize = {
        position: { x: player.position.value.x, y: player.position.value.y },
        size: player.size,
      };
      return checkCollide(enemyPosAndSize, playerPosAndSize);
    });

    if (isCollided) {
      enemies.resetEnemies();
      store.setGameOver();
    }
  };

  const collideCollectibleWithPlayer = () => {
    collectibles.collectibles.value.forEach((collectible, index) => {
      if (!collectible.isActive) return;

      const collectiblePosAndSize = {
        position: collectible.position,
        size: collectible.size,
      };
      const playerPosAndSize = {
        position: { x: player.position.value.x, y: player.position.value.y },
        size: player.size,
      };

      if (!checkCollide(collectiblePosAndSize, playerPosAndSize)) return;

      collectibles.collectibles.value[index].isActive = false;
      store.score += 10;
    });
  };

  const mainLoop = () => {
    // 自然落下
    player.setGravityFall();

    if (store.gameState === "play") {
      // 物体の更新
      enemies.update();
      collectibles.update();

      // 衝突判定
      collideEnemyWithPlayer();
      collideCollectibleWithPlayer();

      // 不要物の削除
      if (
        enemies.enemies.value.length > 0 &&
        !enemies.enemies.value[0].isActive
      ) {
        enemies.deleteOldestEnemy();
      }
      if (
        collectibles.collectibles.value.length > 0 &&
        !collectibles.collectibles.value[0].isActive
      ) {
        collectibles.deleteOldestCollectible();
      }

      // 敵、収集物の出現
      if (gameWindowSize.height > 0 && gameWindowSize.height > 0) {
        if (
          enemies.enemies.value.length === 0 ||
          enemies.enemies.value[enemies.enemies.value.length - 1].position.x <
            500
        ) {
          enemies.spwanEnemy();
        }
      }
      if (gameWindowSize.height > 0 && gameWindowSize.height > 0) {
        if (
          collectibles.collectibles.value.length < 1 &&
          enemies.enemies.value[enemies.enemies.value.length - 1].position.x <
            700
        ) {
          if (Math.random() < 0.4) {
            collectibles.spwanCollectible();
          }
        }
      }
    }

    setTimeout(mainLoop, TIME_STEP * 1000);
  };

  onMounted(() => {
    window.addEventListener("keydown", player.jumpPlayer);
    window.addEventListener("touchstart", player.jumpPlayer);

    mainLoop();
  });

  return {
    player,
    enemies: enemies.enemies.value,
    collectibles: collectibles.collectibles.value,
    mainLoop,
  };
};
