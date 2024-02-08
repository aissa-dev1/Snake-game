import { INavigationPage } from "../interfaces";

abstract class NavigationPage implements INavigationPage {
  protected abstract _element: HTMLDivElement;
  protected _pages: NodeListOf<HTMLDivElement>;

  public constructor() {
    this._pages = document.querySelectorAll(".page");
  }

  public abstract applyPage(): void;
}

export default NavigationPage;
