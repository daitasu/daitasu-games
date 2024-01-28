import {
  GRAVITY,
  INITIAL_POSITION,
  INITIAL_VELOCITY,
  PLAYER_SIZE,
} from "~/constants/game";
import type { Vector } from "~/types/game";

export type UsePlayer = {
  position: Ref<Vector>;
  velocity: Ref<Vector>;
  setGravityFall: () => void;
  jumpPlayer: (e: KeyboardEvent | TouchEvent) => void;
};

export const usePlayer = (): UsePlayer => {
  const { isDesktop } = useDevice();

  // 位置と速度を初期化
  const position = ref<Vector>({ ...INITIAL_POSITION });
  const velocity = ref<Vector>({ ...INITIAL_VELOCITY });

  const getCeilingY = () => {
    return window.innerHeight - 56 - PLAYER_SIZE; // ヘッダー部分を差し引く
  };

  const setGravityFall = () => {
    if (position.value.y > getCeilingY()) {
      // 天井突破時
      position.value.y = getCeilingY();
      velocity.value.y = 0;
    } else if (velocity.value.y > 0 || position.value.y > INITIAL_POSITION.y) {
      // ジャンプによる上方向加速または自然落下中
      position.value.y += velocity.value.y;
      velocity.value.y += GRAVITY; // 縦速度を重力加速度で変化させる
    } else {
      // 地上着地時
      position.value.y = INITIAL_POSITION.y;
      velocity.value.y = 0;
    }
  };

  const jumpPlayer = (e: KeyboardEvent | TouchEvent) => {
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

  return {
    position,
    velocity,
    setGravityFall,
    jumpPlayer,
  };
};
