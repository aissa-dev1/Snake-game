import NavigationPage from "./NavigationPage";

class HowToPlayPage extends NavigationPage {
  protected _element: HTMLDivElement;

  public constructor() {
    super();

    this._element = document.querySelector(".how-to-play-page")!;
  }

  public applyPage(): void {
    this._pages.forEach((page) => page.classList.add("hidden"));

    this._element.classList.remove("hidden");
  }
}

export default HowToPlayPage;
