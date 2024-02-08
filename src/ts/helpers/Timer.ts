class Timer {
  private _minutesElm: HTMLSpanElement;
  private _secondsElm: HTMLSpanElement;

  private _minutes: number;
  private _seconds: number;
  private _intervalId: number;

  public constructor() {
    this._minutesElm = document.querySelector<HTMLSpanElement>("#minutes")!;
    this._secondsElm = document.querySelector<HTMLSpanElement>("#seconds")!;

    this._minutes = 0;
    this._seconds = 0;
    this._intervalId = 0;

    this.updateMinutesElement();
    this.updateSecondsElement();
  }

  public start(): void {
    this._intervalId = setInterval(() => {
      this.increaseSeconds();

      if (this.secondsHitMax()) {
        this.resetSeconds();

        this.increaseMinutes();
      }

      if (this.minutesHitMax()) {
        this.reset();
      }
    }, 1000);
  }

  public reset(): void {
    this.resetMinutes();

    this.resetSeconds();

    clearInterval(this._intervalId);
  }

  public get minutes(): number {
    return this._minutes;
  }

  public get seconds(): number {
    return this._seconds;
  }

  private increaseMinutes(): void {
    this._minutes++;

    this.updateMinutesElement();
  }

  private increaseSeconds(): void {
    this._seconds++;

    this.updateSecondsElement();
  }

  private resetMinutes(): void {
    this._minutes = 0;

    this.updateMinutesElement();
  }

  private resetSeconds(): void {
    this._seconds = 0;

    this.updateSecondsElement();
  }

  private secondsHitMax(): boolean {
    return this._seconds === 60;
  }

  private minutesHitMax(): boolean {
    return this._minutes === 60;
  }

  private updateMinutesElement(): void {
    this._minutesElm.textContent = `${this._minutes < 10 ? "0" : ""}${this._minutes}`;
  }

  private updateSecondsElement(): void {
    this._secondsElm.textContent = `${this._seconds < 10 ? "0" : ""}${this._seconds}`;
  }
}

export default Timer;
