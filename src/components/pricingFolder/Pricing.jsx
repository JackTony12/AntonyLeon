import React from 'react'
import './styles.css'
const Pricing = () => {

    const icono = (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#1bcf93ff" stroke="currentColor" strokeWidth="0" viewBox="0 0 512 512"><path stroke="none" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248M227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001"/></svg>
    )
    const icono2 = (
            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="red" stroke="currentColor" strokeWidth="0" viewBox="0 0 16 16"><path fillRule="evenodd" stroke="none" d="M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4s-3.2.1-4.6-.7-2.5-2-3.1-3.5S.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1m.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1S2.7 4.9 2.3 6.3c-.4 1.3-.4 2.7.2 4q.9 1.95 2.7 3c1.2.7 2.6.9 3.9.6M7.9 7.5 10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7z" clipRule="evenodd"/></svg>
    )


  return (
    <section className='pricing-section' id='pricing'>
    <h2>Planes diseñados para cada necesidad</h2>
    <p>Encuentra el equilibrio entre precio, funcionalidad y crecimiento</p>
    <div className='pricing-contenedor'>
        <div className='pricing-card p-card-1'>
            <div>
                <h3>Básico</h3>
                <p>Landing page económica</p>
            </div>
            <div className='price'>
                <strong>$160</strong>USD<span> / 4,200 Lps</span> 
            </div>
            <div className='p-c-description'>
                <p>Ideal para usuarios individuales / Muestra quién eres</p>
            </div>
            <hr />
            <div className='features'>
                <ul>
                    <li>{icono} Una página (Home, Contacto, Sobre nosotros)</li>
                    <li>{icono} Diseño responsivo</li>
                    <li>{icono} Enlaces a redes sociales</li>
                    <li>{icono} Formulario de contacto</li>
                    <li>{icono} Dominio gratis por 1 año </li>
                    <li>{icono2} Hoisting incluido</li>
                    <li>{icono} SEO básico</li>
                </ul>
            </div>
                <a href="https://wa.me/50499550232?text=Más información sobre el plan Básico🥉" target='_blank'>Más información</a>
        <p className='p-timeout'>Entrega en 1-2 semanas </p>
        </div>
        {/* {====================} */}
        <div className='pricing-card p-card-2'>
            <span className='populartag'>Más popular</span>
            <div>
                <h3>Intermedio</h3>
                <p>Sitio informativo / Negocio estándar</p>
            </div>
            <div className='price'>
                <strong>$249</strong>USD<span> / 6,500 Lps</span> 
            </div>
            <div className='p-c-description'>
                <p>Para negocios que quieren explicar sus servicios</p>
            </div>
            <hr />
            <div className='features'>
                <ul>
                    <li>{icono} 3-5 páginas (Home, Contacto, Servicios, Sobre nosotros)</li>
                    <li>{icono} Enlaces a redes sociales</li>
                    <li>{icono} Diseño más trabajado (tipografías, paleta de colores personalizada)</li>
                    <li>{icono} Formulario de contacto avanzado (con validación).</li>
                    <li>{icono} Dominio gratis por 1 año </li>
                    <li>{icono} Hoisting incluido</li>
                    <li>{icono } Sección de testimonios y galería de proyectos</li>
                    <li>{icono} Soporte por 1 mes </li>
                    <li>{icono} SEO y optimización de contenido</li>
                    <li>{icono} Botón de WhatsApp flotante</li>
                    <li>{icono} Integración básica (Google Maps, WhatsApp)</li>
                </ul>
            </div>
                <a href="https://wa.me/50499550232?text=Más información sobre el plan Intermedio🥈" target='_blank'>Más información</a>
        <p className='p-timeout'>Entrega en 2-3 semanas</p>

        </div>
        {/* {====================} */}
        <div className='pricing-card p-card-3'>
            <div>
                <h3 className='s-title'>Avanzado</h3>
                <p>Sitio personalizado / Profesional</p>
            </div>
            <div className='price'>
                <strong>$399</strong>USD<span> / 10,400 Lps</span> 
            </div>
            <div className='p-c-description'>
                <p>Para clientes que quieren algo más completo</p>
            </div>
            <hr />
            <div className='features'>
                <ul>
                    <li>{icono} 5-10 páginas (Home, Blog, Tienda, Servicios, Contacto)</li>
                    <li>{icono} Animaciones y secciones interactivas</li>
                    <li>{icono} Diseño más premium con efectos modernos (parallax, glassmorphism, dark mode).</li>
                    <li>{icono} Formulario de contacto avanzado (con validación).</li>
                    <li>{icono} Soporte por 2 meses (corrección de bugs y asesoría técnica)</li>
                    <li>{icono} Integración con Google Analytics o Search Console</li>
                    <li>{icono} Dominio gratis por 2 años </li>
                    <li>{icono} Hoisting incluido</li>
                    <li>{icono} Enlaces a redes sociales</li>
                    <li>{icono} SEO avanzado</li>
                </ul>
            </div>
                <a href="https://wa.me/50499550232?text=Más información sobre el plan Avanzado🥇" target='_blank'>Más información  </a>
        <p className='p-timeout'>Entrega en 1 mes</p>

        </div>
    </div>

</section>

  )
}

export default Pricing