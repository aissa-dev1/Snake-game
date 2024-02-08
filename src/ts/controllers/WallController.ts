import Board from "../Board";
import Wall from "../entities/Wall";
import { WallControllerOptions } from "../options";

class WallController {
  private _walls: Array<Wall>;

  private _board: Board;

  public constructor(options: WallControllerOptions) {
    this._walls = options.walls;

    this._board = options.board;
  }

  public removeWalls(indices: number[]): void {
    if (indices.length <= 0) return;

    for (const index of indices.reverse()) {
      this._walls[index].element.remove();

      this._walls.splice(index, 1);
    }

    this.addWall();
  }

  public addWall(): void {
    this._walls.push(new Wall({ size: 25, board: this._board }));

    this.renderWalls();
  }

  public resetWalls(): void {
    for (const wall of this._walls) wall.element.remove();

    const deleteWallsInterval = setInterval(() => {
      if (this._walls.length === 0) clearInterval(deleteWallsInterval);

      this._walls.pop();
    }, 50);
  }

  public get walls(): Wall[] {
    return this._walls;
  }

  private renderWalls(): void {
    for (const wall of this._walls) wall.render();
  }
}

export default WallController;
