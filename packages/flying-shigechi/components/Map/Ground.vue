<script setup lang="ts">
type Props = {
  playing: boolean;
};

const props = defineProps<Props>();
</script>

<template>
  <hr class="ground" :class="{ 'ground--active': plaing }" />
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
  background-position: 100% 0, 98% 50px;
  background-size: 20px 20px;

  &--active {
    animation: loop_animation_right 20s linear infinite;
    width: 100%;
  }
}

@keyframes loop_animation_right {
  0% {
    background-position: 100% 0, 98% 50px;
  }
  100% {
    background-position: 0% 0, -2% 50px;
  }
}
</style>
