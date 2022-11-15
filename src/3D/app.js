import { createGround, createLight, createSphere } from "./models";
import { System } from "./system";

export class App {
  #system;
  constructor(container) {
    this.#system = new System(container);
    this.getInitModels();
    this.init();
  }

  init() {
    const position = { x: 0, y: 5, z: 50 };
    this.#system.moveCamera(position);
  }

  getInitModels() {
    this.#system.addElementToScene(createLight());
    this.#system.addElementToScene([createGround(), createSphere()]);
  }
}
