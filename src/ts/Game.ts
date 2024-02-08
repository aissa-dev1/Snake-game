import Snake from "./Snake";
import { GameOptions } from "./options";
import Timer from "./helpers/Timer";
import Score from "./snake-features/Score";
import Energy from "./entities/Energy";
import WallController from "./controllers/WallController";
import Food from "./entities/Food";
import Board from "./Board";
import Wall from "./entities/Wall";
import HighScore from "./snake-features/HighScore";
import Information from "./helpers/Information";
import Settings from "./settings/Settings";
import NavigationController from "./controllers/NavigationController";
import GameOverPage from "./navigation/game-over-page";
import SavedPlayedTimes from "./stats/SavedPlayedTimes";

class Game {
  private _gameStarted: boolean;
  private _gameOver: boolean;
  private _animationFrameId: number;
  private readonly _walls: Array<Wall>;

  private _board: Board;
  private _snake: Snake;
  private _food: Food;
  private _highScore: HighScore;
  private _score: Score;
  private _energy: Energy;
  private _wallController: WallController;
  private _timer: Timer;
  private _navigationController: NavigationController;
  private _savedPlayedTimes: SavedPlayedTimes;
  private _information: Information;
  private _settings: Settings;

  public constructor(options: GameOptions) {
    this._gameStarted = false;
    this._gameOver = false;
    this._animationFrameId = 0;
    this._walls = [];

    this._board = options.board;
    this._snake = new Snake({ size: 25, board: this._board });
    this._food = new Food({ size: 30, board: this._board });
    this._highScore = new HighScore();
    this._score = new Score({ highScore: this._highScore });
    this._energy = new Energy({ size: 25, board: this._board });
    this._wallController = new WallController({
      walls: this._walls,
      board: this._board,
    });
    this._timer = new Timer();
    this._navigationController = options.navigationController;
    this._savedPlayedTimes = new SavedPlayedTimes();
    this._information = new Information();
    this._settings = new Settings(options.navigationController);

    this._information.updateAll();
    this._settings.renderAll();
  }

  public startGame(): void {
    if (this._gameStarted) return;

    this._gameStarted = true;

    this._gameOver = false;

    this._timer.start();

    this._food.render();

    this._energy.generateEnergy(this._snake, this._food);

    this._savedPlayedTimes.addToValue(1);

    this.animate();
  }

  public resetGame(): void {
    this._gameStarted = false;

    this._snake.resetSnake();

    this._food.reset();

    this._wallController.resetWalls();

    this._score.reset();

    this._energy.element.remove();

    this._timer.reset();

    cancelAnimationFrame(this._animationFrameId);

    clearInterval(this._energy.intervalId);
  }

  public resetGameStats(): void {
    this._energy.savedEatenEnergy.resetValue();

    this._food.savedEatenFood.resetValue();

    this._snake.sprint.savedSprintTimes.resetValue();

    this._highScore.resetSavedValue();

    this._savedPlayedTimes.resetValue();
  }

  public adaptiveLayoutHandler(e: Event): void {
    this._board.handleWidthMeasurement(e);

    this._snake.resetDimensions();

    this._food.resetDimensions();
  }

  public handleGameKeyDown(e: KeyboardEvent): void {
    if (!this._gameStarted) return;

    switch (e.key) {
      case "ArrowLeft":
        this._snake.moveLeft();
        break;

      case "ArrowUp":
        this._snake.moveUp();
        break;
      case "ArrowRight":
        this._snake.moveRight();
        break;

      case "ArrowDown":
        this._snake.moveDown();
        break;

      case " ":
        this._snake.sprint.applySprint(this._snake);
        break;
    }
  }

  public moveSnakeLeft(): void {
    this._snake.moveLeft();
  }

  public moveSnakeUp(): void {
    this._snake.moveUp();
  }

  public moveSnakeRight(): void {
    this._snake.moveRight();
  }

  public moveSnakeDown(): void {
    this._snake.moveDown();
  }

  public get gameOver(): boolean {
    return this._gameOver;
  }

  private endGame(): void {
    this.setupGameEnding();

    if (!this._gameOver) return;

    this.resetGame();

    this._navigationController.changePage(new GameOverPage());
  }

  private setupGameEnding(): void {
    this._gameOver = this._snake.health.outOfHealth();
  }

  private animate(): void {
    if (this._gameOver) return;

    this._snake.handleSnakeDirection();

    this._snake.isFoodEaten(this._food, this._score, this._wallController);

    this._snake.isEnergyEaten(this._energy);

    this._snake.isWallCollision(this._score, this._wallController, this._wallController.walls);

    this._snake.isSnakeLeftZone();

    this._food.isFoodWallCollision(this._walls);

    this._energy.isEnergyWallCollision(this._walls);

    this.endGame();

    this._animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }
}

export default Game;
