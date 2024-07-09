import React from "react"
import "./styles.css"
import digital from "../assets/images/digitalExperience.webp"
import { BsCheck } from "react-icons/bs"

const VideoComponent = () => {
  return (
    <section className='video-section'>
      <h2 className='video-section-text-slogan'>
        Transformando ideas en experiencias digitales
      </h2>
      <div className='ul-digital-contenedor'>
        <div className='ul-text-list-contenedor'>
          <ul className='ul-text-list'>
            <li>
              <BsCheck /> Soluciones confiables
            </li>
            <li>
              <BsCheck /> Código limpio y bien estructurado
            </li>
            <li>
              <BsCheck /> Optimización y rendimiento
            </li>
            <li>
              <BsCheck /> Diseño responsive amigable
            </li>
          </ul>
        </div>
        <div className='digital-experience-contenedor'>
          <img src={digital} alt='DigitalExperience' />
        </div>
      </div>
    </section>
  )
}

export default VideoComponent
