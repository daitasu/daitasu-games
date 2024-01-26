<script setup lang="ts">
import { GROUND_LEVEL, PLAYER_SIZE } from "~/constants/game";
import type { Vector } from "~/types/game";

// 初期条件設定
const initialPosition: Vector = {
  x: 0,
  y: GROUND_LEVEL,
};
const initialVelocity: Vector = { x: 0, y: 0 }; // 初期速度 (x方向, y方向)
const gravity = -3; // 重力加速度

// 更新間隔 (秒)
const timeStep = 0.08;

// ボールの位置と速度を初期化
const position = ref<Vector>({ ...initialPosition });
const velocity = ref<Vector>({ ...initialVelocity });

const jumping = ref<boolean>(false);

const { isDesktop } = useDevice();

const setGravityFall = () => {
  if (position.value.y > getCeilingY()) {
    // 天井突破時
    position.value.y = getCeilingY();
    velocity.value.y = 0;
  } else if (velocity.value.y > 0 || position.value.y > initialPosition.y) {
    // ジャンプによる上方向加速または自然落下中
    position.value.y += velocity.value.y;
    velocity.value.y += gravity; // 縦速度を重力加速度で変化させる
  } else {
    // 地上着地時
    position.value.y = initialPosition.y;
    velocity.value.y = 0;
  }
};

const getCeilingY = () => {
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
  const positiveVelocityY = 30;

  velocity.value.y += positiveVelocityY;
};

onMounted(() => {
  window.addEventListener("keydown", jumpPlayer);
  window.addEventListener("touchstart", jumpPlayer);

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
