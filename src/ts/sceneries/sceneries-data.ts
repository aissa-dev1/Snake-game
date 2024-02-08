import { SceneryId, SceneryOptions } from "./types";

const sceneriesData: Record<SceneryId, SceneryOptions> = {
  default: {
    id: "Default",
    sceneryCode: "default-scenery",
  },
  nature: {
    id: "Nature",
    sceneryCode: "nature-scenery",
  },
  "smooth-nature": {
    id: "Smooth nature",
    sceneryCode: "smooth-nature-scenery",
  },
  space: {
    id: "Space",
    sceneryCode: "space-scenery",
  },
  winter: {
    id: "Winter",
    sceneryCode: "winter-scenery",
  },
  primal: {
    id: "Primal",
    sceneryCode: "primal-scenery",
  },
};

export default sceneriesData;
