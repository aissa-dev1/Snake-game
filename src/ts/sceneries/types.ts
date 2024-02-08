export interface IScenery {
  get container(): HTMLDivElement;
  get id(): string;
  get sceneryCode(): string;
}

export interface SceneryOptions {
  id: string;
  sceneryCode: string;
}

export type SceneryId = "default" | "nature" | "smooth-nature" | "space" | "winter" | "primal";
