import StatsProperty from "./StatsProperty";

class SavedPlayedTimes extends StatsProperty {
  protected _valueElm: HTMLParagraphElement;

  protected _value: number;

  public constructor() {
    super();

    this._valueElm = document.querySelector("#stats_played_times")!;

    this._value = JSON.parse(localStorage.getItem("stats-played-times")!) || 0;

    this.updateValueElm();
  }

  public addToValue(value: number): void {
    this._value += value;

    localStorage.setItem("stats-played-times", JSON.stringify(this._value));

    this.updateValueElm();
  }

  public resetValue(): void {
    this._value = 0;

    localStorage.setItem("stats-played-times", JSON.stringify(this._value));

    this.updateValueElm();
  }
}

export default SavedPlayedTimes;
