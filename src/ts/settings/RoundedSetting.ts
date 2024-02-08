import ToggleSetting from "./ToggleSetting";

class RoundedSetting extends ToggleSetting {
  protected _name: string;
  protected _state: boolean;

  public constructor() {
    super();

    this._name = "Rounded edges";
    this._state = localStorage.getItem("rounded") ? JSON.parse(localStorage.getItem("rounded")!) : true;

    this.applyRounded();
  }

  protected stateButtonClicked(): void {
    this.toggleState();

    this.saveToLocalStorage();

    this.applyRounded();
  }

  protected override saveToLocalStorage(): void {
    localStorage.setItem("rounded", JSON.stringify(this._state));
  }

  private applyRounded(): void {
    if (this._state) document.body.classList.add("rounded");
    else document.body.classList.remove("rounded");
  }
}

export default RoundedSetting;
