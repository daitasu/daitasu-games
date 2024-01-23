<script setup lang="ts">
import { ref } from "vue";
import NavigationMenu from "~/components/NavigationMenu.vue";

const isOpen = ref<boolean>(false);
const openMenu = () => (isOpen.value = true);
const closeMenu = () => (isOpen.value = false);
</script>

<template>
  <div class="text-16">
    <header>
      <div
        class="header fixed top-0 right-0 w-full flex justify-between items-center bg-blue-200"
      >
        <div
          class="flex flex-row items-center mx-2 cursor-pointer"
          @click="openMenu"
        >
          <Icon name="uim:bars" color="black" size="30" />
          <p class="text-24 ml-2">Flying Shigechi !!!</p>
        </div>
        <a class="mx-2 cursor-pointer">
          <Icon name="uil:github" color="black" size="30" />
        </a>
      </div>
    </header>
    <NavigationMenu :isOpen="isOpen" @onClickClose="closeMenu" />
    <slot />
  </div>
</template>

<style lang="scss">
/* Write scss here */
.header {
  height: 56px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}
</style>
