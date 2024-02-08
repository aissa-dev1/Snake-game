export interface Dimension {
  x: number;
  y: number;
}

export interface IEntity {
  render(): void;
}

export interface IDirection {
  applyDirection(x: number, y: number, speed: number): Dimension;
  snakeLeftZone(x: number, y: number): Dimension;
  removeElementClasses(): void;
}

export interface INavigationPage {
  applyPage(): void;
}
