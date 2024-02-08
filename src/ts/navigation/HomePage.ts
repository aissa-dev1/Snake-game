import NavigationPage from "./NavigationPage";

class HomePage extends NavigationPage {
  protected _element: HTMLDivElement;

  public constructor() {
    super();

    this._element = document.querySelector(".home-page")!;
  }

  public applyPage(): void {
    this._pages.forEach((page) => page.classList.add("hidden"));

    this._element.classList.remove("hidden");
  }
}

export default HomePage;
