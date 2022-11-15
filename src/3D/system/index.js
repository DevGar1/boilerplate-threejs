import { Color, Object3D, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createCamera, createRenderer, createScene, setSize, Loop } from "./utils";

const origin = new Vector3(0, 0, 0);
export class System {
  #container;
  #camera;
  #renderer;
  #scene;
  #controls;

  constructor(container) {
    this.#container = container;
    this.init();
    this.listeners();
    this.startAnimation();
  }

  init() {
    const { clientWidth, clientHeight } = this.#container;
    this.#scene = createScene();
    this.#camera = createCamera(clientWidth, clientHeight);
    this.#renderer = createRenderer(this.#container, this.#camera);
    this.#controls = new OrbitControls(this.#camera, this.#container);
    this.#controls.update();
    this.#scene.background = new Color("#C6D3E2");
  }

  startAnimation() {
    const loop = new Loop(this.#renderer, this.#scene, this.#camera, []);
    loop.start();
  }

  getSystemProperties() {
    return {
      camera: this.#camera,
      renderer: this.#renderer,
      scene: this.#scene,
    };
  }

  addElementToScene(object3D) {
    if (Array.isArray(object3D)) {
      object3D.forEach((element) => {
        if (element instanceof Object3D) this.addElementToScene(element);
      });
      return;
    }
    if (!(object3D instanceof Object3D)) return;
    this.#scene.add(object3D);
  }

  moveCamera(position) {
    const { x, y, z } = position;
    this.#camera.position.set(x, y, z);
    this.#camera.lookAt(origin);
  }

  listeners() {
    window.addEventListener("resize", () => {
      const { clientWidth, clientHeight } = this.#container;
      setSize(this.#renderer, this.#camera, clientWidth, clientHeight);
    });
  }
}
