import type { Size } from "~/types/game";
import { Collectible } from "~/models/collectible";

export type UseCollectibles = {
  collectibles: ComputedRef<Collectible[]>;
  spwanCollectible: (level: number) => Collectible;
  deleteOldestCollectible: () => void;
  resetCollectibles: () => void;
  update: () => void;
};

export const useCollectibles = (gameWindowSize: Size): UseCollectibles => {
  let innerCollectibles: Collectible[] = reactive<Collectible[]>([]);

  const collectibles = computed(() => {
    return innerCollectibles;
  });

  const resetCollectibles = (): void => {
    innerCollectibles.length = 0;
    innerCollectibles.forEach(() => {
      innerCollectibles.shift();
    });
  };

  const spwanCollectible = (level: number): Collectible => {
    const collectible = new Collectible({
      gameWindowSize,
      AdditionalVelocity: -2 * level,
    });
    innerCollectibles.push(collectible);

    return innerCollectibles.slice(-1)[0];
  };

  const deleteOldestCollectible = (): void => {
    if (!innerCollectibles[0].isActive) {
      innerCollectibles.shift();
    }
  };

  const update = () => {
    innerCollectibles.forEach((collectible) => {
      collectible.update();
    });
  };

  return {
    collectibles,
    spwanCollectible,
    deleteOldestCollectible,
    resetCollectibles,
    update,
  };
};
