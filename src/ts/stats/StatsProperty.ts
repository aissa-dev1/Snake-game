abstract class StatsProperty {
  protected abstract _valueElm: HTMLParagraphElement;

  protected abstract _value: number;

  public abstract addToValue(value: number): void;

  public abstract resetValue(): void;

  public updateValueElm(): void {
    this._valueElm.textContent = `${this._value}`;
  }

  public get value(): number {
    return this._value;
  }
}

export default StatsProperty;
