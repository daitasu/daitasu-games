<script setup lang="ts">
import type { Enemy } from "~/models/enemy";

type Props = {
  enemy: Enemy;
};

const { enemy } = defineProps<Props>();
const { position, size } = enemy;
</script>

<template>
  <div>
    <Icon
      name="game-icons:angler-fish"
      color="black"
      class="enemy absolute"
      :size="`${size.height}`"
      :style="`left:${position.x}px; bottom: ${position.y}px;`"
    />
  </div>
</template>

<style lang="scss" scoped>
.enemy {
  transform: scale(-1, 1);
}
</style>
