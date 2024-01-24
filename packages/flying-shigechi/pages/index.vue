<script setup lang="ts">
import PrimaryButton from "~/components/GameControl/Button/PrimaryButton.vue";
import StartModal from "~/components/GameControl/Modal/StartModal.vue";

const isOpen = ref<boolean>(false);
const openPlayModal = () => {
  isOpen.value = true;
};
const closePlayModal = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="mt-7">
    <StartModal v-if="isOpen" @onClickClose="closePlayModal" />
    <PrimaryButton v-else class="start-button" @onClick="openPlayModal"
      >Play Game</PrimaryButton
    >
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
