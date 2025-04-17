import React from "react"
import AL_Background from "../../assets/images/posteryo.webp"
import cvEs from "../../assets/Cv/AntonyCv.pdf"
import cvEn from "../../assets/Cv/AntonyNewCvEnglish.pdf"
import "./styles.css"
import { useState, useEffect, useContext } from "react"
import { MyContext } from "../../contexts/mainContext"
const CvBackComponent = () => {
  const { about, setAbout } = useContext(MyContext)
  useEffect(() => {
    if (about) {
      const timer = setTimeout(() => {
        setAbout(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [about])
  return (
    <section id='sobre' className='section-profile'>
      <div
        className='
          name-button-group'
      >
        <div className='antony-leon'>
          <h1>Antony Leonel</h1>
          <p>Desarrollador Frontend hondureño enfocado en diseño UI/UX, funcionalidad, velocidad y experiencias responsive que se adaptan a cualquier dispositivo</p>
        </div>
        <div className='capsula-ex-cv'>
          <p className='experience'>
            <span>
              <span>+</span>2
            </span>
            <strong>Años de experiencia</strong>
          </p>

          <div className={`btn-cv ${about ? "flash" : "noflash"}`}>
            <div className='download-text'>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M17 18h2"></path><path d="M20 15h-3v6"></path><path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z"></path></svg>
              &nbsp; Ver currículum
            </div>

            <div className='lenguajes'>
              <a target='_blank' href={cvEs}>
                Español
              </a>
              <a target='_blank' href={cvEn}>
                Inglés
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='al-profile-img-container'>
        <img loading='lazy' src={AL_Background} alt='AntonyLeon' />
      </div>
    </section>
  )
}

export default CvBackComponent
