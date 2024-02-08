import Board from "../Board";
import { Dimension } from "../interfaces";
import { DirectionLeftOptions } from "../options";
import { DirectionTag } from "../types";
import Direction from "./Direction";

class DirectionLeft extends Direction {
  private _board: Board;

  protected _tag: DirectionTag;

  public constructor(options: DirectionLeftOptions) {
    super(options.element);

    this._board = options.board;

    this._tag = "left";
  }

  public applyDirection(x: number, y: number, speed: number): Dimension {
    let newX = x;

    newX -= speed;

    this._element.classList.add("left");

    return { x: newX, y };
  }

  public snakeLeftZone(x: number, y: number): Dimension {
    let newX = x;

    newX = this._board.width - 25;

    return { x: newX, y };
  }
}

export default DirectionLeft;
