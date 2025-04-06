import React from "react"
import shack from "../../assets/images/3d_images/choza2.webp"
import kitchen from "../../assets/images/3d_images/cocina.webp"
import car from "../../assets/images/3d_images/carrito.webp"

import "./styles.css"
const Models3d = () => {
  const models = [
    {
      name: "Mini auto",
      nameclass: "tiny-car",
      date: "2024",
      software: "Maya",
      img: car,
      description: "No, no es el auto de Mr. Bean",
    },
    {
      name: "Choza",
      nameclass: "abandoned-shack",
      date: "2023",
      software: "Blender",
      img: shack,
      description: "Todo lugar abandonado tiene una historia",
    },
    {
      name: "Cocina",
      nameclass: "small-kitchen",
      date: "2023",
      software: "Blender",
      img: kitchen,
      description: "Un modelo sencillo de una cocina",
    },
  
  ]
  const icon = (
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      version='1.1'
      viewBox='0 0 32 32'
      height='1em'
      width='1em'
    >
      <path d='M16.957 6.062l-5.808 1.88 12.58 4.070v8.027l-8.383 2.711-7.074-2.287v-7.863l6.836 2.213 5.808-1.879-12.598-4.077-3.622 1.172v13.036l10.649 3.445 11.958-3.869v-13.23z'></path>
    </svg>
  )

  return (
    <>
      <section className='models-section'>
        <div className='title-3d-models'>
          <h2 className='h-title h-title-3d' id='blender'>
            {icon} &nbsp; Modelos 3D
          </h2>
          <p>
            He trabajado durante un año con herramientas como Maya y Blender,
            creando modelos tanto sencillos como avanzados, lo que me ha
            permitido desarrollar una sólida experiencia en modelado 3D.
          </p>
        </div>
        <div className='snap-contenedor'>
          {models.map((e, index) => {
            return (
              <div className='child' key={index}>
                <img
                  loading='lazy'
                  src={e.img}
                  alt={e.name}
                  className={e.nameclass}
                />
                <div className='text-models-contenedor'>
                  <h3>{e.name}</h3>
                  <span className='p-software'>
                    {e.date}&nbsp;
                    {e.software}
                  </span>
                  <p>{e.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Models3d
