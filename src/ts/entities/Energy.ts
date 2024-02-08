import Snake from "../Snake";
import Collider from "../helpers/Collider";
import { EntityOptions } from "../options";
import SavedEatenEnergy from "../stats/SavedEatenEnergy";
import Entity from "./Entity";
import Food from "./Food";
import Wall from "./Wall";

class Energy extends Entity {
  protected _container: HTMLDivElement;

  private _intervalId: number;

  private readonly _savedEatenEnergy: SavedEatenEnergy;

  public constructor(options: EntityOptions) {
    super(options);

    this._container = document.querySelector(".energy-container")!;

    this._intervalId = 0;

    this._savedEatenEnergy = new SavedEatenEnergy();
  }

  public render(): void {
    this.applySize();

    this.applyDimensions();

    this.renderImage();

    this._element.classList.add("energy", "entity");

    this._container.appendChild(this._element);
  }

  public randomDimensions(): void {
    this._x = Math.floor(Math.random() * (this._board.width - 22));

    this._y = Math.floor(Math.random() * (this._board.height - 22));

    this.applyDimensions();
  }

  public eaten(): void {
    this._element.remove();

    this._savedEatenEnergy.addToValue(1);
  }

  public isEnergyWallCollision(walls: Wall[]): void {
    for (let i = 0; i < walls.length; i++) {
      const collider = new Collider({ collider1: this._element, collider2: walls[i].element });

      if (collider.collision()) {
        this.handleFoodWallCollision();

        break;
      }
    }
  }

  public generateEnergy(snake: Snake, food: Food): void {
    this._intervalId = setInterval(() => {
      const shouldGenerateEnergy = food.eatenFood >= 5 && !snake.health.healthHitsMax();

      if (shouldGenerateEnergy) {
        this.randomDimensions();

        this.render();
      }
    }, 10000);
  }

  public get intervalId(): number {
    return this._intervalId;
  }

  public get savedEatenEnergy(): SavedEatenEnergy {
    return this._savedEatenEnergy;
  }

  protected renderImage(): void {
    this._image.src = "./entities/heart.svg";

    this._image.alt = "heart";

    this._element.appendChild(this._image);
  }

  private handleFoodWallCollision(): void {
    this.randomDimensions();
  }
}

export default Energy;
