import React from "react"
import "./styles.css"
import ProyectsIcons from "./proyectsIcons.jsx"
import { useRef, useState } from "react"
const ProyectsNew = () => {
  const proyects = ProyectsIcons()
  const containerRef = useRef(null)
  const scroll = 300
  const icon = [
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='30px'
      width='30px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M11.063 1.456a1.749 1.749 0 0 1 1.874 0l8.383 5.316a1.751 1.751 0 0 1 0 2.956l-8.383 5.316a1.749 1.749 0 0 1-1.874 0L2.68 9.728a1.751 1.751 0 0 1 0-2.956Zm1.071 1.267a.25.25 0 0 0-.268 0L3.483 8.039a.25.25 0 0 0 0 .422l8.383 5.316a.25.25 0 0 0 .268 0l8.383-5.316a.25.25 0 0 0 0-.422Z'></path>
      <path d='M1.867 12.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z'></path>
      <path d='M1.867 16.324a.75.75 0 0 1 1.035-.232l8.964 5.685a.25.25 0 0 0 .268 0l8.964-5.685a.75.75 0 0 1 .804 1.267l-8.965 5.685a1.749 1.749 0 0 1-1.874 0l-8.965-5.685a.75.75 0 0 1-.231-1.035Z'></path>
    </svg>,
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
    >
      <path fill='none' d='M0 0h24v24H0V0z'></path>
      <path d='M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'></path>
    </svg>,
    <svg
    stroke='currentColor'
    fill='white'
    strokeWidth='0'
    viewBox='0 0 320 512'
    height='1em'
    width='1em'
  >
    <path d='M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z'></path>
  </svg>,
   <svg
   stroke='currentColor'
   fill='white'
   strokeWidth='0'
   viewBox='0 0 320 512'
   height='1em'
   width='1em'
 >
   <path d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'></path>
 </svg>
  ]

  const handleClick = (e) => {
    if (isDragging) e.preventDefault()
  }

 
  return (
    <section className='proyects-section'>
      <h2 className='h-title' id='proyects'>
        {" "}
        {icon[0]} Proyectos
      </h2>
      <div ref={containerRef} className='p-container'>
        {proyects.map((proyect, index) => (
          <div className='p-card' key={index}>
            <div>
              <img loading="lazy" src={proyect.image} alt='proyect-image' />
            </div>
            <h3>
              <span
                style={{ filter: `drop-shadow(0 0 25px ${proyect.color})` }}
                className='p-svg-icon'
              >
                {proyect.icon ? proyect.icon : ''}
              </span>
              {proyect.name}
            </h3>
            <p>{proyect.description}</p>
            <p className='p-date'>{proyect.date}</p>
            <div className='tecnology-container'>
              {proyect.tecnologyes.map((t, id) => {
                return (
                  <span className='t-tecnology' key={id}>
                    {t}
                  </span>
                )
              })}
            </div>

            <div className='p-url'>
              <a
                href={proyect.url}
                target='_blank'
                aria-label='Visita el proyecto en cuestión'
                rel='noopener noreferrer'
                style={
                  proyect.ready
                    ? {}
                    : {
                        pointerEvents: "none",
                        background: "transparent",
                        color: "inherit",
                        cursor: "default",
                      }
                }
              >
                {proyect.ready?icon[1]:<small style={{userSelect:'none'}}>Programando...</small>}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='scroll-buttons'>
        <button
          aria-label='LeftCard'
          className='scroll-button'
          onClick={()=>containerRef.current.scrollBy({ left: -scroll, behavior: "smooth" })}
        >
          {icon[2]}
        </button>
        <button
          aria-label='RightCard'
          className='scroll-button'
          onClick={()=>containerRef.current.scrollBy({ left: scroll, behavior: "smooth" })}
        >
          {icon[3]}
         
        </button>
      </div>
    </section>
  )
}

export default ProyectsNew
