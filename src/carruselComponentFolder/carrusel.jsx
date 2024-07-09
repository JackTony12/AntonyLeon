import React, { useState, useEffect } from "react"
import img1 from "/AntonyLeon/assets/images/choza2.webp"
import img2 from "/AntonyLeon/assets/images/carrito.webp"
import img3 from "/AntonyLeon/assets/images/cocina.webp"
import "./styles.css"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [img1, img2, img3]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='carousel-container'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`image-wrapper ${currentIndex === index ? "" : "hidden"}`}
        >
          <img src={image} alt={`Imagen ${index + 1}`} />
        </div>
      ))}
    </div>
  )
}

export default Carousel
