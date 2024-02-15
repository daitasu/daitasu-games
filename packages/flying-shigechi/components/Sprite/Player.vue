<script setup lang="ts">
import { PLAYER_SIZE } from "~/constants/game";
import type { UsePlayer } from "~/composables/usePlayer";
import { useGameStore } from "~/store/useGameStore";

type Props = {
  player: UsePlayer;
};

const store = useGameStore();

const { player } = defineProps<Props>();

// ボールの位置と速度を初期化
const position = player.position.value;
</script>

<template>
  <div class="player" :style="`left:${position.x}px; bottom: ${position.y}px;`">
    <div class="relative w-[90px] h-[90px]">
      <img
        :src="`/shigechi/${store.charactor.imagePath}.png`"
        alt="プレイヤー"
        :height="90"
        :width="90"
        class="object-cover absolute w-full h-full rounded-8"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes sway {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

.player {
  position: absolute;
  animation: sway 0.4s infinite ease-in-out;
}
</style>
