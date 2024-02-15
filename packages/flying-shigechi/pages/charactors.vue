<script setup lang="ts">
import { CHARACTORS } from "~/constants/game";
import type { Charactor } from "~/types/game";
import CharactorSelectModal from "~/components/GameControl/Modal/CharactorSelectModal.vue";
import { useGameStore } from "~/store/useGameStore";

const store = useGameStore();
const selectedCharactor = ref<Charactor>(store.charactor);

const { show, hide, isShown } = useToggle();

const openModal = (charactor: Charactor) => {
  selectedCharactor.value = charactor;
  show();
};

const handleClickConfirm = () => {
  if (selectedCharactor.value) {
    store.charactor = selectedCharactor.value;
    localStorage.setItem("charactor_id", store.charactor.id);
  }
  hide();
  navigateTo("/");
};
const handleClickCancel = () => {
  selectedCharactor.value = store.charactor;
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
          class="charactor-card flex flex-col items-center justify-center min-w-[220px] rounded-12 bg-white p-3 border border-solid border-gray-400 hover:bg-gray-200 hover:opacity-80 transition"
          :class="{
            'bg-indigo-300 hover:bg-indigo-300':
              charactor.id === store.charactor.id,
          }"
          @click="openModal(charactor)"
        >
          <p class="font-bold text-20 mb-0.5">{{ charactor.name }}</p>
          <div class="charactor relative w-[120px] h-[120px]">
            <img
              :src="`/shigechi/${charactor.imagePath}.png`"
              alt="キャラクター"
              height="120"
              width="120"
              class="object-cover absolute w-full h-full rounded-8"
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

<style lang="scss" scoped>
@keyframes sway {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

.charactor {
  display: inline-block;
  transition: transform 0.4s;
}
.charactor-card:hover {
  .charactor {
    animation: sway 0.4s;
    animation-iteration-count: 2;
  }
}
</style>
