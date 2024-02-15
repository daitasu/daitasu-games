<script setup lang="ts">
import type { Collectible } from "~/models/collectible";

type Props = {
  collectible: Collectible;
};

const { collectible } = defineProps<Props>();
</script>

<template>
  <div
    class="absolute"
    :style="`left:${collectible.position.x}px; bottom: ${collectible.position.y}px;`"
  >
    <div
      class="relative"
      :style="`height: ${collectible.size.height}px; width: ${collectible.size.width}px;`"
    >
      <img
        :src="`/collectible.png`"
        alt="collectible"
        :height="collectible.size.height"
        :width="collectible.size.height"
        class="object-cover absolute w-full h-full rounded-8"
      />
    </div>
  </div>
</template>
