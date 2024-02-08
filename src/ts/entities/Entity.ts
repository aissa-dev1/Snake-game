import Board from "../Board";
import { IEntity } from "../interfaces";
import { EntityOptions } from "../options";

abstract class Entity implements IEntity {
  protected abstract _container: HTMLDivElement;
  protected _element: HTMLDivElement;
  protected _image: HTMLImageElement;

  protected readonly _board: Board;

  protected _x: number;
  protected _y: number;
  protected _size: number;

  public constructor(options: EntityOptions) {
    this._element = document.createElement("div");
    this._image = document.createElement("img");

    this._board = options.board;

    this._x = Math.floor(Math.random() * (this._board.width - 22));
    this._y = Math.floor(Math.random() * (this._board.height - 22));
    this._size = options.size;
  }

  public abstract render(): void;

  protected abstract renderImage(): void;

  public get element(): HTMLDivElement {
    return this._element;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }

  protected applySize(): void {
    this._element.style.width = `${this._size}px`;

    this._element.style.height = `${this._size}px`;
  }

  protected applyDimensions(): void {
    this._element.style.left = `${this._x}px`;

    this._element.style.top = `${this._y}px`;
  }
}

export default Entity;
