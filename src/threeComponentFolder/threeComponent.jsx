import React from "react";
import "./styles.css";
import Carousel from "../carruselComponentFolder/carrusel";
const ThreeComponent = () => {
  return (
    <section id="blender" className="section-three-escena">
      <div className="section-three-escena-texto">
        <div>
          <h1>Diseño y modelado 3D</h1>
          <p>
          Echa un vistazo a estos modelos hechos en Blender e importados con Three.js.
          </p>
        </div>
        <div className="modelos-3d-page-boton">
          <a target="_blank" href="https://jacktony12.github.io/3d_AntonyLeon/">
            Ver modelos 3D
          </a>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default ThreeComponent;
