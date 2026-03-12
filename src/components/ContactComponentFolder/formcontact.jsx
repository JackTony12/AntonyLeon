import React from "react"
import { useState, useEffect } from "react"
import "./styles.css"
import FirebaseApp from "../../firebase/config"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { sileo, Toaster } from "sileo";

const FormContact = () => {
  const [token, setToken] = useState(true)
  const [userData, setUserData] = useState({ email: "", mensaje: "" })
  const db = getFirestore(FirebaseApp)

  useEffect(() => {
    const storedToken = localStorage.getItem("formToken")
    if (storedToken) {
      setToken(false)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (token) {
      const sendDatos = async () => {
        try {
          await addDoc(collection(db, "antonyleon-emails"), { ...userData })
          localStorage.setItem("formToken", "sent")
        } catch (error) {
          console.log(error)
        } finally {
          sileo.success({ title: "Mensaje enviado correctamente" });
          setUserData({ email: "", mensaje: "" })
        }
      }
      sendDatos()
    } else {
      sileo.error({
      title: "Ya has enviado un mensaje",
        });
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Correo</label>
          <input
            type='text'
            name='email'
            value={userData.email}
            onChange={handleChange}
            placeholder='correo@gmail.com'
            required
            autoComplete='true'
            id='email'
          ></input>
        </div>
        <div className='form-group'>
          <label htmlFor='textArea'>Mensaje</label>
          <textarea
            className='textArea'
            value={userData.mensaje}
            name='mensaje'
            onChange={handleChange}
            required
            id='textArea'
            placeholder='Escribe tu mensaje'
            maxLength={50}
          ></textarea>
        </div>
        <button className='form-submit-btn' type='submit'>
          Enviar
        </button>
      </form>
      <Toaster position="top-center" />
    </div>
  )
}

export default FormContact
