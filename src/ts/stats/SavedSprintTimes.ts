import StatsProperty from "./StatsProperty";

class SavedSprintTimes extends StatsProperty {
  protected _valueElm: HTMLParagraphElement;

  protected _value: number;

  public constructor() {
    super();

    this._valueElm = document.querySelector("#stats_sprint_times")!;

    this._value = JSON.parse(localStorage.getItem("stats-sprint-times")!) || 0;

    this.updateValueElm();
  }

  public addToValue(value: number): void {
    this._value += value;

    localStorage.setItem("stats-sprint-times", JSON.stringify(this._value));

    this.updateValueElm();
  }

  public resetValue(): void {
    this._value = 0;

    localStorage.setItem("stats-sprint-times", JSON.stringify(this._value));

    this.updateValueElm();
  }
}

export default SavedSprintTimes;
