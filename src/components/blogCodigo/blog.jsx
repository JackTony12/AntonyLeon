import React from "react"
import "./styles.css"
import blogImg from "../../assets/images/blog.webp"
const Blog = () => {
  return (
    <>
      <h2 className='blog-title'>Personal proyect</h2>
      <section className='blog-section'>
        <div className='blog-text'>
          <div>
            <h2>Code-Blog </h2>
            <p>Learn web development like nowhere else</p>
          </div>
          <div>
            <button>Building...</button>
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
