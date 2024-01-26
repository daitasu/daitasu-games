<script setup lang="ts">
import PrimaryButton from "~/components/GameControl/Button/PrimaryButton.vue";
import StartModal from "~/components/GameControl/Modal/StartModal.vue";
import Player from "~/components/Sprite/Player.vue";
import Enemy from "~/components/Sprite/Enemy.vue";
import Ground from "~/components/Map/Ground.vue";
import GameInfoText from "~/components/GameControl/Text/GameInfoText.vue";

const { player, playing, playGame, stopGame } = useGameControl();

const playModal = useToggle();

const handleClickConfirm = () => {
  playGame();
  playModal.hide();
};
const handleClickCancel = () => {
  stopGame();
  playModal.hide();
};
</script>

<template>
  <div class="mt-7 game-area">
    <StartModal
      v-if="playModal.isShown.value"
      @onClickConfirm="handleClickConfirm"
      @onClickClose="handleClickCancel"
    />
    <PrimaryButton v-else class="start-button" @onClick="playModal.show"
      >Play Game</PrimaryButton
    >
    <GameInfoText />
    <Enemy />
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
}
.start-button {
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 35%;
}
</style>
