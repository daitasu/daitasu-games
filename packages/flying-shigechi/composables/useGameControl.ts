import { TIME_STEP } from "~/constants/game";
import type { UsePlayer } from "~/composables/usePlayer";
import { useEnemies, type Enemy } from "~/composables/useEnemies";
import type { Size } from "~/types/game";

type UseGameControl = {
  player: UsePlayer;
  enemies: Enemy[];
  mainLoop: () => void;
  playing: Ref<boolean>;
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
  const { enemies, spwanEnemy } = useEnemies(gameWindowSize);

  /*
   * ゲーム全体処理
   */
  const playing = ref<boolean>(false);

  const playGame = () => {
    playing.value = true;
  };
  const stopGame = () => {
    playing.value = false;
  };

  const mainLoop = () => {
    // 自然落下
    player.setGravityFall();
    console.log(
      "position:" +
        player.position.value.y +
        ", velocity:" +
        player.velocity.value.y
    );

    console.log(gameWindowSize);
    if (enemies.length === 0 && gameWindowSize.height > 0) {
      const enemy = spwanEnemy();

      console.log("enemy ->", enemy);
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
    enemies,
    mainLoop,
    playing,
    playGame,
    stopGame,
  };
};
