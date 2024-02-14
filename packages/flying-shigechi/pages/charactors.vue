<script setup lang="ts">
import { CHARACTORS } from "~/constants/game";
import type { Charactor } from "~/types/game";
import CharactorSelectModal from "~/components/GameControl/Modal/CharactorSelectModal.vue";
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();
const selectedCharactor = ref<Charactor | null>(null);

const { show, hide, isShown } = useToggle();

const openModal = (charactor: Charactor) => {
  selectedCharactor.value = charactor;
  show();
};

const handleClickConfirm = () => {
  if (selectedCharactor.value) {
    store.charactor = selectedCharactor.value;
  }
  hide();
};
const handleClickCancel = () => {
  selectedCharactor.value = null;
  hide();
};
</script>

<template>
  <div>
    <CharactorSelectModal
      v-if="selectedCharactor && isShown"
      :charactor="selectedCharactor"
      @onClickConfirm="handleClickConfirm"
      @onClickClose="handleClickCancel"
    />
    <div class="mt-7 py-4 px-5 grid grid-cols-[1fr_1fr_1fr] gap-9">
      <template v-for="charactor in CHARACTORS" :key="charactor.id">
        <button
          class="flex flex-col items-center justify-center min-w-[220px] rounded-12 bg-white p-3 border border-solid border-gray-400 hover:bg-gray-200 hover:opacity-80 transition"
          @click="openModal(charactor)"
        >
          <p class="font-bold text-20 mb-0.5">{{ charactor.name }}</p>
          <div class="relative w-[120px] h-[120px]">
            <img
              src="/shigechi.png"
              alt="キャラクター"
              height="120"
              width="120"
              class="object-cover absolute w-full h-full"
            />
          </div>
          <p class="text-14 mt-0.5 max-m-[170px]">
            {{ charactor.description }}
          </p>
        </button>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
