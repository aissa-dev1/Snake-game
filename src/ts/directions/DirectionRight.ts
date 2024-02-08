import { Dimension } from "../interfaces";
import { DirectionTag } from "../types";
import Direction from "./Direction";

class DirectionRight extends Direction {
  protected _tag: DirectionTag;

  public constructor(element: HTMLDivElement) {
    super(element);

    this._tag = "right";
  }

  public applyDirection(x: number, y: number, speed: number): Dimension {
    let newX = x;

    newX += speed;

    this._element.classList.add("right");

    return { x: newX, y };
  }

  public snakeLeftZone(x: number, y: number): Dimension {
    let newX = x;

    newX = 0;

    return { x: newX, y };
  }
}

export default DirectionRight;
