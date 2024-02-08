import Board from "../Board";
import { Dimension } from "../interfaces";
import { DirectionTopOptions } from "../options";
import { DirectionTag } from "../types";
import Direction from "./Direction";

class DirectionTop extends Direction {
  private _board: Board;

  protected _tag: DirectionTag;

  public constructor(options: DirectionTopOptions) {
    super(options.element);

    this._board = options.board;

    this._tag = "top";
  }

  public applyDirection(x: number, y: number, speed: number): Dimension {
    let newY = y;

    newY -= speed;

    this.removeElementClasses();

    return { x, y: newY };
  }

  public snakeLeftZone(x: number, y: number): Dimension {
    let newY = y;

    newY = this._board.height - 25;

    return { x, y: newY };
  }
}

export default DirectionTop;
