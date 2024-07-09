import React from "react"
import { useContext, useState } from "react"
import { MyContext } from "../contexts/mainContext"
import AL_Background from "../assets/images/poster-solo.webp"
import cv from "../assets/Cv/ANTONYLEONCV.pdf"
import PersonalInfo from "../personalComponentFolder/personalInfo"
import "./styles.css"
import "../styles/mainStyles.css"

const CvBackComponent = () => {
  const { interruptor } = useContext(MyContext)

  return (
    <section className='cv-back-container'>
      <div className={`cv-back-component ${interruptor ? "active" : ""}`}>
        <PersonalInfo />
      </div>
      <div className={`cv-back-component ${!interruptor ? "active" : ""}`}>
        <section className='section-img'>
          <div
            className='
          boton-cv-container'
          >
            <div className='antony-leon'>
              <h2>Antony Leon</h2>
              <p>Frontend developer</p>
            </div>
            <div className='capsula-ex-cv'>
              <p className='experience'>
                <span>
                  <span>+</span>2
                </span>
                años Experiencia
              </p>
              <a download='AntonyLeonCV.pdf' className='boton-cv' href={cv}>
                Descargar CV
              </a>
            </div>
          </div>
          <div className='contenedor-img'>
            <img src={AL_Background} alt='AntonyLeon' />
          </div>
        </section>
      </div>
    </section>
  )
}

export default CvBackComponent
