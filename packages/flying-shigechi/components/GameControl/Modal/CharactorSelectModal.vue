<script setup lang="ts">
import BaseModal from "~/components/GameControl/Modal/BaseModal.vue";
import type { Charactor } from "~/types/game";

type Props = {
  charactor: Charactor;
};

defineProps<Props>();
</script>

<template>
  <BaseModal class="transition-opacity duration-200">
    <template #title>
      <p>{{ charactor.name }}</p>
    </template>
    <template #default>
      <div class="flex flex-col items-center">
        <p class="font-normal text-15">この野菜できのこ狩りしますか？</p>
        <div class="font-bold pt-1">
          <div class="relative w-[120px] h-[120px]">
            <img
              :src="`/shigechi/${charactor.imagePath}.png`"
              alt="選択されたキャラクター"
              height="120"
              width="120"
              class="object-cover absolute w-full h-full rounded-8"
            />
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<style lang="scss" scoped></style>
