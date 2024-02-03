<script setup lang="ts">
import PrimaryButton from "~/components/GameControl/Button/PrimaryButton.vue";
import StartModal from "~/components/GameControl/Modal/StartModal.vue";
import Player from "~/components/Sprite/Player.vue";
import Enemy from "~/components/Sprite/Enemy.vue";
import Ground from "~/components/Map/Ground.vue";
import GameInfoText from "~/components/GameControl/Text/GameInfoText.vue";
import type { Size } from "~/types/game";

const gameAreaRef = ref<HTMLElement | null>(null);
const gameWindowSize = ref<Size>({ width: 0, height: 0 });

const { player, playing, enemies, playGame, stopGame } = useGameControl(
  gameWindowSize.value
);
const playModal = useToggle();

const handleClickConfirm = () => {
  playGame();
  playModal.hide();
};
const handleClickCancel = () => {
  stopGame();
  playModal.hide();
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
    <PrimaryButton v-else class="start-button" @onClick="playModal.show"
      >Play Game</PrimaryButton
    >
    <GameInfoText />
    <template v-for="enemy in enemies">
      <Enemy :key="enemy.id" v-if="enemy.isActive" :enemy="enemy" />
    </template>
    <Player :player="player" />
    <Ground :playing="playing" />
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

  &:after {
    content: "";
    display: block;
    position: absolute;
    left: -91px;
    top: -91px;
    margin: auto;
    width: calc(100% + 182px);
    height: 100%;
    border-left: solid 90px #fff;
    border-right: solid 90px #fff;
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
