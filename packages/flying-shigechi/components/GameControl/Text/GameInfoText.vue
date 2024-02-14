<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();
</script>

<template>
  <div class="absolute top-4 right-4 m-auto">
    <p class="font-bold text-20">Charactor: {{ store.charactor.name }}</p>
    <p class="font-bold text-20">Score: {{ store.score }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
