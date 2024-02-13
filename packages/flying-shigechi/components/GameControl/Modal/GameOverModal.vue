<script setup lang="ts">
import BaseModal from "~/components/GameControl/Modal/BaseModal.vue";
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();
</script>

<template>
  <BaseModal confirmText="もう一度" class="transition-opacity duration-200">
    <template #title>Game Over 🤢</template>
    <template #default>
      <p>Score: {{ store.score }}</p>
      <p>再挑戦しますか？</p>
    </template>
  </BaseModal>
</template>

<style lang="scss" scoped></style>
