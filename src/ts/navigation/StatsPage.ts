import NavigationPage from "./NavigationPage";

class StatsPage extends NavigationPage {
  protected _element: HTMLDivElement;

  public constructor() {
    super();

    this._element = document.querySelector(".stats-page")!;
  }

  public applyPage(): void {
    this._pages.forEach((page) => page.classList.add("hidden"));

    this._element.classList.remove("hidden");
  }
}

export default StatsPage;
