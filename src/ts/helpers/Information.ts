class Information {
  private _nameElm: HTMLHeadingElement;
  private _devElm: HTMLSpanElement;
  private _versionElm: HTMLSpanElement;

  private readonly _name: string;
  private readonly _developer: string;
  private readonly _version: number;

  public constructor() {
    this._nameElm = document.querySelector("#game_name")!;
    this._devElm = document.querySelector("#game_developer")!;
    this._versionElm = document.querySelector("#game_version")!;

    this._name = "Snake game";
    this._developer = "Aissa Bedr";
    this._version = 2;
  }

  public updateAll(): void {
    this.updateNameElm();

    this.updateDeveloperElm();

    this.updateVersionElm();
  }

  private updateNameElm(): void {
    this._nameElm.textContent = this._name;
  }

  private updateDeveloperElm(): void {
    this._devElm.textContent = this._developer;
  }

  private updateVersionElm(): void {
    this._versionElm.textContent = `${this._version}`;
  }
}

export default Information;
