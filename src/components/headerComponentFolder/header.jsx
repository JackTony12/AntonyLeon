import { MyContext } from "../../contexts/mainContext"
import { useContext, useState } from "react"
import logo from "../../assets/images/ALv20.webp"
import "./styles.css"
function Header() {
  const { setInterruptor, interruptor } = useContext(MyContext)
  const [menuSwich, setMenuSwich] = useState(false)
  const handleMenu = () => {
    setMenuSwich(!menuSwich)
  }
  if (window.innerWidth < 668 && menuSwich == true) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  const handleMenuSwich = () => handleMenu()

  return (
    <header className='main-header'>
      <div
        onClick={() => setMenuSwich(!menuSwich)}
        className='menu-icon-contenedor'
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 1024 1024'
          height='1em'
          width='1em'
          className='menu-icon'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M96 448H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32zM96 704H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32zM96 192H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32zm224 96h672c17.664 0 32-14.336 32-32s-14.336-32-32-32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32z'></path>
        </svg>
      </div>
      <div className='main-nav'>
        <div
          className={`btn-padre-contenedor${menuSwich ? " menu-active" : ""}`}
        >
          <img src={logo} alt='logoAL' />
          <div className='btn-contenedor'>
            <a
              className='Btn'
              onClick={() => {
                setInterruptor(!interruptor)
                setMenuSwich(!menuSwich)
              }}
              href='#about'
            >
              About
            </a>
          </div>

          <div className='btn-contenedor'>
            <a
              onClick={handleMenuSwich}
              className='Btn'
              href='#proyects'
              data-text='Proyectos'
            >
              Proyects
            </a>
          </div>
          <div className='btn-contenedor'>
            <a
              onClick={handleMenuSwich}
              className='Btn'
              href='#blender'
              data-text='blender'
            >
              Blender
            </a>
          </div>
          <div className='btn-contenedor'>
            <a
              onClick={handleMenuSwich}
              className='Btn'
              href='#footer'
              data-text='Contacto'
            >
              Contact
            </a>
          </div>
          <div className='btn-contenedor'>
            <a
              onClick={handleMenuSwich}
              href='#'
              className='Btn btn-cerrar-menu'
            >
              Close
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
