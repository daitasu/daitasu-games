<script setup lang="ts">
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();
</script>

<template>
  <hr
    class="ground"
    :class="{ 'ground--active': store.gameState === 'play' }"
  />
</template>

<style lang="scss" scoped>
.ground {
  height: 100px;
  width: 100%;
  border-top: 4px #000000 solid;
  display: block;
  position: absolute;
  bottom: 0;
  background: #a1887f;
  background-image: radial-gradient(#666 10%, transparent 0),
    radial-gradient(#666 10%, transparent 0);
  background-position: 100% 0, 95% 50px;
  background-size: 20px 20px;

  &--active {
    animation: loop_animation_right 20s linear infinite;
    width: 100%;
  }
}

@keyframes loop_animation_right {
  0% {
    background-position: 1000px 0, 950px 50px;
  }
  100% {
    background-position: 0px 0, -50px 50px;
  }
}
</style>
