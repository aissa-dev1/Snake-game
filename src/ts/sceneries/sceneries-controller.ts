import sceneriesData from "./sceneries-data";
import Scenery from "./scenery";
import { IScenery } from "./types";

class SceneriesController {
  private _currentScenery: IScenery = new Scenery(sceneriesData.default);
  private _sceneries = new Array<IScenery>();
  private _sceneriesContainer = document.querySelector(".sceneries-container")!;

  constructor() {
    if (localStorage.getItem("scenery-code")) document.body.classList.add(localStorage.getItem("scenery-code")!);
    else document.body.classList.add(this._currentScenery.sceneryCode);
  }

  addScenery(scenery: IScenery) {
    this._sceneries.push(scenery);

    scenery.container.addEventListener("click", this.onScenerySelection);

    this._sceneriesContainer.appendChild(scenery.container);
  }

  private selectScenery(scenery: IScenery) {
    document.body.classList.remove(this._currentScenery.sceneryCode, localStorage.getItem("scenery-code")!);

    this._currentScenery = scenery;

    this._sceneries.forEach((s) => s.container.classList.remove("active"));

    this._currentScenery.container.classList.add("active");

    localStorage.setItem("scenery-code", this._currentScenery.sceneryCode);

    document.body.classList.add(scenery.sceneryCode);
  }

  private onScenerySelection = (e: MouseEvent) => {
    const target = e.target as HTMLDivElement;

    const scenery = this._sceneries.find((s) => s.id === target.getAttribute("id"));

    if (typeof scenery === "undefined") return;

    this.selectScenery(scenery);
  };

  get currentScenery(): IScenery {
    return this._currentScenery;
  }

  get sceneries(): Array<IScenery> {
    return this._sceneries;
  }
}

export default SceneriesController;
