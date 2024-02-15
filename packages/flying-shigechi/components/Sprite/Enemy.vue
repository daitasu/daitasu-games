<script setup lang="ts">
import { Enemy } from "~/models/enemy";

type Props = {
  enemy: Enemy;
};

const { enemy } = defineProps<Props>();
</script>

<template>
  <div
    class="absolute"
    :style="`left:${enemy.position.x}px; bottom: ${enemy.position.y}px;`"
  >
    <div
      class="relative"
      :style="`height: ${enemy.size.height}px; width: ${enemy.size.width}px;`"
    >
      <img
        :src="`/enemy.png`"
        alt="enemy"
        :height="enemy.size.height"
        :width="enemy.size.height"
        class="object-cover absolute w-full h-full rounded-8"
      />
    </div>
  </div>
</template>
