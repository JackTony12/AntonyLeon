import React from "react"
import "./styles.css"
import blogImg from "../../assets/images/blog.webp"
const Blog = () => {
  return (
    <>
      <section className='blog-section'>
        <div className='blog-text'>
          <div>
            <h3>Blog de codigo</h3>
            <p>Aprende desarrollo web de la forma mas sencilla</p>
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
