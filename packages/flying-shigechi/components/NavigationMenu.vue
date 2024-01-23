<script setup lang="ts">
type Props = {
  isOpen: boolean;
};

const props = defineProps<Props>();

const route = useRoute();

const emit = defineEmits<{
  (e: "onClickClose"): void;
}>();

const menus = [
  {
    title: "ホーム",
    icon: "game-icons:fairy-wand",
    to: "/",
  },
  {
    title: "キャラクター選択",
    icon: "game-icons:master-of-arms",
    to: "/charactors",
  },
];

const isActiveMenu = (to: string) => {
  return route.path === to;
};

const handleClose = () => {
  emit("onClickClose");
};
</script>

<template>
  <div>
    <div
      v-if="isOpen"
      class="overlay fixed top-0 right-0 left-0 bottom-0 transition opacity-50"
      @click="handleClose"
    />
    <Transition appear>
      <div
        v-if="isOpen"
        class="navigation fixed top-0 left-0 h-full w-300 text-gray-600 bg-white py-1 px-2 bold text-20"
      >
        <NuxtLink
          v-for="menu in menus"
          :to="menu.to"
          :class="{ 'text-blue-600': isActiveMenu(menu.to) }"
          class="h-48 px-1 flex flex-row items-center hover:opacity-80 hover:bg-blue-100 transition"
          @click="handleClose"
        >
          <Icon :name="menu.icon" color="text-gray-600" size="24" />
          <p class="ml-2">{{ menu.title }}</p>
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.navigation {
  z-index: 3;
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);

  transition-property: transform, opacity;
  transition-duration: 0.2s;
}
.overlay {
  z-index: 2;

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

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transform: translateX(0);
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(-300px);
}
</style>
