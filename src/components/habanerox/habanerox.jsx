import React from "react"
import "./styles.css"
import chile from "../../assets/images/chile.webp"
import habaneroBottle from "../../assets/images/habaneroxbottle.webp"
import habanerox from "../../assets/images/habanerox.webp"
const Habanerox = () => {
  return (
    <section className='habanerox-section'>
      <h2>Sub-brands</h2>
      <div className='habanerox-card'>
        <div className='right-modal'>
          <p>
            High quality peppers <br />{" "}
            <span style={{ color: "red" }}>Strong spicy flavor</span> <br />{" "}
            Would you try it?
          </p>

          <div className='habanerox-bottle-contenedor'>
            <img src={habaneroBottle} alt='habanerox bottle' />
          </div>
          <a href='https://maps.app.goo.gl/yCeoccsMG2zkvcwn7' target='_blank'>
            Where to buy?
          </a>
        </div>
        <div className='habanerox-img'>
          <img src={habanerox} alt='Habanerox' />
        </div>

        <p>
          Habanerox is a micro-enterprise that distributes habanero chili hot
          sauce, created in 2023 by Antony Leon.
        </p>
        <div className='chile-img'>
          <img src={chile} alt='habanero' />
        </div>
        <div>
          <p>The product is only available for sale locally</p>
        </div>
      </div>
    </section>
  )
}

export default Habanerox
