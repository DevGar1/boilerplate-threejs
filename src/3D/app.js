import {
  createCamera,
  createContols,
  createGround,
  createLight,
  createRenderer,
  createScene,
  createSphere,
  Loop,
  setSize,
} from "./system";

let _camera, _renderer, _scene, _container, _updatables;
export class App {
  constructor(container) {
    const width = container.clientWidth;
    const height = container.clientHeight;
    _container = container;
    _camera = createCamera(width, height);
    _scene = createScene();
    const controls = createContols(_camera, container);
    const ligth = createLight();
    _scene.add(createSphere());
    _scene.add(ligth);
    _scene.add(createGround());
    _renderer = createRenderer(container, _camera);
    _updatables = [controls];
    const loop = new Loop(_renderer, _scene, _camera, _updatables);
    loop.start();
    this.listeners();
  }

  listeners() {
    window.addEventListener("resize", () => {
      const width = _container.clientWidth;
      const height = _container.clientHeight;
      setSize(_renderer, _camera, width, height);
    });
  }
}
