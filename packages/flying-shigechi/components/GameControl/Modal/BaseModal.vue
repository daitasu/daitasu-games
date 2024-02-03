<script setup lang="ts">
import PrimaryButton from "../Button/PrimaryButton.vue";
import SecondaryButton from "../Button/SecondaryButton.vue";

const emit = defineEmits<{
  (e: "onClickConfirm", value: Event): void;
  (e: "onClickClose", value: Event): void;
}>();

const onClickConfirm = (e: Event) => {
  emit("onClickConfirm", e);
};
const onClickClose = (e: Event) => {
  emit("onClickClose", e);
};
</script>

<template>
  <div>
    <div class="overlay fixed inset-0 transition opacity-50" />
    <Transition appear>
      <div
        class="modal transition-opacity duration-800 bg-white fixed right-0 left-0 m-auto mt-9 rounded-20 flex flex-col items-center pc:w-420 w-full text-16 font-bold p-2"
      >
        <div class="text-20">
          <slot name="title"></slot>
        </div>
        <div class="py-2">
          <slot></slot>
        </div>
        <div>
          <slot name="actions">
            <div class="flex flex-row items-center">
              <SecondaryButton class="m-1" @click="onClickClose"
                >とじる</SecondaryButton
              >
              <PrimaryButton class="m-1" @click="onClickConfirm"
                >挑む</PrimaryButton
              >
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.overlay {
  z-index: 3;

  &:before {
    background-color: #212121;
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: inherit;
    transition-delay: 0.15s;
    width: 100%;
  }
}
.modal {
  z-index: 4;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
