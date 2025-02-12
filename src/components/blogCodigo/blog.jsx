import React from "react"
import "./styles.css"
import blogImg from "../../assets/images/blog.webp"
import svgIcons from "../skillComponentFolder/iconsSvg"
const Blog = () => {
  return (
    <>
      <section className='blog-section'>
        <div className='blog-text'>
          <div>
            <h3>Blog de codigo</h3>
            <p>Aprende desarrollo frontend de manera sencilla</p>
            <ul>
              <li>
                <span>{svgIcons[0].icon}</span>Html
              </li>
              <li>
                {" "}
                <span>{svgIcons[1].icon}</span> Css
              </li>
              <li>
                <span>{svgIcons[2].icon}</span>
                Javascript
              </li>
              <li>
                <span>{svgIcons[3].icon}</span>
                React
              </li>
            </ul>
            <p>
              Bases solidas para comenzar,
              <span className='animated-text'>
                {" "}
                enfocado para principiantes
              </span>
            </p>
          </div>
          <div>
            <button>Construyendo...</button>
          </div>
        </div>
        <div className='blog-img-container'>
          <img src={blogImg} alt='blog' />
        </div>
      </section>
    </>
  )
}

export default Blog
