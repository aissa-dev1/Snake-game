import { BoardOptions } from "./options";

class Board {
  private _boardElm: HTMLDivElement;

  private _width: number;
  private readonly _defaultWidth: number;
  private _height: number;
  private _edges: boolean;

  public constructor(options: BoardOptions) {
    this._boardElm = document.querySelector(".board")!;

    this._width = options.width;
    this._defaultWidth = this._width;
    this._height = options.height;
    this._edges = options.edges;

    this.applyMeasurements();
    this.updateBoardElmEdges();
  }

  public handleWidthMeasurement(event: Event): void {
    const innerWidth = (event.currentTarget as Window).innerWidth;

    const isWidthGreaterThanDefault = innerWidth >= this._defaultWidth;

    if (isWidthGreaterThanDefault) this.defaultWidthMeasurement();
    else this.windowWidthMeasurement();
  }

  public enableEdges(): void {
    this._edges = true;

    this.updateBoardElmEdges();
  }

  public disableEdges(): void {
    this._edges = false;

    this.updateBoardElmEdges();
  }

  public get width(): number {
    return this._width;
  }

  public get defaultWidth(): number {
    return this._defaultWidth;
  }

  public get height(): number {
    return this._height;
  }

  public get edges(): boolean {
    return this._edges;
  }

  private defaultWidthMeasurement(): void {
    this._width = this._defaultWidth;

    this.applyMeasurements();
  }

  private windowWidthMeasurement(): void {
    this._width = window.innerWidth;

    this.applyMeasurements();
  }

  private applyMeasurements(): void {
    this._boardElm.style.width = `${this._width}px`;

    this._boardElm.style.height = `${this._height}px`;
  }

  private updateBoardElmEdges(): void {
    if (this._edges) this._boardElm.classList.add("edges");
    else this._boardElm.classList.remove("edges");
  }
}

export default Board;
