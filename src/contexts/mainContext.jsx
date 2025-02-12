import React from "react"
import { createContext, useState } from "react"
const MyContext = createContext()

const MyContextFunction = ({ children }) => {
  const [interruptor, setInterruptor] = useState(false)
  const [about, setAbout] = useState(false)

  return (
    <MyContext.Provider
      value={{
        setInterruptor,
        interruptor,
        about,
        setAbout,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextFunction }
