<script setup lang="ts">
import { GROUND_LEVEL, PLAYER_SIZE } from "~/constants/game";
import type { Vector } from "~/types/game";

// 初期条件設定
const initialPosition: Vector = {
  x: 0,
  y: GROUND_LEVEL,
}; // 初期位置 (x, y)
const initialVelocity: Vector = { x: 0, y: 0 }; // 初期速度 (x方向, y方向)
const gravity = -3; // 重力加速度

// 更新間隔 (秒)
const timeStep = 0.1;

// ボールの位置と速度を初期化
const position = ref<Vector>({ ...initialPosition });
const velocity = ref<Vector>({ ...initialVelocity });

console.log(window.innerHeight - GROUND_LEVEL - 56);

const jumping = ref<boolean>(false);

const { isDesktop } = useDevice();

const setGravityFall = () => {
  // 上方向加速中または自然落下中
  if (velocity.value.y > 0 || position.value.y > initialPosition.y) {
    position.value.y += velocity.value.y;
    velocity.value.y += gravity; // 縦速度を重力加速度で変化させる
  } else {
    position.value.y = initialPosition.y;
    velocity.value.y = initialVelocity.y;
  }
};

const getFieldCeiling = () => {
  return window.innerHeight - 56 - PLAYER_SIZE;
};

const mainLoop = () => {
  // 自然落下
  setGravityFall();
  console.log(
    "position:" + position.value.y + ", velocity:" + velocity.value.y
  );

  setTimeout(mainLoop, timeStep * 1000);
};

const jumpPlayer = (e: KeyboardEvent | TouchEvent) => {
  jumping.value = true;

  //TODO: 押しっぱなし禁止

  if (isDesktop && e instanceof KeyboardEvent) {
    if (e.key !== " " && e.code !== "Space") {
      return;
    }
  }

  // ジャンプ時は負方向速度をキャンセルする
  const positiveVelocityY = velocity.value.y > 0 ? 15 : 15;

  velocity.value.y += positiveVelocityY;
};
const layout = ref();

onMounted(() => {
  window.addEventListener("keydown", jumpPlayer);
  window.addEventListener("touchstart", jumpPlayer);
  console.log(layout.value);

  // const layout = ref();

  // console.log(layout.value);

  mainLoop();
});
</script>

<template>
  <Icon
    name="uil:github"
    color="black"
    :size="`${PLAYER_SIZE}`"
    class="player"
    :style="`bottom: ${position.y}px;`"
  />
</template>

<style lang="scss" scoped>
.player {
  position: absolute;
  left: 50px;
  bottom: 100px; //初期位置
}
</style>
