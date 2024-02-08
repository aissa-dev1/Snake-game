import { INavigationPage } from "../interfaces";
import HomePage from "../navigation/HomePage";

class NavigationController {
  private _page: INavigationPage = new HomePage();

  public constructor() {
    this._page.applyPage();
  }

  public changePage(page: INavigationPage): void {
    this._page = page;

    this._page.applyPage();
  }
}

export default NavigationController;
