import {
  GRAVITY,
  INITIAL_POSITION,
  INITIAL_VELOCITY,
  PLAYER_SIZE,
} from "~/constants/game";
import { useGameStore } from "~/store/useGameStore";
import type { Size, Vector } from "~/types/game";

export type UsePlayer = {
  position: Ref<Vector>;
  velocity: Ref<Vector>;
  size: Size;
  setGravityFall: () => void;
  jumpPlayer: (e: KeyboardEvent | TouchEvent) => void;
};

export const usePlayer = (): UsePlayer => {
  const { isDesktop } = useDevice();
  const store = useGameStore();

  // 位置と速度を初期化
  const position = ref<Vector>({ ...INITIAL_POSITION });
  const velocity = ref<Vector>({ ...INITIAL_VELOCITY });
  const size = { width: PLAYER_SIZE, height: PLAYER_SIZE };

  const getCeilingY = () => {
    return window.innerHeight - 56 - PLAYER_SIZE; // ヘッダー部分を差し引く
  };

  const setGravityFall = () => {
    if (position.value.y > getCeilingY()) {
      // 天井突破時
      position.value.y = getCeilingY();
      velocity.value.y = 0;
    } else if (velocity.value.y > 0 || position.value.y > INITIAL_POSITION.y) {
      const weightAbility = store.charactor.weight || 0;

      // ジャンプによる上方向加速または自然落下中
      position.value.y += velocity.value.y;

      // 縦速度を重力加速度で変化させる
      velocity.value.y += GRAVITY + weightAbility;
    } else {
      // 地上着地時
      position.value.y = INITIAL_POSITION.y;
      velocity.value.y = 0;
    }
  };

  const jumpPlayer = (e: KeyboardEvent | TouchEvent) => {
    if (isDesktop && e instanceof KeyboardEvent) {
      if (e.key !== " " && e.code !== "Space") {
        return;
      }
    }

    // ジャンプ時は負方向速度をキャンセルする
    const positiveVelocityY = 30;

    const jumpAbility = store.charactor.jump || 0;

    velocity.value.y += positiveVelocityY + jumpAbility;
  };

  return {
    position,
    velocity,
    size,
    setGravityFall,
    jumpPlayer,
  };
};
