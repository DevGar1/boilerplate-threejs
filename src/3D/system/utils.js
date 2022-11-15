import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Loop from "./Loop";

const createScene = () => {
  return new Scene();
};

const createCamera = (width, height) => {
  const camera = new PerspectiveCamera(55, width / height, 0.1, 300);
  camera.position.z = 10;

  return camera;
};

const setSize = (renderer, camera, width, height) => {
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
  camera.updateMatrixWorld();
};

const createRenderer = (container, camera) => {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const renderer = new WebGLRenderer();
  setSize(renderer, camera, width, height);
  container.append(renderer.domElement);

  return renderer;
};

const createContols = (camera, element) => {
  const controls = new OrbitControls(camera, element);
  controls.tick = () => controls.update();

  return controls;
};

const initSystem = (container) => {
  const { width, height } = container;
  const camera = createCamera(width, height);
  const scene = createScene();
  const renderer = createRenderer(container, camera);
  return { camera, scene, renderer };
};

export { createScene, createCamera, createRenderer, setSize, Loop, createContols, initSystem };
