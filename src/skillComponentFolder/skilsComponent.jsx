import React from "react"
import Iconos from "../iconosComponentFolder/iconos"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { BsArrowDownCircle } from "react-icons/bs"
import "./styles.css"
const SkilsTarjetasComponent = () => {
  return (
    <>
      <section style={{ position: "relative" }}>
        <div className='contenedor-flecha-bajar'>
          <a href='#section-skills'>
            <BsArrowDownCircle className='flecha-bajar' />
          </a>
        </div>
      </section>
      <section>
        <div className='skill-text-contenedor'>
          <h2>Habilidades y tecnologias</h2>
        </div>
      </section>
      <section className='main-article'>
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
