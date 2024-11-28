import React from "react"
import shack from "../../assets/images/choza2.webp"
import kitchen from "../../assets/images/cocina.webp"
import car from "../../assets/images/carrito.webp"
import "./styles.css"
const Models3d = () => {
  const models = [
    {
      name: "Choza",
      nameclass: "abandoned-shack",
      img: shack,
      description: "Todo lugar abandonado tiene una historia",
    },
    {
      name: "Cocina",
      nameclass: "small-kitchen",
      img: kitchen,
      description: "Un modelo sencillo de una cocina",
    },
    {
      name: "Mini auto",
      nameclass: "tiny-car",
      img: car,
      description: "No, no es el auto de Mr Bean",
    },
  ]

  return (
    <>
      <div className='title-3d-models'>
        <h2 id='blender'>Modelos 3D</h2>
        <p>
          También he aprendido sobre el mundo del diseño 3D, estos son algunos
          de mis modelos
        </p>
        <p>Pronto seran presentados con Three.js</p>
      </div>
      <section className='snap-contenedor'>
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
                <p>{e.description}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Models3d
