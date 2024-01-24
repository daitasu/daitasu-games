<script setup lang="ts">
import BaseModal from "~/components/GameControl/Modal/BaseModal.vue";
</script>

<template>
  <BaseModal class="transition-opacity duration-200">
    <template #title>ゲームを開始しますか？</template>
    <template #default> ジャンプ: Space or touch </template>
  </BaseModal>
</template>

<style lang="scss" scoped></style>
