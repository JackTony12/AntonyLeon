import React from "react"
import "./stylesAcosta.css"
import Products from "./products"
import { useState } from "react"
const DelAcosta = () => {
  const products = Products()
  const [index, setIndex] = useState(0)
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % products.length)
  }
  return (
    <section className='d-section'>
      <div className='d-title-container'>
        <h2>DEL ACOSTA</h2>
        <p>
          Micro Empresa distribuidora de Chile Habanero y Salsa Picante de
          excelente calidad
        </p>
      </div>

      <div className='d-content-container'>
        <div className='d-product-img-container'>
          <div className='d-product-counter'>
            <p>Productos</p>
            <p>{index + 1}/3</p>
          </div>
          <div className='d-product-img'>
            <img src={products[index].img} alt='product-img' />
          </div>
          <button onClick={handleNext}>
            <svg
              stroke='currentColor'
              fill='white'
              strokeWidth='0'
              viewBox='0 0 24 24'
              height='1em'
              width='1em'
            >
              <path
                fill='none'
                strokeWidth='2'
                d='M2,12 L22,12 M13,3 L22,12 L13,21'
              ></path>
            </svg>
          </button>
        </div>

        <div className='d-product-info-container'>
          <div className='d-info'>
            {products[index] && (
              <>
                <h3>{products[index].name}</h3>
                <p>{products[index].desc}</p>
                <p className='d-product-subtitle'>{products[index].subTitle}</p>
                <p>{products[index].subInfo}</p>
                <p>{products[index].ingredients}</p>
                <p>Picor🔥: {products[index].spicy && products[index].spicy}</p>
                {products[index].subTitle ? (
                  <p className='available-product'>Disponible ahora</p>
                ) : (
                  ""
                )}
                {products[index].ingredients && (
                  <p className='available-product'>Disponible ahora</p>
                )}

                <p>
                  <span className='price-span'>{products[index].price}</span>
                  {products[index].dollar &&
                    ` HNL/${products[index].dollar} USD`}
                </p>
              </>
            )}
          </div>

          <div className='d-button'>
            <p>Productos disponibles solo en venta local</p>
            <a href='' rel='where to buy product' target='_blank'>
              ¿Dónde comprar?
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DelAcosta
