import {useState, useEffect, useContext } from "react"
import { MyContext } from "../../contexts/mainContext"
import "./themeSelectorStyles.css"
import minecraftLogo from '../../assets/minecraft/images/minecraftLogo.png'
import eldenRinglogo from '../../assets/darkfantasyImg/eldenRingLogo.webp'

const ThemeSelector = () => {
 
const {  setTheme } = useContext(MyContext)

const [currentTheme, setCurrentTheme] = useState(
  () => window.localStorage.getItem("theme") || "default"
);
const [open, setOpen] = useState(false);

const themes = [
  { value: "default", label: "Por defecto", isText: true },
  { value: "minecraft", imageUrl: minecraftLogo },
  { value: "darkfantasy", imageUrl: eldenRinglogo },
];

 useEffect(()=>{
    if(currentTheme){
      document.documentElement.setAttribute("data-theme", currentTheme)
      setTheme(currentTheme) 
    }
  },[])



const handleSelect = (value) => {
  window.localStorage.setItem("theme", value);
  setTimeout(() => {
    document.documentElement.setAttribute("data-theme", value);
    setTheme(value);
    setCurrentTheme(value); 
    setOpen(false);
  }, 1000);
};

const current = themes.find(t => t.value === currentTheme);

return (
  <div className="custom-select" onBlur={() => setOpen(false)} tabIndex={0}>
    <span className="theme-tag">Elegir tema</span>
    <div className="custom-select__selected" onClick={() => setOpen(o => !o)}>
        {/* <span className={`custom-select__arrow ${open ? "open" : ""}`}> Tema</span> */}
      {current?.isText
        ? <span className="custom-select__text">{current.label}</span>
        : <img src={current?.imageUrl} alt={current?.value} className="custom-select__img" />}
    </div>

    {open && (
      <div className="custom-select__dropdown">
        {themes.map(theme => (
          <div
            key={theme.value}
            className={`custom-select__option ${currentTheme === theme.value ? "active" : ""}`}
            onMouseDown={() => handleSelect(theme.value)}
          >
            {theme.isText
              ? <span className="custom-select__text">{theme.label}</span>
              : <img src={theme.imageUrl} alt={theme.value} className="custom-select__img" />}
          </div>
        ))}
      </div>
    )}
  </div>
);



}

export default ThemeSelector