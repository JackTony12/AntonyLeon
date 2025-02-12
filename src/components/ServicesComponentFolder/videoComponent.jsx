import React from "react"
import "./styles.css"
import Services from "./services"
import services from "./servicesIcons"
const ServicesComponent = () => {
  return (
    <section className='services-section'>
      <h2 className='services-section-text-slogan h-title'>
        Transformando ideas en experiencias digitales
      </h2>
      <div className='services-contenedor'>
        {/* <Services /> */}
        <div className='grid-container'>
          <div className='div1'>
            <span className='number'>1</span>
            <span>{services[0].svg}</span>
            <h4>{services[0].title}</h4>
            <p>{services[0].description}</p>
          </div>
          <div className='div2'>
            <span className='number'>2</span>

            <span>{services[1].svg}</span>
            <h4>{services[1].title}</h4>
            <p>{services[1].description}</p>
          </div>
          <div className='div3'>
            <span className='number'>3</span>

            <span>{services[2].svg}</span>
            <h4>{services[2].title}</h4>
            <p>{services[2].description}</p>
          </div>
          <div className='div4'>
            <span className='number'>4</span>

            <span>{services[3].svg}</span>
            <h4>{services[3].title}</h4>
            <p>{services[3].description}</p>
          </div>
          <div className='div5'>
            <span className='number'>5</span>

            <span>{services[4].svg}</span>
            <h4>{services[4].title}</h4>
            <p>{services[4].description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesComponent
