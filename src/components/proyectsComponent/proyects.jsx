import React from "react"
import pixabay from "../../assets/images/pixabay.webp"
import ecommerce from "../../assets/images/ecommerce.webp"
import "./styles.css"
import { iconsProyect } from "../iconosComponentFolder/iconsSvg"
const Proyects = () => {
  const pixaIcons = iconsProyect.filter((icon, index) =>
    [0, 2, 3, 4].includes(index)
  )
  const proyects = [
    {
      name: "ECOMMERCE",
      img: ecommerce,
      description: "An example of interactive ecommerce with google login",
      date: "2023-2024",
      tecnologyes: iconsProyect,
      url: "https://jacktony12.github.io/ecommerce-proyect/",
    },
    {
      name: "PIXABAY IMAGES",
      img: pixabay,
      description: "Site to search for high quality copyright free images",
      date: "2021-2022",
      tecnologyes: pixaIcons,
      url: "https://jacktony12.github.io/pixabay_imagenes/",
    },
  ]
  return (
    <>
      <h1 id='proyects' className='proyects-title'>
        Proyects
      </h1>
      <section className='proyectos-contenedor'>
        {proyects.map((item, index) => {
          return (
            <div key={index} className='proyecto-targeta-contenedor'>
              <div>
                <img loading='lazy' src={item.img} alt={item.name} />
              </div>
              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className='proyect-date'>{item.date}</span>
                <div className='span-t-contenedor'>
                  <div>
                    {item.tecnologyes.map((t, id) => {
                      return (
                        <span className='span-t' key={id}>
                          {t}
                        </span>
                      )
                    })}
                  </div>
                  <a target='_blank' href={item.url}>
                    Visitar{" "}
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Proyects
