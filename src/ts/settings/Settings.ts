import NavigationController from "../controllers/NavigationController";
import SceneriesController from "../sceneries/sceneries-controller";
import sceneriesData from "../sceneries/sceneries-data";
import Scenery from "../sceneries/scenery";
import { IScenery } from "../sceneries/types";
import DarkModeSetting from "./DarkModeSetting";
import RoundedSetting from "./RoundedSetting";
import ScenerySetting from "./ScenerySetting";

class Settings {
  private _scenerySetting: ScenerySetting;
  private _darkModeSetting = new DarkModeSetting();
  private _roundedSetting = new RoundedSetting();
  private _sceneriesController = new SceneriesController();

  constructor(navigationController: NavigationController) {
    this._scenerySetting = new ScenerySetting(navigationController);

    Object.values(sceneriesData).forEach((options) => {
      this._sceneriesController.addScenery(new Scenery(options));
    });

    this._sceneriesController.sceneries.forEach((s) => {
      s.container.classList.remove("active");

      this.selectSavedScenery(s);
    });
  }

  renderAll() {
    this._darkModeSetting.render();

    this._roundedSetting.render();

    this._scenerySetting.render();
  }

  private selectSavedScenery(s: IScenery) {
    if (localStorage.getItem("scenery-code")) {
      if (s.sceneryCode !== localStorage.getItem("scenery-code")) return;

      s.container.classList.add("active");
      return;
    }

    if (s.sceneryCode !== this._sceneriesController.currentScenery.sceneryCode) return;
    s.container.classList.add("active");
  }
}

export default Settings;
