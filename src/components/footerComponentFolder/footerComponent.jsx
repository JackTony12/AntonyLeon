import React from "react"
import FormContact from "../ContactComponentFolder/formcontact"
import "./styles.css"
import logoAl from "../../assets/images/ALv20.webp"
const FooterComponent = () => {
  return (
    <footer id='footer' className='main-footer'>
      <div className='footer-text-contenedor'>
        <h2 className='h-title'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"></path></svg>
          &nbsp;Hablemos
        <span>Disponible para proyectos y colaboraciones</span>
        </h2>
      </div>
      <div className='form-contact-contenedor'>
        <FormContact />

        {/* Footer Info ============================== :p*/}
        <div className='logoAl-contenedor'>
          <div>
            <img loading='lazy' src={logoAl} alt='logoAl' />
            <span>2025 Antony Leonel Website</span>
          </div>
          <div className='about-me'>
            <ul>
              <li>
                <a target='_blank' href='https://wa.me/qr/NCU7DRP2JB3XA1'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 448 512'
                    height='1em'
                    width='1em'
                  >
                    <path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'></path>
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                >
                  <path fill='none' d='M0 0h24v24H0V0z'></path>
                  <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z'></path>
                </svg>
                &nbsp;aleonelgranados@gmail.com
              </li>
              <li>
                Agradecimiento especial a Deily Bejarano por su contribución en
                UI/UX.
              </li>
              <li>
                Mentor profesional: Miguel Ángel Durán
                <span className='midu-color'> <a target='_blank' href="https://midu.dev/">(Midudev)</a></span>
              </li>
              <li>Hecho con dedicación, pasión y amor. ❤️</li>
              <li>
                ''Si puedes imaginarlo, puedes programarlo''-Alejandro Taboada
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
