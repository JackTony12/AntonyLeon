import React from "react"
import "./styles.css"
import svgIcons from "./iconsSvg"
const Iconos = () => {
  return (
    <>
      {svgIcons.map((item, index) => {
        return (
          <div className='icon-skill' key={index}>
            <span>
              {item.icon}
              <span>{item.name}</span>
            </span>
          </div>
        )
      })}
    </>
  )
}
export default Iconos
