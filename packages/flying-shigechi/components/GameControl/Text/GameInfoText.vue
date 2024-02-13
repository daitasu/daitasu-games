<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();
</script>

<template>
  <div>
    <p>Charactor: xx</p>
    <p>Score: {{ store.score }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
