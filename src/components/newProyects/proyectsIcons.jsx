import React from "react"
import pixabay from "../../assets/pimges/pixabay.webp"
import tres from "../../assets/pimges/tresenraya.webp"
import todo from "../../assets/pimges/todolist.webp"
import ecomerce from "../../assets/pimges/ecommerce.webp"
import color from "../../assets/pimges/color.webp"
import catweb from '../../assets/images/catsweblanding.webp'
import frontends from '../../assets/images/frontends.webp'

const ProyectIcons = () => {
  return [
    {
      name: "Frontends",
      color: "#e63d00",
      image: frontends,
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2zm0 14H4V5h16v12z"></path><path d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"></path></svg>
      ),
      description: "Landing sobre devs frontends, humor, memes, recursos para devs, hacks y más.",
      date: "2025",
      ready: false,
      tecnologyes: ["Astro", "JavaScript ", "HTML", "CSS" , "Typescript","Tailwind"],
      url: "#",
    },
    {
      name: "Landing de gatos",
      color: "#e63d00",
      image: catweb,
      icon: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4zM448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32l-64 64zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16z"></path></svg>
      ),
      description: "Una landing page sobre gatos, con un diseño atractivo y moderno.",
      date: "2025",
      ready: true,
      tecnologyes: ["Astro", "JavaScript ", "HTML", "CSS" , "Typescript"],
      url: "https://cat-web-nu.vercel.app/",
    },
    {
      name: "Color palette",
      color: "#e63d00",
      image: color,
      icon: (
        <svg
          stroke='currentColor'
          fill='orangered'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
        >
          <path d='m441 336.2-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0 0 86.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84zM112 208a32 32 0 1 1 32 32 32 32 0 0 1-32-32zm40 135a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm40-199a32 32 0 1 1 32 32 32 32 0 0 1-32-32zm64 271a48 48 0 1 1 48-48 48 48 0 0 1-48 48zm72-239a32 32 0 1 1 32-32 32 32 0 0 1-32 32z'></path>
        </svg>
      ),
      description: "App de paleta de colores.",
      date: "2024",
      ready: true,
      tecnologyes: ["Next.js", "JavaScript ", "HTML", "CSS"],
      url: "https://color-palette-app-three.vercel.app/",
    },
    {
      name: "E-commerce",
      color: "#49e600",
      image: ecomerce,
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
      date: "2023",
      ready: true,
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
      name: "Free images",
      color: "#e63d00",
      image: pixabay,
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
      date: "2023",
      ready: true,
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sonner"],
      url: "https://jacktony12.github.io/pixabay_imagenes/",
    },
    {
      name: "Todo-list",
      image: todo,
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
      date: "2023",
      ready: true,
      tecnologyes: ["Next.js", "JavaScript", "HTML", "CSS", "React-toastify"],
      url: "https://todo-list-sigma-one-35.vercel.app/",
    },
    {
      name: "Tic Tac Toe",
      color: "red",
      image: tres,
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
      description: "Un juego de 3 en raya ",
      date: "2022",
      ready: true,
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sweetalert"],
      url: "https://jacktony12.github.io/tictac-toe/",
    },
    

   
  ]
}

export default ProyectIcons
