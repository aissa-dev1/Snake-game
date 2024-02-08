import { Dimension } from "../interfaces";
import { DirectionTag } from "../types";
import Direction from "./Direction";

class DirectionBottom extends Direction {
  protected _tag: DirectionTag;

  public constructor(element: HTMLDivElement) {
    super(element);

    this._tag = "bottom";
  }

  public applyDirection(x: number, y: number, speed: number): Dimension {
    let newY = y;

    newY += speed;

    this._element.classList.add("bottom");

    return { x, y: newY };
  }

  public snakeLeftZone(x: number, y: number): Dimension {
    let newY = y;

    newY = 0;

    return { x, y: newY };
  }
}

export default DirectionBottom;
