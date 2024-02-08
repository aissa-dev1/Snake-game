import Snake from "../Snake";
import { SprintOptions } from "../options";
import SavedSprintTimes from "../stats/SavedSprintTimes";
import { DirectionTag } from "../types";

class Sprint {
  private _sprintElm: HTMLSpanElement;

  private _enabled: boolean;
  private readonly _cycle: number;

  private readonly _savedSprintTimes: SavedSprintTimes;

  public constructor(options: SprintOptions) {
    this._sprintElm = options.sprintElm;

    this._enabled = true;
    this._cycle = parseInt(`${options.cycle}000`);

    this._savedSprintTimes = new SavedSprintTimes();

    this.updateSprintElement();
  }

  public enable(): void {
    this._enabled = true;

    this.updateSprintElement();
  }

  public disable(): void {
    this._enabled = false;

    this.updateSprintElement();
  }

  public checkToApplySprint(snake: Snake, tag: DirectionTag): void {
    if (snake.directionController.directionNull()) return;

    if (snake.directionController.lastDirectionTag === tag) this.applySprint(snake);
  }

  public applySprint(snake: Snake): void {
    if (!this._enabled) return;

    snake.updateSpeed(snake.maxSpeed);

    this._savedSprintTimes.addToValue(1);

    this.disable();

    setTimeout(() => {
      snake.updateSpeed(3);
    }, this._cycle / 2);

    setTimeout(() => {
      this.enable();
    }, this._cycle);
  }

  public get enabled(): boolean {
    return this._enabled;
  }

  public get cycle(): number {
    return this._cycle;
  }

  public get savedSprintTimes(): SavedSprintTimes {
    return this._savedSprintTimes;
  }

  private updateSprintElement(): void {
    this._sprintElm.textContent = this._enabled ? "Ready" : "Not ready";
  }
}

export default Sprint;
