import { TIME_STEP } from "~/constants/game";
import type { UsePlayer } from "~/composables/usePlayer";
import { useEnemies } from "~/composables/useEnemies";
import type { Size, GameState } from "~/types/game";
import type { Enemy } from "~/models/enemy";

type UseGameControl = {
  player: UsePlayer;
  enemies: Enemy[];
  mainLoop: () => void;
  gameState: Ref<GameState>;
  playGame: () => void;
  stopGame: () => void;
};

export const useGameControl = (
  gameWindowSize: Size // TODO: 引数を辞めてglobal state にしたい
): UseGameControl => {
  /*
   * 各種登場人物のセット
   */
  const player = usePlayer();
  const enemies = useEnemies(gameWindowSize);

  /*
   * ゲーム全体処理
   */
  const gameState = ref<GameState>("stop");

  const playGame = () => {
    gameState.value = "play";
  };
  const stopGame = () => {
    gameState.value = "stop";
  };

  const mainLoop = () => {
    // 自然落下
    player.setGravityFall();

    enemies.update();

    // 不要になった敵を消す
    if (
      enemies.enemies.value.length > 0 &&
      !enemies.enemies.value[0].isActive
    ) {
      enemies.deleteOldestEnemy();
    }

    // 敵の出現
    if (gameWindowSize.height > 0 && gameWindowSize.height > 0) {
      if (
        enemies.enemies.value.length === 0 ||
        enemies.enemies.value[enemies.enemies.value.length - 1].position.x < 500
      ) {
        const enemy = enemies.spwanEnemy();
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
    mainLoop,
    gameState,
    playGame,
    stopGame,
  };
};
