import { MyContext } from "../contexts/mainContext"
import { SlList } from "react-icons/sl"
import { useContext, useState } from "react"
import { Toaster, toast } from "sonner"
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
  return (
    <header className="main-header">
      <div className="menu-icon-contenedor">
        <SlList
          onClick={() => setMenuSwich(!menuSwich)}
          className="menu-icon"
        />
      </div>
      <div className="main-nav">
        <div
          className={`btn-padre-contenedor${menuSwich ? " menu-active" : ""}`}
        >
          <div className="btn-contenedor">
            <a
              className="Btn"
              onClick={() => {
                setInterruptor(!interruptor)
                setMenuSwich(!menuSwich)
              }}
              href="#"
            >
              Sobre
            </a>
          </div>

          <div className="btn-contenedor">
            <a
              className="Btn"
              href="#"
              onClick={() => {
                toast.error("proximamante Proyectos")
              }}
              data-text="Proyectos"
            >
              Proyectos
            </a>
          </div>
          <div className="btn-contenedor">
            <a
              className="Btn"
              href="#"
              onClick={() => {
                toast.error("proximamante Photoshop")
              }}
              data-text="Photoshop"
            >
              Photoshop
            </a>
          </div>
          <div className="btn-contenedor">
            <a
              onClick={() => handleMenu()}
              className="Btn"
              href="#blender"
              data-text="blender"
            >
              Blender
            </a>
          </div>
          <div className="btn-contenedor">
            <a
              onClick={() => handleMenu()}
              className="Btn"
              href="#footer"
              data-text="Contacto"
            >
              Contacto
            </a>
          </div>
          <div className="btn-contenedor">
            <a
              onClick={() => handleMenu()}
              href="#"
              className="Btn btn-cerrar-menu"
            >
              Cerrar
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
