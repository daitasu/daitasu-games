<template>
  <div class="mt-7 py-4 px-5 grid grid-cols-[1fr_1fr_1fr] gap-9">
    <template v-for="charactor in ['', '', '', '', '', '']">
      <button
        class="flex flex-col items-center justify-center min-w-[220px] rounded-12 bg-white p-3 border border-solid border-gray-400 hover:bg-gray-200 hover:opacity-80 transition"
      >
        <p class="font-bold text-20 mb-0.5">ねぎ</p>
        <div class="relative w-[120px] h-[120px]">
          <img
            src="/shigechi.png"
            alt="Discover Nuxt 3"
            height="120"
            width="120"
            class="object-cover absolute w-full h-full"
          />
        </div>
        <p class="text-14 mt-0.5 max-m-[170px]">王道王道王道王道王道</p>
      </button>
    </template>
  </div>
</template>

<style lang="scss" scoped></style>
