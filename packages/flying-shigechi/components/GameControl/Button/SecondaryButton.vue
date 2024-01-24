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
    class="transition rounded-16 hover:bg-gray-100 text-gray-600 text-20 font-bold py-1 px-2 w-180"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
