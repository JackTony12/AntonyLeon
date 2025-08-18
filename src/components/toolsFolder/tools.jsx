import './styles.css'
const Tools = () => {
  return (
    <>
      <h2 className='tools-title'>Tools</h2>
    <section className='tools-section'>
      <div className='tool-card'>
        <h3 className='s-title'>
          Dictador de texto</h3>
        <p>Una herramienta para estudiantes de educación media, convierte texto en voz para que puedas copiarlo fácilmente en tu cuaderno mientras escuchas, puedes ajustarlo a tu ritmo sin perderte, pruebalo ahora.</p>
        <a target='_blank' href="https://dictador-v2.vercel.app/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>
      </div>
      <div className='tool-card'>
      <h3 className='s-title'>Lista de tareas</h3>
      <p>Una app simple y fácil de usar para organizar tus pendientes del día. Agrega, marca como completado o elimina tareas en segundos. Ideal para mantener tu día en orden.</p>
        <a target='_blank' href="https://todo-list-sigma-one-35.vercel.app/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></svg></a>      
      </div>
    </section>
    </>
  )
}

export default Tools