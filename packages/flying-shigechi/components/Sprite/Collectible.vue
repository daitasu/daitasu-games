<script setup lang="ts">
import type { Collectible } from "~/models/collectible";

type Props = {
  collectible: Collectible;
};

const { collectible } = defineProps<Props>();
const { position, size } = collectible;
</script>

<template>
  <div>
    <Icon
      name="game-icons:round-star"
      color="black"
      class="collectible absolute"
      :size="`${size.height}`"
      :style="`left:${position.x}px; bottom: ${position.y}px;`"
    />
  </div>
</template>
