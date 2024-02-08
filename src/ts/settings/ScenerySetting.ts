import NavigationController from "../controllers/NavigationController";
import SceneryPage from "../navigation/SceneryPage";
import NavigateSetting from "./NavigateSetting";

class ScenerySetting extends NavigateSetting {
  protected _name: string;
  protected _buttonContent: string;

  public constructor(navigationController: NavigationController) {
    super(navigationController);

    this._name = "Scenery";
    this._buttonContent = "Change scenery";
  }

  protected navigateButtonClicked(): void {
    this._navigationController.changePage(new SceneryPage());
  }
}

export default ScenerySetting;
