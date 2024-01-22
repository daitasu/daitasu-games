<script setup lang="ts">
const route = useRoute();

type Props = {
  isOpen: boolean;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "onClick", value: string): void;
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
</script>

<template>
  <div
    v-if="isOpen"
    :class="{ 'navigation--active': props.isOpen }"
    class="navigation fixed top-0 left-0 h-full w-300 text-gray-600 bg-white py-1 px-2 bold text-20"
  >
    <NuxtLink
      v-for="menu in menus"
      :to="menu.to"
      :class="{ 'text-blue-600': isActiveMenu(menu.to) }"
      class="h-48 px-1 flex flex-row items-center hover:opacity-70 hover:bg-gray-200 transition"
    >
      <Icon :name="menu.icon" color="text-gray-600" size="24" />
      <p class="ml-2">{{ menu.title }}</p>
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.navigation {
  transform: translateX(-300px);
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);

  &--active {
    transform: translateX(0px);
  }
}
</style>
