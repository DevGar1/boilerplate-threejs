import { Clock } from "three";

const clock = new Clock();
let _renderer, _scene, _camera, _updatables;

export default class Loop {
  constructor(renderer, scene, camera, updatables) {
    _renderer = renderer;
    _scene = scene;
    _camera = camera;
    _updatables = updatables;
  }
  start() {
    _renderer.setAnimationLoop(() => {
      this.animateActions();
      _renderer.render(_scene, _camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }
  animateActions() {
    const delta = clock.getDelta();
    for (const object of _updatables) {
      object.tick(delta);
    }
  }
}
