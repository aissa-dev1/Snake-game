import StatsProperty from "./StatsProperty";

class SavedEatenFood extends StatsProperty {
  protected _valueElm: HTMLParagraphElement;

  protected _value: number;

  public constructor() {
    super();

    this._valueElm = document.querySelector("#stats_eaten_food")!;

    this._value = JSON.parse(localStorage.getItem("stats-eaten-food")!) || 0;

    this.updateValueElm();
  }

  public addToValue(value: number): void {
    this._value += value;

    localStorage.setItem("stats-eaten-food", JSON.stringify(this._value));

    this.updateValueElm();
  }

  public resetValue(): void {
    this._value = 0;

    localStorage.setItem("stats-eaten-food", JSON.stringify(this._value));

    this.updateValueElm();
  }
}

export default SavedEatenFood;
