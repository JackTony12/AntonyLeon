import React from "react"
import shack from "../../assets/images/choza2.webp"
import kitchen from "../../assets/images/cocina.webp"
import car from "../../assets/images/carrito.webp"
import "./styles.css"
const Snap = () => {
  const models = [
    {
      name: "Abandoned shack",
      nameclass: "abandoned-shack",
      img: shack,
      description: "Every abandoned place has a story",
    },
    {
      name: "Small kitchen",
      nameclass: "small-kitchen",
      img: kitchen,
      description: "A scale model of my home kitchen",
    },
    {
      name: "Tiny car",
      nameclass: "tiny-car",
      img: car,
      description: "No, it is not mr bean's car.",
    },
  ]

  return (
    <>
      <div className='title-3d-models'>
        <h1 id='blender'>3D models</h1>
        <p>
          I put into practice my knowledge of 3d to create some works like
          these,
        </p>
        <p>soon to be presented with three.js</p>
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
                <h2>{e.name}</h2>
                <p>{e.description}</p>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Snap
