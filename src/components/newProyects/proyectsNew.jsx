import React from "react"
import "./styles.css"

const ProyectsNew = () => {
  const proyects = [
    {
      name: "Tic Tac Toe",
      color: "red",
      icon: (
        <svg
          height='1em'
          width='1em'
          version='1.1'
          id='Layer_1'
          viewBox='0 0 512 512'
        >
          <path
            fill='#FF3F62'
            d='M364.606,162.909h-85.333V77.576c0-12.853-10.42-23.273-23.273-23.273c-12.853,0-23.273,10.42-23.273,23.273v85.333h-85.333C66.121,162.909,0,229.028,0,310.303c0,81.273,66.121,147.394,147.394,147.394c4.108,0,8.198-0.171,12.263-0.51c4.063-0.34,8.102-0.846,12.103-1.516c2.001-0.335,3.992-0.712,5.973-1.128c3.963-0.833,7.885-1.829,11.756-2.984c3.871-1.154,7.692-2.468,11.453-3.936c3.761-1.468,7.463-3.091,11.093-4.866c1.815-0.887,3.613-1.812,5.395-2.776c3.559-1.924,7.045-4,10.446-6.22s6.72-4.586,9.944-7.095H256h18.179c25.792,20.07,57.564,31.03,90.427,31.03c81.273,0,147.394-66.121,147.394-147.394C512,229.028,445.879,162.909,364.606,162.909z'
          />
          <path
            fill='#898890'
            d='M279.273,162.909V77.576c0-12.853-10.42-23.273-23.273-23.273c-12.853,0-23.273,10.42-23.273,23.273v85.333H256H279.273z'
          />
          <path
            fill='#FFA733'
            d='M370.091,271.905l-43.793,43.793c-0.031,0.031-0.064,0.054-0.095,0.085c-0.549,0.549-1.067,1.128-1.553,1.727c-7.014,8.555-7.011,20.933,0.012,29.483c0.484,0.596,0.998,1.167,1.541,1.713c0.551,0.551,1.13,1.071,1.733,1.562c4.273,3.499,9.498,5.252,14.725,5.252c5.224,0,10.446-1.75,14.716-5.246c0.608-0.492,1.193-1.013,1.749-1.569c0.039-0.039,0.073-0.084,0.11-0.123L403,304.82c9.089-9.089,9.089-23.824,0-32.914C393.916,262.817,379.179,262.817,370.091,271.905z'
          />
          <path
            fill='#FFA733'
            d='M178.424,287.03h-7.758v-7.758c0-12.854-10.42-23.273-23.273-23.273c-12.853,0-23.273,10.418-23.273,23.273v7.758h-7.758c-12.853,0-23.273,10.418-23.273,23.273c0,12.851,10.42,23.273,23.273,23.273h7.758v7.758c0,12.851,10.42,23.273,23.273,23.273c12.853,0,23.273-10.422,23.273-23.273v-7.758h7.758c12.853,0,23.273-10.422,23.273-23.273C201.697,297.449,191.277,287.03,178.424,287.03z'
          />
          <path
            fill='#D8143A'
            d='M232.727,162.909h-85.333C66.121,162.909,0,229.028,0,310.303c0,81.273,66.121,147.394,147.394,147.394c32.863,0,64.635-10.961,90.427-31.03H256V162.909H232.727z M178.424,333.576h-7.758v7.758c0,12.851-10.42,23.273-23.273,23.273c-12.853,0-23.273-10.422-23.273-23.273v-7.758h-7.758c-12.853,0-23.273-10.422-23.273-23.273c0-12.854,10.42-23.273,23.273-23.273h7.758v-7.758c0-12.854,10.42-23.273,23.273-23.273c12.853,0,23.273,10.418,23.273,23.273v7.758h7.758c12.853,0,23.273,10.418,23.273,23.273C201.697,323.154,191.277,333.576,178.424,333.576z'
          />
        </svg>
      ),
      description: "Un simple juego de 3 en raya para jugar con tus compas.",
      date: "© 9-11-2022",
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sweetalert"],
      url: "https://jacktony12.github.io/tictac-toe/",
    },
    {
      name: "Free images",
      color: "#e63d00",
      icon: (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          version='1'
          viewBox='0 0 48 48'
          enableBackground='new 0 0 48 48'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#F57C00'
            d='M40,41H8c-2.2,0-4-1.8-4-4V11c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v26C44,39.2,42.2,41,40,41z'
          ></path>
          <circle fill='#FFF9C4' cx='35' cy='16' r='3'></circle>
          <polygon fill='#942A09' points='20,16 9,32 31,32'></polygon>
          <polygon fill='#BF360C' points='31,22 23,32 39,32'></polygon>
        </svg>
      ),
      description:
        "Sitio para buscar imágenes de alta calidad libres de derechos de autor.",
      date: "© 25-04-2023",
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sonner"],
      url: "https://jacktony12.github.io/pixabay_imagenes/",
    },
    {
      name: "Todo-list",
      icon: (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          version='1'
          viewBox='0 0 48 48'
          enableBackground='new 0 0 48 48'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g fill='#2196F3'>
            <rect x='6' y='22' width='4' height='4'></rect>
            <rect x='6' y='14' width='4' height='4'></rect>
            <rect x='6' y='30' width='4' height='4'></rect>
            <rect x='6' y='6' width='4' height='4'></rect>
            <rect x='6' y='38' width='4' height='4'></rect>
          </g>
          <g fill='#2196F3'>
            <rect x='14' y='22' width='28' height='4'></rect>
            <rect x='14' y='14' width='28' height='4'></rect>
            <rect x='14' y='30' width='28' height='4'></rect>
            <rect x='14' y='6' width='28' height='4'></rect>
            <rect x='14' y='38' width='28' height='4'></rect>
          </g>
        </svg>
      ),
      color: "#0044ff",
      description: "App de lista de tareas simple y fácil de usar.",
      date: "©  12-06-2023",
      tecnologyes: ["Next.js", "JavaScript", "HTML", "CSS", "React-toastify"],
      url: "https://todo-list-sigma-one-35.vercel.app/",
    },
    {
      name: "E-commerce",
      color: "#49e600",
      icon: (
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          version='1'
          viewBox='0 0 48 48'
          enableBackground='new 0 0 48 48'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#8BC34A'
            d='M43,36H29V14h10.6c0.9,0,1.6,0.6,1.9,1.4L45,26v8C45,35.1,44.1,36,43,36z'
          ></path>
          <path
            fill='#388E3C'
            d='M29,36H5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h22c1.1,0,2,0.9,2,2V36z'
          ></path>
          <g fill='#37474F'>
            <circle cx='37' cy='36' r='5'></circle>
            <circle cx='13' cy='36' r='5'></circle>
          </g>
          <g fill='#78909C'>
            <circle cx='37' cy='36' r='2'></circle>
            <circle cx='13' cy='36' r='2'></circle>
          </g>
          <path
            fill='#37474F'
            d='M41,25h-7c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h5.3c0.4,0,0.8,0.3,0.9,0.7l1.7,5.2c0,0.1,0.1,0.2,0.1,0.3V24 C42,24.6,41.6,25,41,25z'
          ></path>
          <polygon
            fill='#DCEDC8'
            points='21.8,13.8 13.9,21.7 10.2,17.9 8,20.1 13.9,26 24,15.9'
          ></polygon>
        </svg>
      ),
      description:
        "Ejemplo simple de un e-commerce con inicio de sesión con Google.",
      date: "© 20-06-2023",
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
  ]
  return (
    <section className='proyects-section'>
      <h2 id='proyects'>Proyectos</h2>
      <div className='p-container'>
        {proyects.map((proyect, index) => (
          <div className='p-card' key={index}>
            <h3>{proyect.name}</h3>
            <span
              style={{ filter: `drop-shadow(0 0 25px ${proyect.color})` }}
              className='p-svg-icon'
            >
              {proyect.icon}
            </span>
            <p>{proyect.description}</p>
            <p className='p-date'>{proyect.date}</p>
            <div className='tecnology-container'>
              {proyect.tecnologyes.map((t, id) => {
                return (
                  <span className='t-tecnology' key={id}>
                    {t}
                  </span>
                )
              })}
            </div>

            <div className='p-url'>
              <a
                href={proyect.url}
                target='_blank'
                aria-label='Visita el proyecto en cuestión'
                rel='noopener noreferrer'
              >
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
