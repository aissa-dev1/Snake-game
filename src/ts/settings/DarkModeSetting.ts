import ToggleSetting from "./ToggleSetting";

class DarkModeSetting extends ToggleSetting {
  protected _name: string;
  protected _state: boolean;

  public constructor() {
    super();

    this._name = "Dark mode";
    this._state = localStorage.getItem("dark-mode") ? JSON.parse(localStorage.getItem("dark-mode")!) : false;

    this.applyDarkMode();
  }

  protected stateButtonClicked(): void {
    this.toggleState();

    this.saveToLocalStorage();

    this.applyDarkMode();
  }

  protected override saveToLocalStorage(): void {
    localStorage.setItem("dark-mode", JSON.stringify(this._state));
  }

  private applyDarkMode(): void {
    if (this._state) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }
}

export default DarkModeSetting;
