import Direction from "../directions/Direction";
import { Dimension } from "../interfaces";
import { DirectionTag } from "../types";

class DirectionController {
  private _direction: Direction | null;
  private _lastDirectionTag: DirectionTag | null;

  public constructor() {
    this._direction = null;
    this._lastDirectionTag = null;
  }

  public changeDirection(direction: Direction): void {
    this._direction = direction;

    this._lastDirectionTag = direction.tag;
  }

  public handleDirection(x: number, y: number, speed: number): void | Dimension {
    if (this._direction === null) return;

    this._direction.removeElementClasses();

    return this._direction.applyDirection(x, y, speed);
  }

  public handleSnakeLeftZone(x: number, y: number): void | Dimension {
    if (this._direction === null) return;

    return this._direction.snakeLeftZone(x, y);
  }

  public directionNull(): boolean {
    return this._direction === null;
  }

  public reset(): void {
    this._direction = null;
  }

  public get direction(): Direction | null {
    return this._direction;
  }

  public get lastDirectionTag(): DirectionTag | null {
    return this._lastDirectionTag;
  }
}

export default DirectionController;
