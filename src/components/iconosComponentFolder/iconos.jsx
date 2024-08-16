import React from "react"
import "./styles.css"
import svgIcons from "./iconsSvg"
const Iconos = () => {
  return (
    <>
      {svgIcons.map((item, index) => {
        return (
          <div className='icon-skill' key={index}>
            <a href='#'>
              {item.icon}
              <span>{item.name}</span>
            </a>
          </div>
        )
      })}
    </>
  )
}
export default Iconos
