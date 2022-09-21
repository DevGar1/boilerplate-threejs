import { useEffect } from "react";
import { App } from "../3D/app";

function Container3D() {
  useEffect(() => {
    const container = document.getElementById("container");
    new App(container);
  }, []);

  return <div id="container" className=" fixed w-full h-full "></div>;
}

export default Container3D;
