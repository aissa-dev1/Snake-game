import NavigationController from "../controllers/NavigationController";

abstract class NavigateSetting {
  protected _nameHeading: HTMLHeadingElement;
  protected _navigateButton: HTMLButtonElement;
  private _settingsContainer: HTMLDivElement;

  protected abstract readonly _name: string;
  protected abstract readonly _buttonContent: string;

  protected _navigationController: NavigationController;

  public constructor(navigationController: NavigationController) {
    this._nameHeading = document.createElement("h3");
    this._navigateButton = document.createElement("button");
    this._settingsContainer = document.querySelector(".settings-container")!;

    this._navigationController = navigationController;

    this._navigateButton.addEventListener("click", () => this.navigateButtonClicked());
  }

  public render(): void {
    this.handleNameHeading();

    this.handleNavigateButton();

    this.createSetting();
  }

  protected abstract navigateButtonClicked(): void;

  private createSetting(): void {
    const setting = document.createElement("div");

    setting.classList.add("setting");

    setting.append(this._nameHeading, this._navigateButton);

    this._settingsContainer.appendChild(setting);
  }

  private handleNameHeading(): void {
    this._nameHeading.textContent = this._name;
  }

  private handleNavigateButton(): void {
    this._navigateButton.textContent = this._buttonContent;

    this._navigateButton.classList.add("styled-btn", "on");
  }
}

export default NavigateSetting;
