import { MyContext } from "../../contexts/mainContext"
import { useContext, useState, useEffect } from "react"
import logo from "../../assets/images/ALv20.webp"
import minelogo from '../../assets/minecraftImg/minecraftLogo.png'
import "./styles.css"
function Header() {
  const { setInterruptor, interruptor, setAbout, setTheme, theme } = useContext(MyContext)
  const [menuSwich, setMenuSwich] = useState(false)
  const handleMenu = () => {
    setMenuSwich(!menuSwich)
  }
  if (window.innerWidth < 668 && menuSwich == true) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
  const currentTheme = window.localStorage.getItem("theme")

  useEffect(()=>{
    if(currentTheme){
      document.documentElement.setAttribute("data-theme", currentTheme)
      setTheme(currentTheme) 
    }
  })


    const changeTheme = (e)=> {
      const param = e.target.value
      window.localStorage.setItem("theme", param)
      setTimeout(()=>{
        document.documentElement.setAttribute("data-theme", param)
        setTheme(param)
      },1000)

    }

    console.log(theme)

  return (
    <header className='main-header'>
      <div
        onClick={() => setMenuSwich(!menuSwich)}
        className='menu-icon-contenedor'
      >
        <svg width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" className="menu-icon" viewBox="0 0 1024 1024"><path stroke="none" d="M96 448H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32m896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32M96 704H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32m896 32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32h672c17.664 0 32-14.336 32-32s-14.336-32-32-32M96 192H32c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32m224 96h672c17.664 0 32-14.336 32-32s-14.336-32-32-32H320c-17.664 0-32 14.336-32 32s14.336 32 32 32"/></svg>
      </div>
      <div className='main-nav'>
        <div
          className={`btn-padre-contenedor${menuSwich ? " menu-active" : ""}`}
        >
          <img src={logo} alt='logoAL' />
          <div>
            <div className='btn-contenedor'>
            <a
              className='Btn'
              onClick={() => {
                setInterruptor(!interruptor)
                setMenuSwich(!menuSwich)
                setAbout(true)
              }}
              href='#about'
            >
              Sobre
            </a>
          </div>

          <div className='btn-contenedor'>
            <a
              onClick={handleMenu}
              className='Btn'
              href='#proyects'
              data-text='Proyectos'
            >
              Proyectos
            </a>
          </div>
          <div className='btn-contenedor'>
            <a
              onClick={handleMenu}
              className='Btn'
              href='#blender'
              data-text='blender'
            >
              Blender
            </a>
          </div>
          <div className='btn-contenedor'>
            <a
              onClick={handleMenu}
              className='Btn'
              href='#footer'
              data-text='Contacto'
            >
              Contacto
            </a>
          </div>
           <div className='btn-contenedor'>
            <a
              onClick={handleMenu}
              className='Btn'
              href='#pricing'
              data-text='Contacto'
            >
              Planes
            </a>
          </div>
          <div className='btn-contenedor'>
            <a onClick={handleMenu} href='#' className='Btn btn-cerrar-menu'>
              Cerrar
            </a>
          </div>
          </div>
          <div className="">
              <select onChange={changeTheme} value={currentTheme} className="select-theme">
                <option value="default">Por defecto</option>
                <option value="minecraft">Minecraft</option>
                <option value="darkfantasy">Dark Fantasy</option>
              </select>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
