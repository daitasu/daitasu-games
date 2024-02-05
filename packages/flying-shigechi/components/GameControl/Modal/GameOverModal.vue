<script setup lang="ts">
import BaseModal from "~/components/GameControl/Modal/BaseModal.vue";
</script>

<template>
  <BaseModal confirmText="もう一度" class="transition-opacity duration-200">
    <template #title>Game Over 🤢</template>
    <template #default>
      <p>Score: xxx</p>
      <p>再挑戦しますか？</p>
    </template>
  </BaseModal>
</template>

<style lang="scss" scoped></style>
