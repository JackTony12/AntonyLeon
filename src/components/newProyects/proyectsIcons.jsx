import React from "react"
import pixabay from "../../assets/pimges/pixabay.webp"
import tres from "../../assets/pimges/tresenraya.webp"
import todo from "../../assets/pimges/todolist.webp"
import ecomerce from "../../assets/pimges/ecommerce.webp"
import color from "../../assets/pimges/color.webp"
import catweb from '../../assets/images/catsweblanding.webp'
import frontends from '../../assets/images/frontends.webp'
import space from '../../assets/pimges/spacerocks.webp'

const ProyectIcons = () => {
  return [
     {
      name: "Frontends",
      color: "#e63d00",
      image: frontends,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path stroke="none" d="M20 3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 14H4V5h16z"/><path stroke="none" d="M6.5 7.5H9V6H5v4h1.5zM19 12h-1.5v2.5H15V16h4z"/></svg>
      ),
      description: "Recursos, librerias, consejos por devs con experiencia, hacks y mucho mas.",
      date: "2025",
      ready: false,
      tecnologyes: ["Astro", "JavaScript ", "HTML", "CSS" , "Typescript","Tailwind"],
      url: "#",
    },
    {
      name: "Space Rocks",
      color: "#e63d00",
      image: space,
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#add8e6" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path stroke="none" d="M328.85 156.79a26.69 26.69 0 1 0 18.88 7.81 26.6 26.6 0 0 0-18.88-7.81"/><path stroke="none" d="M477.44 50.06a.3.3 0 0 1 0-.09 20.4 20.4 0 0 0-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A321 321 0 0 0 169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0 0 27.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 0 0 9.9 20.72l31.39 31.41a34.27 34.27 0 0 0 20.71 9.91l2.15.23-7 64.24v.13A25 25 0 0 0 206 480a25 25 0 0 0 4.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a315 315 0 0 0 33.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53M370.38 224.94a58.77 58.77 0 1 1 0-83.07 58.3 58.3 0 0 1 0 83.07"/><path stroke="none" d="M161.93 386.44a16 16 0 0 0-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 0 0-15.16-24.91A61.25 61.25 0 0 0 72 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A358 358 0 0 0 48 447.59 16 16 0 0 0 64 464h.4a360 360 0 0 0 36.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.5 60.5 0 0 0 17.39-35.74 16 16 0 0 0-13.93-17.82"/></svg>
      ),
      description: "Juego multijugador para competir con tus amigos, jugalo y vencé a todos",
      date: "2025",
      ready: true,
      tecnologyes: ["Astro", "JavaScript ", "HTML", "CSS" , "Typescript"],
      url: "https://space-rocks-git-main-jacktony12s-projects.vercel.app/",
    },
   
    {
      name: "Landing de gatos",
      color: "#e63d00",
      image: catweb,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path stroke="none" d="M290.59 192c-20.18 0-106.82 1.98-162.59 85.95V192c0-52.94-43.06-96-96-96-17.67 0-32 14.33-32 32s14.33 32 32 32c17.64 0 32 14.36 32 32v256c0 35.3 28.7 64 64 64h176c8.84 0 16-7.16 16-16v-16c0-17.67-14.33-32-32-32h-32l128-96v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V289.86c-10.29 2.67-20.89 4.54-32 4.54-61.81 0-113.52-44.05-125.41-102.4M448 96h-64l-64-64v134.4c0 53.02 42.98 96 96 96s96-42.98 96-96V32zm-72 80c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16m80 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16"/></svg>
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
        <svg width="1em" height="1em" fill="#ff4500" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path stroke="none" d="m441 336.2-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.2 266.2 0 0 0 86.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84M112 208a32 32 0 1 1 32 32 32 32 0 0 1-32-32m40 135a32 32 0 1 1 32-32 32 32 0 0 1-32 32m40-199a32 32 0 1 1 32 32 32 32 0 0 1-32-32m64 271a48 48 0 1 1 48-48 48 48 0 0 1-48 48m72-239a32 32 0 1 1 32-32 32 32 0 0 1-32 32"/></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" enableBackground="new 0 0 48 48" viewBox="0 0 48 48"><path fill="#8bc34a" stroke="none" d="M43 36H29V14h10.6c.9 0 1.6.6 1.9 1.4L45 26v8c0 1.1-.9 2-2 2"/><path fill="#388e3c" stroke="none" d="M29 36H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h22c1.1 0 2 .9 2 2z"/><g fill="#37474f" stroke="none"><circle cx="37" cy="36" r="5"/><circle cx="13" cy="36" r="5"/></g><g fill="#78909c" stroke="none"><circle cx="37" cy="36" r="2"/><circle cx="13" cy="36" r="2"/></g><path fill="#37474f" stroke="none" d="M41 25h-7c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h5.3c.4 0 .8.3.9.7l1.7 5.2c0 .1.1.2.1.3V24c0 .6-.4 1-1 1"/><path fill="#dcedc8" stroke="none" d="m21.8 13.8-7.9 7.9-3.7-3.8L8 20.1l5.9 5.9L24 15.9z"/></svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" stroke="currentColor" strokeWidth="0" enableBackground="new 0 0 48 48" viewBox="0 0 48 48"><path fill="#f57c00" stroke="none" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4"/><circle cx="35" cy="16" r="3" fill="#fff9c4" stroke="none"/><path fill="#942a09" stroke="none" d="M20 16 9 32h22z"/><path fill="#bf360c" stroke="none" d="m31 22-8 10h16z"/></svg>
      ),
      description:
        "Sitio para buscar imágenes de alta calidad libres de derechos de autor.",
      date: "2023",
      ready: true,
      tecnologyes: ["React", "JavaScript", "HTML", "CSS", "Sonner"],
      url: "https://jacktony12.github.io/pixabay_imagenes/",
    },
    {
      name: "Tic Tac Toe",
      color: "red",
      image: tres,
      icon: (
        <svg id="Layer_1" width="1em" height="1em" viewBox="0 0 512 512"><path fill="#ff3f62" d="M364.606 162.909h-85.333V77.576c0-12.853-10.42-23.273-23.273-23.273s-23.273 10.42-23.273 23.273v85.333h-85.333C66.121 162.909 0 229.028 0 310.303c0 81.273 66.121 147.394 147.394 147.394a147.5 147.5 0 0 0 30.339-3.154 147 147 0 0 0 39.697-14.562 147 147 0 0 0 20.39-13.315h36.359a147.17 147.17 0 0 0 90.427 31.03c81.273 0 147.394-66.121 147.394-147.394s-66.121-147.393-147.394-147.393"/><path fill="#898890" d="M279.273 162.909V77.576c0-12.853-10.42-23.273-23.273-23.273s-23.273 10.42-23.273 23.273v85.333z"/><path fill="#ffa733" d="m370.091 271.905-43.793 43.793c-.031.031-.064.054-.095.085a22 22 0 0 0-1.553 1.727c-7.014 8.555-7.011 20.933.012 29.483q.726.894 1.541 1.713.827.826 1.733 1.562a23.2 23.2 0 0 0 14.725 5.252 23.2 23.2 0 0 0 14.716-5.246 22 22 0 0 0 1.749-1.569c.039-.039.073-.084.11-.123L403 304.82c9.089-9.089 9.089-23.824 0-32.914-9.084-9.089-23.821-9.089-32.909-.001M178.424 287.03h-7.758v-7.758c0-12.854-10.42-23.273-23.273-23.273s-23.273 10.418-23.273 23.273v7.758h-7.758c-12.853 0-23.273 10.418-23.273 23.273 0 12.851 10.42 23.273 23.273 23.273h7.758v7.758c0 12.851 10.42 23.273 23.273 23.273s23.273-10.422 23.273-23.273v-7.758h7.758c12.853 0 23.273-10.422 23.273-23.273 0-12.854-10.42-23.273-23.273-23.273"/><path fill="#d8143a" d="M232.727 162.909h-85.333C66.121 162.909 0 229.028 0 310.303c0 81.273 66.121 147.394 147.394 147.394a147.18 147.18 0 0 0 90.427-31.03H256V162.909zm-54.303 170.667h-7.758v7.758c0 12.851-10.42 23.273-23.273 23.273s-23.273-10.422-23.273-23.273v-7.758h-7.758c-12.853 0-23.273-10.422-23.273-23.273 0-12.854 10.42-23.273 23.273-23.273h7.758v-7.758c0-12.854 10.42-23.273 23.273-23.273s23.273 10.418 23.273 23.273v7.758h7.758c12.853 0 23.273 10.418 23.273 23.273 0 12.851-10.42 23.273-23.273 23.273"/></svg>
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
