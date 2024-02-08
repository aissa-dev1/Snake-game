import NavigationPage from "./NavigationPage";

class GameOverPage extends NavigationPage {
  protected _element: HTMLDivElement = document.querySelector(".game-over-page")!;

  applyPage(): void {
    this._pages.forEach((page) => page.classList.add("hidden"));

    this._element.classList.remove("hidden");
  }
}

export default GameOverPage;
