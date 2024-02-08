import Game from "./ts/Game";
import Board from "./ts/Board";
import NavigationController from "./ts/controllers/NavigationController";
import GamePage from "./ts/navigation/GamePage";
import HomePage from "./ts/navigation/HomePage";
import StatsPage from "./ts/navigation/StatsPage";
import HowToPlayPage from "./ts/navigation/HowToPlayPage";
import SettingsPage from "./ts/navigation/SettingsPage";

const gamePageBtns = document.querySelectorAll(".game-page-btn");
const homePageBtns = document.querySelectorAll(".home-page-btn");
const settingsPageBtns = document.querySelectorAll(".settings-page-btn");
const statsPageBtns = document.querySelectorAll(".stats-page-btn")!;
const howToPlayBtn = document.querySelector("#how_to_play_btn")!;
const snakeUpBtn = document.querySelector("#snake_up_btn")!;
const snakeRightBtn = document.querySelector("#snake_right_btn")!;
const snakeLeftBtn = document.querySelector("#snake_left_btn")!;
const snakeDownBtn = document.querySelector("#snake_down_btn")!;
const gameStatsResetBtn = document.querySelector("#game_stats_reset_btn")!;

const navigationController = new NavigationController();

const board = new Board({ width: 750, height: 365, edges: true });

const game = new Game({ board, navigationController });

window.addEventListener("load", (e: Event) => {
  game.adaptiveLayoutHandler(e);
});

window.addEventListener("resize", (e: Event) => {
  board.handleWidthMeasurement(e);
});

document.addEventListener("keydown", (e) => {
  game.handleGameKeyDown(e);
});

gamePageBtns.forEach((gamePageBtn) => {
  gamePageBtn.addEventListener("click", () => {
    navigationController.changePage(new GamePage());

    game.startGame();
  });
});

homePageBtns.forEach((homePageBtn) => {
  homePageBtn.addEventListener("click", () => {
    navigationController.changePage(new HomePage());

    game.resetGame();
  });
});

settingsPageBtns.forEach((settingsPageBtn) => {
  settingsPageBtn.addEventListener("click", () => {
    navigationController.changePage(new SettingsPage());

    game.resetGame();
  });
});

statsPageBtns.forEach((statsPageBtn) => {
  statsPageBtn.addEventListener("click", () => {
    navigationController.changePage(new StatsPage());
  });
});

howToPlayBtn.addEventListener("click", () => {
  navigationController.changePage(new HowToPlayPage());
});

snakeUpBtn.addEventListener("click", () => {
  game.moveSnakeUp();
});

snakeRightBtn.addEventListener("click", () => {
  game.moveSnakeRight();
});

snakeLeftBtn.addEventListener("click", () => {
  game.moveSnakeLeft();
});

snakeDownBtn.addEventListener("click", () => {
  game.moveSnakeDown();
});

gameStatsResetBtn.addEventListener("click", () => {
  game.resetGameStats();
});
