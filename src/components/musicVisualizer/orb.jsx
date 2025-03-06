import React from "react"
import "./orb.css"

const Orb = ({ energy, musicData, songIndex }) => {
  const maxEnergy = Math.min(Math.max(energy, 0), 1)

  return (
    <span
      className='orb'
      style={{
        boxShadow: `0px 0px ${maxEnergy * 80}px ${musicData[songIndex].color}`,
        background: `linear-gradient(to right, ${musicData[songIndex].color}, rgba(255, 0, 179, 0.5))`,
        opacity: maxEnergy * 0.7,
        transform: `scale(${1 + maxEnergy * 0.5})`,
      }}
    ></span>
  )
}

export default Orb
