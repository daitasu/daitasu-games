import { defineStore } from "pinia";
import { CHARACTORS } from "~/constants/game";
import type { Charactor, GameState, Size } from "~/types/game";

export const useGameStore = defineStore("games", () => {
  const score = ref<number>(0);
  const gameState = ref<GameState>("stop");
  const charactor = ref<Charactor>(CHARACTORS[0]);

  const gameWindowSize = ref<Size>({ width: 0, height: 0 });

  const playGame = () => {
    gameState.value = "play";
  };
  const stopGame = () => {
    gameState.value = "stop";
  };
  const setGameOver = (): void => {
    gameState.value = "gameover";
  };

  const resetScore = (): void => {
    score.value = 0;
  };

  return {
    score,
    gameState,
    charactor,
    playGame,
    stopGame,
    setGameOver,
    resetScore,
  };
});
