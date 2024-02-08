abstract class ToggleSetting {
  protected _nameHeading: HTMLHeadingElement;
  protected _stateButton: HTMLButtonElement;
  private _settingsContainer: HTMLDivElement;

  protected abstract readonly _name: string;
  protected abstract _state: boolean;

  public constructor() {
    this._nameHeading = document.createElement("h3");
    this._stateButton = document.createElement("button");
    this._settingsContainer = document.querySelector(".settings-container")!;

    this._stateButton.addEventListener("click", () => this.stateButtonClicked());
  }

  public render(): void {
    this.handleNameHeading();

    this.handleStateButton();

    this.updateStateButton();

    this.createSetting();
  }

  protected toggleState(): void {
    this._state = !this._state;

    this.updateStateButton();
  }

  protected abstract stateButtonClicked(): void;

  protected saveToLocalStorage(): void {}

  private createSetting(): void {
    const setting = document.createElement("div");

    setting.classList.add("setting");

    setting.append(this._nameHeading, this._stateButton);

    this._settingsContainer.appendChild(setting);
  }

  private handleNameHeading(): void {
    this._nameHeading.textContent = this._name;
  }

  private handleStateButton(): void {
    this._stateButton.classList.add("styled-btn");
  }

  private updateStateButton(): void {
    const stateButtonContent = this._state ? "on" : "off";

    this._stateButton.classList.remove("on", "off");
    this._stateButton.classList.add(stateButtonContent);

    this._stateButton.textContent = stateButtonContent;
  }
}

export default ToggleSetting;
