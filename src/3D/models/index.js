import {
  AmbientLight,
  BoxGeometry,
  DoubleSide,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  SphereGeometry,
} from "three";

const geometry = new BoxGeometry(3, 3, 3);
const material = new MeshStandardMaterial({ color: "red" });

const createSphere = () => {
  const geometry = new SphereGeometry(1.5, 100, 100);
  const mesh = new Mesh(geometry, material);
  mesh.position.y = 1.5;

  return mesh;
};

const createCube = (position) => {
  const { x, y, z } = position;
  const mesh = new Mesh(geometry, material);
  mesh.position.set(x, y, z);
  mesh.position.z = 2.5;
  mesh.tick = (delta) => {
    mesh.rotateX(delta * MathUtils.degToRad(30));
    mesh.rotateY(delta * MathUtils.degToRad(30));
    mesh.rotateZ(delta * MathUtils.degToRad(30));
  };

  return mesh;
};

const createGround = () => {
  const geometry = new PlaneGeometry(50, 50);
  const material = new MeshStandardMaterial({ color: "green" });
  const mesh = new Mesh(geometry, material);
  mesh.rotateX(MathUtils.degToRad(90));
  material.side = DoubleSide;

  return mesh;
};

const createLight = () => {
  return new AmbientLight();
};

export { createSphere, createGround, createLight, createCube };
