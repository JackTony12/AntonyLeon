import React, { useState } from "react" // ── MODIFICADO: agrega useState
import "./styles.css"
import svgIcons from "./iconsSvg"

import dirt      from "../../assets/minecraftImg/mctextures/dirt.png"
import stone     from "../../assets/minecraftImg/mctextures/stone.png"
import deepslate from "../../assets/minecraftImg/mctextures/deepstone.png"
import bedrock   from "../../assets/minecraftImg/mctextures/bedrock.png"
import grass   from "../../assets/minecraftImg/mctextures/grass.jpg"

const mcTextures = [dirt, stone, deepslate, bedrock, grass]

const Skills = ({power, musicData, songIndex}) => {


  // ── NUEVO: estado para rastrear texturas activas y logro ────
  const [texturasActivas, setTexturasActivas] = useState({})
  const [logroVisible,    setLogroVisible]    = useState(false)
  const [logroConseguido, setLogroConseguido] = useState(false)
  // ────────────────────────────────────────────────────────────

  const colores = () => {
    const letras = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)]
    }
    return color + "50"
  }

  const textura = () => mcTextures[Math.floor(Math.random() * mcTextures.length)]

  // ── NUEVO: verifica si todas las cajas tienen la misma textura
  const verificarLogro = (nuevoEstado) => {
    if (logroConseguido) return
    const valores = Object.values(nuevoEstado)
    if (valores.length < svgIcons.length) return
    if (new Set(valores).size === 1) {
      setLogroConseguido(true)
      setLogroVisible(true)
      setTimeout(() => setLogroVisible(false), 4000)
    }
  }
  // ────────────────────────────────────────────────────────────

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
            const maxPower = Math.min(Math.max(power, 0), 1)

            return (
              <div
                style={{
                  boxShadow: `0px 0px ${maxPower * index - 1}px ${musicData[songIndex].color}`,
                  transform: `rotateX(${maxPower * index * 3}deg)`
                }}
                data-swapy-item='icon'
                onMouseEnter={(e) => {
                  const isMinecraft = localStorage.getItem('theme') === 'minecraft'

                  if (e.target === e.currentTarget) {
                    if (isMinecraft) {
                      const nuevaTextura = textura()
                      e.currentTarget.style.backgroundColor  = ""
                      e.currentTarget.style.backgroundImage  = `url(${nuevaTextura})`
                      e.currentTarget.style.backgroundSize   = "32px 32px"
                      e.currentTarget.style.backgroundRepeat = "repeat"

                      // ── NUEVO: registra y verifica ─────────────────
                      const nuevoEstado = { ...texturasActivas, [index]: nuevaTextura }
                      setTexturasActivas(nuevoEstado)
                      verificarLogro(nuevoEstado)
                      // ──────────────────────────────────────────────
                    } else {
                      e.currentTarget.style.backgroundImage = ""
                      e.currentTarget.style.backgroundColor = colores()
                    }
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

      {/* ── NUEVO: toast del logro ─────────────────────────────── */}
      {logroVisible && (
        <div style={{
          position:        "fixed",
          top:             "20px",
          right:           "20px",
          backgroundColor: "#1a1a1a",
          border:          "2px solid #5fd400",
          padding:         "10px 14px",
          display:         "flex",
          alignItems:      "center",
          gap:             "10px",
          zIndex:          9999,
          animation:       "mcSlideIn .3s ease",
          fontFamily:      "'Press Start 2P', monospace",
        }}>
          <img src={dirt} alt="logro" style={{ width: 32, height: 32, imageRendering: "pixelated" }} />
          <div>
            <p style={{ color: "#7fff21", fontSize: "8px", margin: 0 }}>Logro conseguido</p>
            <p style={{ color: "#fff",    fontSize: "7px", margin: "4px 0 0" }}>
              Perfectamente equilibrado,<br/>como todo debe estar
            </p>
          </div>
        </div>
      )}
      {/* ────────────────────────────────────────────────────────── */}

      {/* ── NUEVO: animación del toast ─────────────────────────── */}
      <style>{`
        @keyframes mcSlideIn {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
      `}</style>
      {/* ────────────────────────────────────────────────────────── */}

    </section>
  )
}

export default Skills