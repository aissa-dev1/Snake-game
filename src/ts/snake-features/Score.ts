import HighScore from "./HighScore";
import { ScoreOptions } from "../options";

class Score {
  private _scoreElm: HTMLSpanElement;

  private _value: number;

  private readonly _highScore: HighScore;

  public constructor(options: ScoreOptions) {
    this._scoreElm = document.querySelector("#score")!;

    this._value = 0;

    this._highScore = options.highScore;

    this.updateScoreElement();
  }

  public increase(): void {
    const increaseBy = Math.floor(Math.random() * 3) + 1;

    this._value += increaseBy;

    this._highScore.equalize(this._value);

    this.updateScoreElement();
  }

  public decrease(): void {
    if (this._value <= 0) return;

    this._value--;

    this.updateScoreElement();
  }

  public reset(): void {
    this._value = 0;

    this.updateScoreElement();
  }

  public get value(): number {
    return this._value;
  }

  private updateScoreElement(): void {
    this._scoreElm.textContent = `${this._value}`;
  }
}

export default Score;
