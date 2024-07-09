import React from "react"
import "./styles.css"
import iconData from "./iconsData"

const Iconos = () => {
  return (
    <>
      {iconData.map((item, index) => {
        const IconsImg = item.icon
        return (
          <div className='icon-skill' key={index}>
            <a href='#'>
              <IconsImg className='icon' />
              <span>{item.name}</span>
            </a>
          </div>
        )
      })}
    </>
  )
}
export default Iconos
