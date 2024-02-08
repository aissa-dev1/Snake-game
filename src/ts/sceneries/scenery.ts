import { IScenery, SceneryOptions } from "./types";

class Scenery implements IScenery {
  private _container: HTMLDivElement;

  constructor(options: SceneryOptions) {
    this._container = this.draw(options);
  }

  private draw(options: SceneryOptions): HTMLDivElement {
    const container = document.createElement("div");

    container.appendChild(document.createTextNode(options.id));

    container.classList.add("scenery-container", "active");

    container.setAttribute("id", options.id);

    container.setAttribute("scenery-code", options.sceneryCode);

    return container;
  }

  get container(): HTMLDivElement {
    return this._container;
  }

  get id(): string {
    return this._container.getAttribute("id") as string;
  }

  get sceneryCode(): string {
    return this._container.getAttribute("scenery-code") as string;
  }
}

export default Scenery;
