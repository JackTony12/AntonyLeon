import React from 'react'
import './styles.css'
import terms from '../../assets/Cv/Terminos_y_Condiciones_Planes_AntonyLeonel.pdf'
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
                <div className='price-variant'>
                <div><strong>$160</strong> <span>USD</span></div> <div className='price-max'><span>Hasta</span>$300</div>
                </div>
                <span>4,200 / 8,000 Lps</span> 
            </div>
            <div className='p-c-description'>
                <p>Ideal para usuarios individuales / Muestra quién eres</p>
            </div>
            <hr />
            <div className='features'>
                <ul>
                    <li>{icono} 1 a 5 secciones en una sola página (o hasta 3-4 páginas separadas)</li>
                    <li>{icono} Diseño responsivo</li>
                    <li>{icono} Animaciones básicas</li>
                    <li>{icono} Enlaces a redes sociales</li>
                    <li>{icono} Formulario de contacto</li>
                    <li>{icono} Dominio gratis por 1 año </li>
                    <li>{icono} Hoisting incluido</li>
                </ul>
            </div>
                <a className='pricing-link' href="https://wa.me/50499550232?text=Más información sobre el plan Básico🥉" target='_blank'>Más información</a>
        <p className='p-timeout'>Entrega en 1 semana </p>
        
        </div>
        {/* {====================} */}
        <div className='pricing-card p-card-2'>
            <span className='populartag'>Más popular</span>
            <div>
                <h3>Intermedio</h3>
                <p>Sitio informativo / Negocio estándar</p>
            </div>
            <div className='price'>
                <div className='price-variant'>
                <div><strong>$249</strong> <span>USD</span></div> <div className='price-max'><span>Hasta</span>$500</div>
                </div>
                <span>6,500 / 13,000 Lps</span> 
            </div>
            <div className='p-c-description'>
                <p>Para negocios que quieren explicar sus servicios</p>
            </div>
            <hr />
            <div className='features'>
                <ul>
                    <li>{icono} Diseño más trabajado (tipografías, paleta de colores personalizada)</li>
                    <li>{icono} Integración básica (Google Maps, WhatsApp)</li>
                    <li>{icono} Galería de imágenes o portafolio</li>
                    <li>{icono} SEO y optimización de contenido</li>
                    <li>{icono} Botón de WhatsApp flotante</li>
                    <li>{icono} Dominio gratis por 1 año </li>
                    <li>{icono} Diseño semi-personalizado</li>
                    <li>{icono} Enlaces a redes sociales</li>
                    <li>{icono} Sección de testimonios</li>
                    <li>{icono} Formulario de contacto</li>
                    <li>{icono} Hoisting incluido</li>
                </ul>
            </div>
                <a className='pricing-link' href="https://wa.me/50499550232?text=Más información sobre el plan Intermedio🥈" target='_blank'>Más información</a>
        <p className='p-timeout'>Entrega en 2 semanas</p>

        </div>
        {/* {====================} */}
        <div className='pricing-card p-card-3'>
            <div>
                <h3 className='s-title'>Avanzado</h3>
                <p>Sitio personalizado / Profesional</p>
            </div>
            <div className='price'>
              <div className='price-variant'>
                <div><strong>$399</strong> <span>USD</span></div> <div className='price-max'><span>Hasta</span>$700</div>
                </div>
                <span>10,400 / 18,000 Lps</span> 
            </div>
            <div className='p-c-description'>
                <p>Para clientes que quieren algo más completo</p>
            </div>
            <hr />
            <div className='features'>
                <ul>
                    <li>{icono} Diseño 100% personalizado desde cero, identidad visual única</li>
                    <li>{icono} Diseño más premium con efectos modernos (parallax, glassmorphism, dark mode).</li>
                    <li>{icono} Animaciones avanzadas (GSAP, transiciones, efectos scroll)</li>
                    <li>{icono} Rendimiento optimizado (Core Web Vitals)</li>
                    <li>{icono} Soporte por 2 meses (corrección de bugs y asesoría técnica)</li>
                    <li>{icono} Integración con Google Analytics o Search Console</li>
                    <li>{icono} Integración con APIs externas</li>
                    <li>{icono} Dominio gratis por 2 años </li>
                    <li>{icono} Enlaces a redes sociales</li>
                    <li>{icono} Formulario de contacto </li>
                    <li>{icono} Múltiples idiomas (si aplica)</li>
                    <li>{icono} Hoisting incluido</li>
                    <li>{icono} SEO avanzado</li>
                </ul>
            </div>
                <a className='pricing-link' href="https://wa.me/50499550232?text=Más información sobre el plan Avanzado🥇" target='_blank'>Más información  </a>
        <p className='p-timeout'>Entrega en 3 semanas</p>

        </div>
    </div>
    <div className='pricing-terms'><a href={terms} target='_blank' className='terms-link'>Términos y condiciones</a>
    </div>
</section>

  )
}

export default Pricing