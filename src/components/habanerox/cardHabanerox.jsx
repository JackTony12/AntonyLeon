import React from "react"
import { useState } from "react"
import "./styles.css"
import tray from "../../assets/images/bandejaCerrada.webp"
import tray2 from "../../assets/images/bandejaAbierta.webp"
import chile from "../../assets/images/chile.webp"
import habaneroBottle from "../../assets/images/habaneroxbottle.webp"
import habanerox from "../../assets/images/habanerox.webp"
const CardHabanerox = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <section className='card-section'>
      <h2>Sub brands</h2>
      <div className='card-container'>
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          onClick={handleClick}
        >
          <div className='card-inner'>
            <div className='card-front'>
              <img src={habanerox} alt='Random' className='card-image' />
              <p className='card-description'>
                Habanerox is a micro distribution company of high quality
                habanero peppers harvested in La Paz, Honduras.
              </p>
              <img className='chile' src={chile} alt='chile' />
              <p>Click to see more</p>
              <span className='local-only'>products for local sale only</span>
            </div>
            <div className='card-back'>
              <h3>THE MOST SPICY</h3>
              <div className='salsa-picante'>
                <img src={habaneroBottle} alt='bottle' />
                <div>
                  <h3>HOT SUACE</h3>
                  <span className='out'>Not available</span>
                  <p className='price'>Price</p>
                  <p>
                    <big>45</big>HNL
                  </p>
                  <p>$1.80 USD</p>
                  <p className='salsa-description'>
                    A sauce with an incomparable flavor and the fury of the
                    habanero inside. Do you dare to try it?
                  </p>
                </div>
              </div>
              <h3>THE MOST FEARED</h3>
              <div className='tray-section'>
                <div className='tray-images'>
                  <img className='tray-closed' src={tray} alt='tray-closed' />
                  <img className='tray-opened' src={tray2} alt='tray-opened' />
                </div>
                <div className='tray-info'>
                  <h3>High quality peppers</h3>
                  <span className='avalible'>Available</span>
                  <p className='price'>Price</p>
                  <p>
                    <big>25</big>
                    HNL
                  </p>
                  <p>$1 USD</p>
                  <a
                    href='https://maps.app.goo.gl/yCeoccsMG2zkvcwn7'
                    target='_blank'
                  >
                    Where to buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardHabanerox
