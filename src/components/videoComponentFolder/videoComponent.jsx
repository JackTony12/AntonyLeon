import React from "react"
import "./styles.css"
import digital from "../../assets/images/ologram.gif"

const VideoComponent = () => {
  const cheksvg = (
    <svg
      stroke='currentColor'
      fill='currentColor'
      strokeWidth='0'
      viewBox='0 0 16 16'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'></path>
    </svg>
  )
  return (
    <section className='video-section'>
      <h2 className='video-section-text-slogan'>
        Turning ideas into digital experiences
      </h2>
      <div className='ul-digital-contenedor'>
        <div className='ul-text-list-contenedor'>
          <ul className='ul-text-list'>
            <li>{cheksvg} Reliable solutions</li>
            <li>{cheksvg} Clean and structured code</li>
            <li>{cheksvg} Optimization and performance</li>
            <li>{cheksvg} Responsive and user-friendly design</li>
          </ul>
        </div>
        <div className='digital-experience-contenedor'>
          <img loading='lazy' src={digital} alt='DigitalExperience' />
        </div>
      </div>
    </section>
  )
}

export default VideoComponent
