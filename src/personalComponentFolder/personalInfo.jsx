import React from "react";
import "./styles.css";
import { useContext } from "react";
import Im from "../assets/images/AntonyFromPerfil.webp";
import { MyContext} from "../contexts/mainContext";

const PersonalInfo = () => {
  const { setInterruptor, interruptor } = useContext(MyContext);

  return (
    <div className="personal-info-contenedor">
      <div className="personal-info-image">
        <img src={Im} alt="Antony Leon" />
      </div>
      <div className="personal-info-text">
        <div>
          <h2>Antony Leonel Acosta Granados</h2>
          <h4>Perfil</h4>
          <p>
            Me describo como una persona amable, responsable y capaz. Me encanta
            ser profesional con mi trabajo, aprender de mis errores y sobre
            todo, dar la mejor experiencia al usuario. Me encanta la
            optimización del tiempo ya que lo aplico en mi vida diaria y por
            supuesto, al código.
          </p>
        </div>
        <div className="profile">
          <p>
            <strong>Edad:</strong> 23 <br />
            <strong>País:</strong> Honduras <br />
            <strong>Departamento:</strong> La Paz, La Paz <br />
            <strong>Pasatiempos:</strong> Deporte, lectura y programación
          </p>
        </div>
        <div className="personal-info-buttons">
          <div>
            <a className="btn-contacto" href="#footer">
              Ir a contacto
            </a>
          </div>
          <div>
            <a
              onClick={() => {
                setInterruptor(!interruptor);
              }}
              className="btn-cerrar"
            >
              Cerrar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
