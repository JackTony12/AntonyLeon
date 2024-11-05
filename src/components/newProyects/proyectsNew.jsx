import React from "react"
import "./styles.css"
import pixabay from "../../assets/images/pixabaysinfondo.webp"
import ecommerce from "../../assets/images/ecommercesinfondo.webp"
import tic from "../../assets/images/tictacsinfondo.webp"
import todo from "../../assets/images/todo.webp"

const ProyectsNew = () => {
  const proyects = [
    {
      name: "ECOMMERCE",
      img: ecommerce,
      icon: (
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='9' cy='21' r='1'></circle>
          <circle cx='20' cy='21' r='1'></circle>
          <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6'></path>
        </svg>
      ),
      description: "An example of interactive ecommerce with google login",
      date: "© 2023",
      tecnologyes: [
        "React ",
        "JavaScript ",
        "HTML",
        "CSS",
        "Router",
        "Firebase",
      ],
      url: "https://jacktony12.github.io/ecommerce-proyect/",
    },
    {
      name: "FREE IMAGES",
      img: pixabay,
      icon: (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 256 256'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v63.72L186.14,97.86a20,20,0,0,0-28.28,0L52,203.72V52ZM85.66,204,172,117.66l32,32V204ZM76,96a20,20,0,1,1,20,20A20,20,0,0,1,76,96Z'></path>
        </svg>
      ),
      description: "Site to search for high quality copyright free images",
      date: "© 2021",
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sonner"],
      url: "https://jacktony12.github.io/pixabay_imagenes/",
    },
    {
      name: "Tic Tac Toe",
      img: tic,
      icon: (
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
          <path d='M3 12h18'></path>
          <path d='M12 3v18'></path>
          <path d='M4 16l4 4'></path>
          <path d='M4 20l4 -4'></path>
          <path d='M16 4l4 4'></path>
          <path d='M16 8l4 -4'></path>
          <path d='M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0'></path>
        </svg>
      ),
      description: "A simple 3-in-a-row game to play with your friends",
      date: "© 2020",
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sweetalert"],
      url: "https://jacktony12.github.io/tictac-toe/",
    },
    {
      name: "Todo list",
      img: todo,
      icon: (
        <svg
          stroke='currentColor'
          fill='none'
          strokeWidth='2'
          viewBox='0 0 24 24'
          strokeLinecap='round'
          strokeLinejoin='round'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='3' y='5' width='6' height='6' rx='1'></rect>
          <path d='m3 17 2 2 4-4'></path>
          <path d='M13 6h8'></path>
          <path d='M13 12h8'></path>
          <path d='M13 18h8'></path>
        </svg>
      ),
      description: "Simple and fast to-do list application",
      date: "© 2023",
      tecnologyes: ["Next.js", "JavaScript", "HTML", "CSS", "React-toastify"],
      url: "https://todo-list-sigma-one-35.vercel.app/",
    },
  ]
  return (
    <section className='proyects-section'>
      <h2 id='proyects'>Proyects</h2>
      <div className='p-container'>
        {proyects.map((proyect, index) => (
          <div className='p-card' key={index}>
            <h3>
              <span className='p-icon'>{proyect.icon}</span>
              {proyect.name}
            </h3>
            <p>{proyect.description}</p>
            <p>{proyect.date}</p>
            <div className='tecnology-container'>
              {proyect.tecnologyes.map((t, id) => {
                return (
                  <span className='t-tecnology' key={id}>
                    {t}
                  </span>
                )
              })}
            </div>
            <div>
              <img src={proyect.img} alt={proyect.name} />
            </div>
            <div className='p-url'>
              <a href={proyect.url} target='_blank' rel='noopener noreferrer'>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0V0z'></path>
                  <path d='M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProyectsNew
