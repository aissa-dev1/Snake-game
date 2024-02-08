import Board from "./Board";
import HighScore from "./snake-features/HighScore";
import Wall from "./entities/Wall";
import NavigationController from "./controllers/NavigationController";

export type SnakeOptions = {
  size: number;
  board: Board;
};

export type ColliderOptions = {
  collider1: HTMLDivElement;
  collider2: HTMLDivElement;
};

export type EntityOptions = {
  size: number;
  board: Board;
};

export type GameOptions = {
  board: Board;
  navigationController: NavigationController;
};

export type HealthOptions = {
  healthElm: HTMLSpanElement;
  value: number;
};

export type ScoreOptions = {
  highScore: HighScore;
};

export type SprintOptions = {
  sprintElm: HTMLSpanElement;
  cycle: number;
};

export type WallControllerOptions = {
  walls: Wall[];
  board: Board;
};

export type DirectionTopOptions = {
  element: HTMLDivElement;
  board: Board;
};

export type DirectionLeftOptions = DirectionTopOptions;

export type BoardOptions = {
  width: number;
  height: number;
  edges: boolean;
};

export type SceneryOptions = {
  snakeColor: string;
  boardColor: string;
  boardEdgesColor: string;
};
