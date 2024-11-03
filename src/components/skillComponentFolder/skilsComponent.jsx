import React from "react"
import Iconos from "../iconosComponentFolder/iconos"
import "./styles.css"
const SkilsTarjetasComponent = () => {
  return (
    <>
      <section className='main-article'>
        <div className='skill-text-contenedor'>
          <h2>
            <span>Skills and technologies</span>
          </h2>
        </div>
        <section id='section-skills' className='section-skills'>
          <div className='contenedor-skills'>
            <Iconos />
          </div>
        </section>
      </section>
    </>
  )
}

export default SkilsTarjetasComponent
