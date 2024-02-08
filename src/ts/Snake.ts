import Collider from "./helpers/Collider";
import Food from "./entities/Food";
import Health from "./snake-features/Health";
import Score from "./snake-features/Score";
import Sprint from "./snake-features/Sprint";
import { SnakeOptions } from "./options";
import WallController from "./controllers/WallController";
import DirectionController from "./controllers/DirectionController";
import { Dimension } from "./interfaces";
import Board from "./Board";
import Energy from "./entities/Energy";
import Wall from "./entities/Wall";
import DirectionLeft from "./directions/DirectionLeft";
import DirectionTop from "./directions/DirectionTop";
import DirectionRight from "./directions/DirectionRight";
import DirectionBottom from "./directions/DirectionBottom";

class Snake {
  private _snakeElm: HTMLDivElement;
  private _snakeDirectionElm: HTMLDivElement;
  private _healthElm: HTMLSpanElement;
  private _sprintElm: HTMLSpanElement;

  private readonly _board: Board;
  private readonly _size: number;
  private _x: number;
  private _y: number;
  private _speed: number;
  private readonly _maxSpeed: number;

  private readonly _health: Health;
  private readonly _sprint: Sprint;
  private readonly _directionController: DirectionController;

  public constructor(options: SnakeOptions) {
    this._snakeElm = document.querySelector("#snake")!;
    this._snakeDirectionElm = document.querySelector("#snake_direction")!;
    this._healthElm = document.querySelector("#health")!;
    this._sprintElm = document.querySelector("#sprint")!;

    this._board = options.board;
    this._size = options.size;
    this._x = this._board.width / 2;
    this._y = this._board.height / 2;
    this._speed = 3;
    this._maxSpeed = 7;

    this._health = new Health({ value: 3, healthElm: this._healthElm });
    this._sprint = new Sprint({ cycle: 2, sprintElm: this._sprintElm });
    this._directionController = new DirectionController();

    this.applySize();
    this.applyDimensions();
  }

  public handleSnakeDirection(): void {
    if (this._directionController.directionNull()) return;

    const { x, y } = this._directionController.handleDirection(this._x, this._y, this._speed) as Dimension;

    this._x = x;

    this._y = y;

    this.applyDimensions();
  }

  public moveLeft(): void {
    this._sprint.checkToApplySprint(this, "left");

    this._directionController.changeDirection(new DirectionLeft({ board: this._board, element: this._snakeElm }));

    this._snakeDirectionElm.textContent = "l";
  }

  public moveUp(): void {
    this._sprint.checkToApplySprint(this, "top");

    this._directionController.changeDirection(new DirectionTop({ board: this._board, element: this._snakeElm }));

    this._snakeDirectionElm.textContent = "t";
  }

  public moveRight(): void {
    this._sprint.checkToApplySprint(this, "right");

    this._directionController.changeDirection(new DirectionRight(this._snakeElm));

    this._snakeDirectionElm.textContent = "r";
  }

  public moveDown(): void {
    this._sprint.checkToApplySprint(this, "bottom");

    this._directionController.changeDirection(new DirectionBottom(this._snakeElm));

    this._snakeDirectionElm.textContent = "b";
  }

  public isFoodEaten(food: Food, score: Score, wallController: WallController): void {
    const collider = new Collider({ collider1: this._snakeElm, collider2: food.element });

    if (!collider.collision()) return;

    this.handleFoodEaten(food, score, wallController);
  }

  public isEnergyEaten(energy: Energy): void {
    const collider = new Collider({ collider1: this._snakeElm, collider2: energy.element });

    if (!collider.collision()) return;

    this.handleEnergyEaten(energy);
  }

  public isWallCollision(score: Score, wallController: WallController, walls: Wall[]): void {
    const wallsToRemove: number[] = [];

    for (let i = 0; i < walls.length; i++) {
      const collider = new Collider({ collider1: this._snakeElm, collider2: walls[i].element });

      if (collider.collision()) {
        wallsToRemove.push(i);

        this.handleWallCollision(score);

        break;
      }
    }

    wallController.removeWalls(wallsToRemove);
  }

  public isSnakeLeftZone(): void {
    if (this._directionController.directionNull()) return;

    const snakeLeft =
      this._x < 0 || this._y < 0 || this._x > this._board.width - 25 || this._y > this._board.height - 25;

    if (!snakeLeft) return;

    if (this._board.edges) {
      this._health.decrease(this._health.value);

      return;
    }

    const { x, y } = this._directionController.handleSnakeLeftZone(this._x, this._y) as Dimension;

    this._x = x;

    this._y = y;

    this.applyDimensions();
  }

  public resetSnake(): void {
    this.resetDimensions();

    this._speed = 3;

    this._directionController.reset();

    this._health.reset();

    this._sprint.enable();

    this._snakeDirectionElm.textContent = "?";
  }

  public resetDimensions(): void {
    this._x = this._board.width / 2;

    this._y = this._board.height / 2;

    this.applyDimensions();
  }

  public updateSpeed(to: number): void {
    this._speed = to;
  }

  public get snakeElm(): HTMLDivElement {
    return this._snakeElm;
  }

  public get maxSpeed(): number {
    return this._maxSpeed;
  }

  public get health(): Health {
    return this._health;
  }

  public get sprint(): Sprint {
    return this._sprint;
  }

  public get directionController(): DirectionController {
    return this._directionController;
  }

  private handleFoodEaten(food: Food, score: Score, wallController: WallController): void {
    wallController.addWall();

    food.eaten();

    score.increase();
  }

  private handleEnergyEaten(energy: Energy): void {
    energy.eaten();

    this._health.increase();
  }

  private handleWallCollision(score: Score): void {
    this._health.decrease();

    score.decrease();
  }

  private applySize(): void {
    this._snakeElm.style.width = `${this._size}px`;

    this._snakeElm.style.height = `${this._size}px`;
  }

  private applyDimensions(): void {
    this._snakeElm.style.left = `${this._x}px`;

    this._snakeElm.style.top = `${this._y}px`;
  }
}

export default Snake;
