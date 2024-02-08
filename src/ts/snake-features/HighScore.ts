class HighScore {
  private _highScoreElm: HTMLSpanElement;
  private _statsHighScoreElm: HTMLParagraphElement;

  private _value: number;

  public constructor() {
    this._highScoreElm = document.querySelector("#high_score")!;
    this._statsHighScoreElm = document.querySelector("#stats_high_score")!;

    this._value = JSON.parse(localStorage.getItem("high-score")!) || 0;

    this.updateHighScoreElements();
  }

  public equalize(value: number): void {
    if (value < this._value) return;

    this._value = value;

    localStorage.setItem("high-score", JSON.stringify(this._value));

    this.updateHighScoreElements();
  }

  public resetSavedValue(): void {
    this._value = 0;

    localStorage.setItem("high-score", JSON.stringify(this._value));

    this.updateHighScoreElements();
  }

  public get value(): number {
    return this._value;
  }

  private updateHighScoreElements(): void {
    this._highScoreElm.textContent = `${this._value}`;

    this._statsHighScoreElm.textContent = `${this._value}`;
  }
}

export default HighScore;
