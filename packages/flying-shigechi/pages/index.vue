<script setup lang="ts">
import PrimaryButton from "~/components/GameControl/Button/PrimaryButton.vue";
import StartModal from "~/components/GameControl/Modal/StartModal.vue";
import GameOverModal from "~/components/GameControl/Modal/GameOverModal.vue";
import Player from "~/components/Sprite/Player.vue";
import Enemy from "~/components/Sprite/Enemy.vue";
import Collectible from "~/components/Sprite/Collectible.vue";
import Ground from "~/components/Map/Ground.vue";
import GameInfoText from "~/components/GameControl/Text/GameInfoText.vue";
import type { Size } from "~/types/game";
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();

const gameAreaRef = ref<HTMLElement | null>(null);
const gameWindowSize = ref<Size>({ width: 0, height: 0 });

const { player, enemies, collectibles } = useGameControl(gameWindowSize.value);
const playModal = useToggle();

const handleClickConfirm = () => {
  store.resetScore();
  playModal.hide();
  store.playGame();
};
const handleClickCancel = () => {
  playModal.hide();
  store.stopGame();
};

onMounted(() => {
  if (gameAreaRef.value !== null && !!gameAreaRef.value.clientHeight) {
    gameWindowSize.value.height = gameAreaRef.value?.clientHeight;
  }
});
</script>

<template>
  <div class="mt-7 game-area" ref="gameAreaRef">
    <StartModal
      v-if="playModal.isShown.value"
      @onClickConfirm="handleClickConfirm"
      @onClickClose="handleClickCancel"
    />

    <GameOverModal
      v-if="store.gameState === 'gameover'"
      @onClickConfirm="handleClickConfirm"
      @onClickClose="handleClickCancel"
    />

    <PrimaryButton
      v-if="store.gameState !== 'play' && !playModal.isShown.value"
      class="start-button"
      @onClick="playModal.show"
      >Play Game</PrimaryButton
    >

    <GameInfoText />

    <template v-if="store.gameState === 'play'">
      <template v-for="enemy in enemies">
        <Enemy v-if="enemy.isActive" :key="enemy.id" :enemy="enemy" />
      </template>
      <template v-for="collectible in collectibles">
        <Collectible
          v-if="collectible.isActive"
          :key="collectible.id"
          :collectible="collectible"
        />
      </template>
    </template>
    <Player :player="player" />
    <Ground />
  </div>
</template>

<style lang="scss" scoped>
.game-area {
  position: relative;
  transform: scale(1);
  width: 100%;
  height: calc(100vh - 56px);
  max-width: 1000px;
  max-height: 700px;
  border: solid 1px #ddd;
  background-color: #fff;

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -91px;
    top: -91px;
    margin: auto;
    width: calc(100% + 182px);
    height: 100%;
    border-left: solid 90px #eef2ff;
    border-right: solid 90px #eef2ff;
    pointer-events: none;
    z-index: 1;
  }
}
.start-button {
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 35%;
}
</style>
