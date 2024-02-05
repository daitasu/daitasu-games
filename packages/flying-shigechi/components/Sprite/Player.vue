<script setup lang="ts">
import { PLAYER_SIZE } from "~/constants/game";
import type { UsePlayer } from "~/composables/usePlayer";

type Props = {
  player: UsePlayer;
};

const { player } = defineProps<Props>();

// ボールの位置と速度を初期化
const position = player.position.value;
</script>

<template>
  <Icon
    name="uil:github"
    color="black"
    :size="`${PLAYER_SIZE}`"
    class="player"
    :style="`left:${position.x}px; bottom: ${position.y}px;`"
  />
</template>

<style lang="scss" scoped>
.player {
  position: absolute;
}
</style>
