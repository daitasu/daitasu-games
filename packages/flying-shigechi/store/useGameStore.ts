import { defineStore } from "pinia";
import type { GameState, Size } from "~/types/game";

export const useGameStore = defineStore("games", () => {
  const score = ref<number>(0);
  const gameState = ref<GameState>("stop");
  const charactor = ref("");

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
    playGame,
    stopGame,
    setGameOver,
    resetScore,
  };
});
