import Entity from "./Entity";
import { EntityOptions } from "../options";
import Wall from "./Wall";
import Collider from "../helpers/Collider";
import SavedEatenFood from "../stats/SavedEatenFood";

class Food extends Entity {
  protected _container: HTMLDivElement;
  private _eatenFoodElm: HTMLSpanElement;

  private _eatenFood: number;
  private readonly _foods: Array<string>;
  private _randomFood: string;

  private readonly _savedEatenFood: SavedEatenFood;

  public constructor(options: EntityOptions) {
    super(options);

    this._container = document.querySelector(".food-container")!;
    this._eatenFoodElm = document.querySelector("#eaten_food")!;

    this._eatenFood = 0;
    this._foods = [
      "apple-red",
      "apple-yellow",
      "avocado",
      "eggplant",
      "fresh",
      "grape-blue",
      "grape-red",
      "grape-yellow",
      "guava",
      "orange",
      "pinapple",
      "strawberry",
    ];
    this._randomFood = this._foods[Math.floor(Math.random() * this._foods.length)];

    this._savedEatenFood = new SavedEatenFood();

    this.updateEatenFoodElement();
  }

  public render(): void {
    this.applySize();

    this.applyDimensions();

    this.renderImage();

    this._element.classList.add("food", "entity");

    this._container.appendChild(this._element);
  }

  public randomDimensions(): void {
    this._x = Math.floor(Math.random() * (this._board.width - 22));

    this._y = Math.floor(Math.random() * (this._board.height - 22));

    this.applyDimensions();
  }

  public getRandomFoodImage(): void {
    this._randomFood = this._foods[Math.floor(Math.random() * this._foods.length)];

    this._image.src = `./food/${this._randomFood}.svg`;

    this._image.alt = `${this._randomFood}`;
  }

  public eaten(): void {
    this._eatenFood++;

    this.updateEatenFoodElement();

    this._savedEatenFood.addToValue(1);

    this.randomDimensions();

    this.getRandomFoodImage();
  }

  public reset(): void {
    this._eatenFood = 0;

    this.randomDimensions();

    this.updateEatenFoodElement();
  }

  public isFoodWallCollision(walls: Wall[]): void {
    for (let i = 0; i < walls.length; i++) {
      const collider = new Collider({ collider1: this._element, collider2: walls[i].element });

      if (collider.collision()) {
        this.handleFoodWallCollision();

        break;
      }
    }
  }

  public resetDimensions(): void {
    this._x = Math.floor(Math.random() * (this._board.width - 22));

    this._y = Math.floor(Math.random() * (this._board.height - 22));

    this.applyDimensions();
  }

  public get eatenFood(): number {
    return this._eatenFood;
  }

  public get savedEatenFood(): SavedEatenFood {
    return this._savedEatenFood;
  }

  private handleFoodWallCollision(): void {
    this.randomDimensions();
  }

  private updateEatenFoodElement(): void {
    this._eatenFoodElm.textContent = `${this._eatenFood}`;
  }

  protected renderImage(): void {
    this.getRandomFoodImage();

    this._element.appendChild(this._image);
  }
}

export default Food;
