<script setup lang="ts">
const emit = defineEmits<{
  (e: "onClick", value: Event): void;
}>();

const handleClick = (e: Event) => {
  emit("onClick", e);
};
</script>

<template>
  <button
    class="transition rounded-16 bg-indigo-600 hover:bg-indigo-300 text-white text-20 font-bold py-1 px-2 pc:w-180 w-full max-w-180"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
