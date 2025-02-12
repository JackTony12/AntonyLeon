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

      return () => clearTimeout(timer) // Limpia el timeout si `about` cambia antes de que termine
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
          <p>Desarrollador frontend</p>
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
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 512 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'></path>
              </svg>
              &nbsp; Ver curriculum
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
      <div className='contenedor-img'>
        <img loading='lazy' src={AL_Background} alt='AntonyLeon' />
      </div>
    </section>
  )
}

export default CvBackComponent
