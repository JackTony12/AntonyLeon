import React from "react"
import "./styles.css"
import bote from "../../assets/images/boteSalsa.webp"
import tazon from "../../assets/images/taza de habaneros.webp"

const DelAcosta = () => {
  return (
    <>
      <section className='delacosta-section'>
        <div className='del-left-side'>
          <div className='left-img-title'>
            <p className='delacosta-title'>DEL ACOSTA</p>
            <div className='left-description'>
              <p>
                DEL ACOSTA es una microempresa distribuidora de salsa picante y
                chile habanero de alta calidad, los productos son elaborados en
                la ciudad de La Paz, Honduras.
              </p>
              <div className='left-button-container'>
                <div>
                  <a
                    target='_blank'
                    href='https://www.google.com/maps/place/Pulperia+Maria+y+Jose/@14.3119759,-87.6850767,20z/data=!4m6!3m5!1s0x8f65835a0d3b75b5:0xb751535423e40617!8m2!3d14.3120012!4d-87.6851094!16s%2Fg%2F11y1l4dr9m?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D'
                  >
                    Donde comprar
                  </a>
                </div>
                <span>Productos solo en venta local</span>
              </div>
            </div>
          </div>
        </div>
        <div className='del-right-side'>
          <div className='bottle-container'>
            <div className='bottle-info-container'>
              <p className='bottle-title'>LA MAS PICANTE</p>
              <p className='stock'>
                Disponible <span className='stock-dot'></span>
              </p>
              <p className='bottle-info'>
                Una salsa con un sabor incomparable y la furia del chile
                habanero dentro ¿Te atreves a probarla?
              </p>
              <div className='price'>
                <p>
                  <span>38</span>HNL<span>/$1.50USD</span>
                </p>
              </div>
            </div>
            <div className='bottle-img'>
              <img src={bote} alt='hotsuace' />
            </div>
          </div>

          <div className='tazon-container'>
            <div className='tazon-info-container'>
              <p className='tazon-title'>EL MAS TEMIDO</p>
              <p className='stock'>
                Disponible <span className='stock-dot'></span>
              </p>
              <p className='tazon-info'>
                Chiles habaneros de exelente calidad cosechados en la paz
                honduras
              </p>
              <div className='price'>
                <p>
                  <span>50</span>HNL
                  <span>
                    /$1.98USD/<small>Lbr</small>
                  </span>
                </p>
              </div>
            </div>
            <div className='tazon-img'>
              <img src={tazon} alt='peppers' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DelAcosta
