import React from "react"
import FormContact from "../ContactComponentFolder/formcontact"
import "./styles.css"
import logoAl from "../../assets/images/ALv20.webp"

const FooterComponent = () => {
  return (
    <footer id='footer' className='main-footer'>
      <div className='footer-text-contenedor'>
        <h2>Area de contacto</h2>
      </div>
      <div className='form-contact-contenedor'>
        <FormContact />
        <div className='logoAl-contenedor'>
          <div>
            <img loading='lazy' src={logoAl} alt='logoAl' />
            <span>© 2023 Antony Leon Website</span>
          </div>
          <div className='about-me'>
            <p id='about'>
              Nací en honduras ciudad de Tegucigalpa, tengo 24 años siempre me
              ha encantado la tecnología pero mi amor por el desarrollo web
              viene desde los 19, desde ese momento mi pasión y mis ganas de
              aprender no han parado, no me dedico a esto pero se lo suficiente
              para crear algo bonito para ti.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
