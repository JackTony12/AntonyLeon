import React from "react"
import { createContext, useState } from "react"
const MyContext = createContext()

const MyContextFunction = ({ children }) => {
  const [about, setAbout] = useState(false)
  const [theme, setTheme] = useState("galaxia")


  return (
    <MyContext.Provider
      value={{
        about,
        setAbout,
        theme,
        setTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextFunction }
