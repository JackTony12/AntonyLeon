import React from "react"
import "./styles.css"
import svgIcons from "./iconsSvg"
const Skills = ({power,musicData,songIndex}) => {
  const colores = () => {
    const letras = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)]
    }

    return color + "90"
  }
  const icon = (
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='30px'
      width='30px'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M9 3h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z'></path>
      <path d='M9 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z'></path>
      <path d='M19 13h-4a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z'></path>
      <path d='M17 3a1 1 0 0 1 .993 .883l.007 .117v2h2a1 1 0 0 1 .117 1.993l-.117 .007h-2v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-2a1 1 0 0 1 1 -1z'></path>
    </svg>
  )

  return (
    <section className='skills-section'>
      <h2 className='h-title'>{icon} Habilidades y tecnologías</h2>
      <section id='section-skills' className='section-skills'>
        <div className='skills-container'>
          {svgIcons.map((item, index) => {
    const maxPower = Math.min(Math.max(power,0),1)

            return (
              <div
                style={{boxShadow: `0px 0px ${maxPower * index-1}px ${musicData[songIndex].color}`,transform:`rotateX(${maxPower*index*3}deg)`}}
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
