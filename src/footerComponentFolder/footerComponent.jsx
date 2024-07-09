import React from "react"
import { BsWhatsapp } from "react-icons/bs"
import FormContact from "../ContactComponentFolder/formcontact"
import "./styles.css"
import logoAl from "../assets/images/LogoAL.webp"
const FooterComponent = () => {
  return (
    <footer id='footer' className='main-footer'>
      <div className='footer-text-contenedor'>
        <h2>Área de contacto</h2>
        <p>
          ¿Necesitas más información? Puedes dejarme un mensaje o contactarme
          por medio de la sigientes redes sociales sera un gusto contestarte.
        </p>
      </div>
      <div className='form-contact-contenedor'>
        <FormContact />
        <div className='logoAl-contenedor'>
          <div>
            <img src={logoAl} alt='' />
            <p>© 2023 Antony Leon Website</p>
          </div>
        </div>
      </div>

      {/* <div className="contacto-contenedor">
        <div>
          <div className="whatsapp-contacto">
            <a href="https://wa.me/qr/K33U6CF54FSUM1" target="_blank">
              <BsWhatsapp className="whatsapp-icon" /> WhatsApp{" "}
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default FooterComponent
