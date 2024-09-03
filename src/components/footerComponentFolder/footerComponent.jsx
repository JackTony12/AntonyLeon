import React from "react"
import FormContact from "../ContactComponentFolder/formcontact"
import "./styles.css"
import logoAl from "../../assets/images/logoSinFondoAl.webp"

const FooterComponent = () => {
  return (
    <footer id='footer' className='main-footer'>
      <div className='footer-text-contenedor'>
        <h2>Area of contact</h2>
        <p>Send me a messaje to talk about something</p>
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
              I was born in honduras city of Tegucigalpa, I'm 24 years old and
              my love for web design came since I was 18 years old, I'm not
              dedicated to this but I know enough to create something nice for
              you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
