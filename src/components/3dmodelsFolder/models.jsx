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
      date: "2023",
      img: shack,
      description: "Todo lugar abandonado tiene una historia",
    },
    {
      name: "Cocina",
      nameclass: "small-kitchen",
      date: "2023",
      img: kitchen,
      description: "Un modelo sencillo de una cocina",
    },
    {
      name: "Mini auto",
      nameclass: "tiny-car",
      date: "2024",
      img: car,
      description: "No, no es el auto de Mr Bean",
    },
  ]
  const icon = (
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='2'
      viewBox='0 0 24 24'
      height='45px'
      width='45px'
    >
      <path d='M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-6 3.844a2 2 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03z'></path>
      <path d='M12 16.5v4.5'></path>
      <path d='M4.5 7.5l3.5 2.5'></path>
      <path d='M16 10l4 -2.5'></path>
      <path d='M12 7.5v4.5l-4 2'></path>
      <path d='M12 12l4 2'></path>
      <path d='M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4z'></path>
    </svg>
  )

  return (
    <>
      <section className='models-section'>
        <div className='title-3d-models'>
          <h2 className='h-title' id='blender'>
            {" "}
            {icon}Modelos 3D
          </h2>
          <p>
            He trabajado con programas como maya y blender para crear este tipo
            de modelos sencillos y avanzados
          </p>
          <p>Pronto los presentare con Three.js</p>
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
                  <small style={{ color: "gray" }}>{e.date}</small>
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
