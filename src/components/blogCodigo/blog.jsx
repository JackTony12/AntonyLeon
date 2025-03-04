import React from "react"
import "./styles.css"
import blogImg from "../../assets/images/codeblogCorregido.webp"
const Blog = () => {
  const icons = [
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 512 512'
      height='1em'
      width='1em'
    >
      <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'></path>
    </svg>,
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 640 512'
      height='1em'
      width='1em'
    >
      <path d='M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z'></path>
    </svg>,
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 640 512'
      height='1em'
      width='1em'
    >
      <path d='M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z'></path>
    </svg>,
    <svg
      stroke='currentColor'
      fill='white'
      strokeWidth='0'
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
    >
      <path d='M8.75 11a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75Zm7.25.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 1.5 0v-3.5Z'></path>
      <path d='M9.813 1h2.437a.75.75 0 0 1 .75.75V5h6.75A2.25 2.25 0 0 1 22 7.25v5.25h1.25a.75.75 0 0 1 0 1.5H22v5.75A2.25 2.25 0 0 1 19.75 22H4.25A2.25 2.25 0 0 1 2 19.75V14H.75a.75.75 0 0 1 0-1.5H2V7.25A2.25 2.25 0 0 1 4.25 5h7.25V2.5H9.813A.75.75 0 0 1 9.812 1ZM3.5 7.25v12.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75Z'></path>
    </svg>,
  ]

  return (
    <>
      <section className='blog-section'>
        <div className='blog-text'>
          <div>
            <h3>Blog de código</h3>
            <p className='p-title'>
              Aprende desarrollo frontend de la mejor manera
            </p>
            <ul>
              <li>
                <span>{icons[0]}</span>Explicaciones menos técnicas y más
                fáciles de comprender.
              </li>
              <li>
                <span>{icons[1]}</span>
                Ejemplos de código, quiz, preguntas y retos para practicar.
              </li>
              <li>
                <span>{icons[2]}</span>
                HTML, CSS y JavaScript fortalece tus bases y se todo un pro.
              </li>
              <li>
                <span>{icons[3]}</span>
                Chat con IA, resuelve tus dudas al instante.
              </li>
            </ul>
            <span className='animated-text'> Especial para principiantes</span>
          </div>
          <div>
            <button>Construyendo...</button>
          </div>
        </div>
        <div className='blog-img-container'>
          <img src={blogImg} alt='blog' />
        </div>
      </section>
    </>
  )
}

export default Blog
