<script setup lang="ts">
import PrimaryButton from "~/components/GameControl/Button/PrimaryButton.vue";
import StartModal from "~/components/GameControl/Modal/StartModal.vue";
import Player from "~/components/Sprite/Player.vue";
import Enemy from "~/components/Sprite/Enemy.vue";
import Ground from "~/components/Map/Ground.vue";
import GameInfoText from "~/components/GameControl/Text/GameInfoText.vue";

const playing = ref<boolean>(false);

const isOpen = ref<boolean>(false);
const openPlayModal = () => {
  isOpen.value = true;
};
const closePlayModal = () => {
  isOpen.value = false;
};

const playGame = () => {
  playing.value = true;
};
const stopGame = () => {
  playing.value = false;
};

const handleClickConfirm = () => {
  playGame();
  closePlayModal();
};
const handleClickCancel = () => {
  stopGame();
  closePlayModal();
};
</script>

<template>
  <div class="mt-7">
    <StartModal
      v-if="isOpen"
      @onClickConfirm="handleClickConfirm"
      @onClickClose="handleClickCancel"
    />
    <PrimaryButton v-else class="start-button" @onClick="openPlayModal"
      >Play Game</PrimaryButton
    >
    <GameInfoText />
    <Enemy />
    <Player />
    <Ground :plaing="playing" />
  </div>
</template>

<style lang="scss" scoped>
.start-button {
  position: fixed;
  right: 0;
  left: 0;
  margin: 0 auto;
  top: 35%;
}
</style>
