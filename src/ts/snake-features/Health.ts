import { HealthOptions } from "../options";

class Health {
  private _healthElm: HTMLSpanElement;

  private _value: number;
  private readonly _defaultValue: number;
  private readonly _maxValue: number;

  public constructor(options: HealthOptions) {
    this._healthElm = options.healthElm;

    this._value = options.value;
    this._defaultValue = this._value;
    this._maxValue = 15;

    this.updateHealthElement();
  }

  public increase(by?: number): void {
    if (this.healthHitsMax()) return;

    if (this.changeByNotFound(by)) {
      this._value++;

      this.updateHealthElement();

      return;
    }

    this._value += by as number;

    this.updateHealthElement();
  }

  public decrease(by?: number): void {
    if (this.changeByNotFound(by)) {
      this._value--;

      this.updateHealthElement();

      return;
    }

    this._value -= by as number;

    this.updateHealthElement();
  }

  public reset(): void {
    this._value = this._defaultValue;

    this.updateHealthElement();
  }

  public outOfHealth(): boolean {
    return this._value <= 0;
  }

  public healthHitsMax(): boolean {
    return this._value >= this._maxValue;
  }

  public get value(): number {
    return this._value;
  }

  private changeByNotFound(by?: number): boolean {
    return typeof by === "undefined" || by === 0;
  }

  private updateHealthElement(): void {
    this._healthElm.textContent = `${this._value}`;
  }
}

export default Health;
