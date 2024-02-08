import { ColliderOptions } from "../options";

class Collider {
  private _collider1: HTMLDivElement;
  private _collider2: HTMLDivElement;

  public constructor(options: ColliderOptions) {
    this._collider1 = options.collider1;
    this._collider2 = options.collider2;
  }

  public collision(): boolean {
    const rect1 = this._collider1.getBoundingClientRect();

    const rect2 = this._collider2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }
}

export default Collider;
