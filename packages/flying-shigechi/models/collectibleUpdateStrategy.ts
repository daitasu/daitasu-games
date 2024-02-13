import { Collectible } from "~/models/collectible";

export interface UpdateStrategy {
  update(collectible: Collectible): void;
}

export class DefaultUpdateStrategy implements UpdateStrategy {
  update(collectible: Collectible) {
    collectible.position.x += collectible.velocity.x;
  }
}
