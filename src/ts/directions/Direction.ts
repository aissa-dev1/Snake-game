import { Dimension, IDirection } from "../interfaces";
import { DirectionTag } from "../types";

abstract class Direction implements IDirection {
  protected _element: HTMLDivElement;

  protected abstract _tag: DirectionTag;

  public constructor(element: HTMLDivElement) {
    this._element = element;
  }

  public abstract applyDirection(x: number, y: number, speed: number): Dimension;

  public abstract snakeLeftZone(x: number, y: number): Dimension;

  public removeElementClasses(): void {
    this._element.classList.remove("left", "top", "right", "bottom");
  }

  public get tag(): DirectionTag {
    return this._tag;
  }
}

export default Direction;
