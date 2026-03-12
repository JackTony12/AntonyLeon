const services = [
  {
    title: "Soluciones confiables",
    color: "#ff0000",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#fff" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16"><path stroke="none" d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708z"/><path stroke="none" d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.5 1.5 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03"/><path stroke="none" d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/></svg>
    ),
    description:
      "Desarrollo de proyectos sólidos, funcionales y escalables, garantizandote calidad y cumplimiento de plazos.",
  },
  {
    title: "Código limpio y estructurado",
    color: "#0099ff",

    description:
      "Implementación de prácticas de desarrollo que facilitan la lectura, el mantenimiento y la colaboración en equipo.",

    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#fff" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path stroke="none" d="M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5m3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3z"/></svg>
    ),
  },
  {
    title: "Optimización y rendimiento",
    color: "#00ff00",

    description:
      "Creación de aplicaciones eficientes y rápidas, enfocadas para brindar una experiencia fluida al usuario.",

    svg: (
      <svg width="1em" height="1em" fill="white" stroke="red" strokeWidth="0" viewBox="0 0 24 24"><path fill="white" fillRule="evenodd" stroke="none" d="M11 9v4.17a3.001 3.001 0 1 0 2 0V9zm0 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clipRule="evenodd"/><path fill="white" stroke="none" d="M12 5a7 7 0 0 1 7 7v1h-2v-1a5 5 0 0 0-10 0v1H5v-1a7 7 0 0 1 7-7"/><path fill="white" fillRule="evenodd" stroke="none" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18" clipRule="evenodd"/></svg>
    ),
  },
  {
    title: "Diseño responsive",
    color: "#ff004c",

    description:
      "Interfaces adaptables a cualquier dispositivo, garantizando una navegación cómoda y accesible.",

    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#fff" stroke="currentColor" strokeWidth="0" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path stroke="none" d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2zM7 3h10v1H7zm10 18H7v-1h10zm3.38-11.38L21 11l.62-1.38L23 9l-1.38-.62L21 7l-.62 1.38L19 9z"/><path stroke="none" d="m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-.62 1.38L19 15l1.38.62L21 17l.62-1.38L23 15l-1.38-.62z"/></svg>
    ),
  },
  {
    title: "Posicionamiento SEO",
    color: "#ff4800",

    description:
      "Estrategias para mejorar la visibilidad y el alcance de tus proyectos en motores de búsqueda.",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#fff" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path stroke="none" d="m505.04 442.66-99.71-99.69c-4.5-4.5-10.6-7-17-7h-16.3c27.6-35.3 44-79.69 44-127.99C416.03 93.09 322.92 0 208.02 0S0 93.09 0 207.98s93.11 207.98 208.02 207.98c48.3 0 92.71-16.4 128.01-44v16.3c0 6.4 2.5 12.5 7 17l99.71 99.69c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.59.1-33.99m-297.02-90.7c-79.54 0-144-64.34-144-143.98 0-79.53 64.35-143.98 144-143.98 79.54 0 144 64.34 144 143.98 0 79.53-64.35 143.98-144 143.98m.02-239.96c-40.78 0-73.84 33.05-73.84 73.83 0 32.96 48.26 93.05 66.75 114.86a9.24 9.24 0 0 0 14.18 0c18.49-21.81 66.75-81.89 66.75-114.86 0-40.78-33.06-73.83-73.84-73.83m0 96c-13.26 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24"/></svg>
    ),
  },
]
export default services
