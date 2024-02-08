import Entity from "./Entity";
import { EntityOptions } from "../options";

class Wall extends Entity {
  protected _container: HTMLDivElement;

  public constructor(options: EntityOptions) {
    super(options);

    this._container = document.querySelector(".walls")!;
  }

  public render(): void {
    this.applySize();

    this.applyDimensions();

    this.renderImage();

    this._element.classList.add("wall", "entity");

    this._container.appendChild(this._element);
  }

  protected renderImage(): void {
    this._image.src = "./entities/wall.svg";

    this._image.alt = "wall";

    this._element.appendChild(this._image);
  }
}

export default Wall;
