import React from "react"
import "./styles.css"
import Services from "./services"
const ServicesComponent = () => {
  return (
    <section className='services-section'>
      <h2 className='services-section-text-slogan'>
        Transformando ideas en experiencias digitales
      </h2>
      <h3>Servicios</h3>
      <div className='services-contenedor'>
        <Services />
      </div>
    </section>
  )
}

export default ServicesComponent
