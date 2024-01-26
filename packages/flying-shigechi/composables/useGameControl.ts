import { TIME_STEP } from "~/constants/game";
import type { UsePlayer } from "./usePlayer";

type UseGameControl = {
  player: UsePlayer;
  mainLoop: () => void;
  playing: Ref<boolean>;
  playGame: () => void;
  stopGame: () => void;
};

export const useGameControl = (): UseGameControl => {
  /*
   * 各種登場人物のセット
   */
  const player = usePlayer();

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

    setTimeout(mainLoop, TIME_STEP * 1000);
  };

  onMounted(() => {
    window.addEventListener("keydown", player.jumpPlayer);
    window.addEventListener("touchstart", player.jumpPlayer);

    mainLoop();
  });

  return {
    player,
    mainLoop,
    playing,
    playGame,
    stopGame,
  };
};
