import { useState, useEffect, useContext } from "react"
import { MyContext } from "../../contexts/mainContext"
import "./themeSelectorStyles.css"
import minecraftLogo from '../../assets/minecraft/images/minecraftLogo.webp'
import eldenRinglogo from '../../assets/darkfantasyImg/eldenRingLogo.webp'
import { sileo } from "sileo"
import DoorTransition from "./DoorTransition.jsx"


const DOOR_TIMING = {
  close: 750,   
  hold: 500,    
  open: 750,    
};

const ThemeSelector = () => {
  const { setTheme } = useContext(MyContext);

  const [currentTheme, setCurrentTheme] = useState(
    () => window.localStorage.getItem("theme") || "default"
  );
  const [open, setOpen] = useState(false);
  const [doorState, setDoorState] = useState("idle");

  const themes = [
    { value: "default", label: "Por defecto", isText: true },
    { value: "minecraft", imageUrl: minecraftLogo },
    { value: "darkfantasy", imageUrl: eldenRinglogo },
  ];

  useEffect(() => {
    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      setTheme(currentTheme);
    }
  }, []);

  const applyTheme = (value) => {
    window.localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
    setTheme(value);
    setCurrentTheme(value);
    setOpen(false);
  };

  const handleSelect = (value) => {
    if (value === "darkfantasy") {
      sileo.warning({
        title: "Tema en desarrollo",
        description: "Este tema está en desarrollo y estará disponible pronto.",
      });
      return;
    }


    if (value === currentTheme) {
      setOpen(false);
      return;
    }

    setDoorState("closing");

    setTimeout(() => {
      setDoorState("closed");
      applyTheme(value);

      setTimeout(() => {
        setDoorState("opening");

        setTimeout(() => {
          setDoorState("idle");
        }, DOOR_TIMING.open);

      }, DOOR_TIMING.hold);

    }, DOOR_TIMING.close);
  };

  const current = themes.find(t => t.value === currentTheme);

  return (
    <>
      <DoorTransition state={doorState} />

      <div className="custom-select" onBlur={() => setOpen(false)} tabIndex={0}>
        <span className="theme-tag">Tema</span>
        <div className="custom-select__selected" onClick={() => setOpen(o => !o)}>
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
    </>
  );
};

export default ThemeSelector;