<template>
  <div class="text-16">
    <div
      class="overlay fixed top-0 right-0 left-0 bottom-0 pointer-events-none transition opacity-0"
    />
    <header>
      <div
        class="header fixed top-0 right-0 w-full flex justify-between items-center bg-blue-200"
      >
        <div class="flex flex-row items-center mx-2 cursor-pointer">
          <Icon name="uim:bars" color="black" size="30" />
          <p class="text-24 ml-2">Flying Shigechi !!!</p>
        </div>
        <a class="mx-2 cursor-pointer">
          <Icon name="uil:github" color="black" size="30" />
        </a>
      </div>
    </header>
  </div>
</template>

<style lang="scss">
/* Write scss here */
.header {
  height: 56px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
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
</style>
