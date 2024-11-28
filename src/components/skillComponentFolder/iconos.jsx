import React from "react"
import "./styles.css"
import svgIcons from "./iconsSvg"
const Skills = () => {
  const colores = () => {
    const letras = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)]
    }

    return color
  }

  return (
    <section className='main-article'>
      <div className='skill-text-contenedor'>
        <h2>Habilidades y tecnologías</h2>
      </div>
      <section id='section-skills' className='section-skills'>
        <div className='contenedor-skills'>
          {svgIcons.map((item, index) => {
            return (
              <div
                data-swapy-item='icon'
                onMouseEnter={(e) => {
                  if (e.target === e.currentTarget) {
                    e.currentTarget.style.backgroundColor = colores()
                  }
                }}
                onMouseLeave={(e) => {
                  if (e.target === e.currentTarget) {
                    e.currentTarget.style.backgroundColor = "black"
                  }
                }}
                className='icon-skill'
                key={index}
              >
                <span>
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}
export default Skills
