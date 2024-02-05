import type { Size, Vector } from "~/types/game";

type Sprite = {
  size: Size;
  position: Vector;
};

export const checkCollide = (spriteA: Sprite, spriteB: Sprite) => {
  return (
    spriteA.position.x < spriteB.position.x + spriteB.size.width &&
    spriteA.position.x + spriteA.size.width > spriteB.position.x &&
    spriteA.position.y < spriteB.position.y + spriteB.size.height &&
    spriteA.position.y + spriteA.size.height > spriteB.position.y
  );
};
