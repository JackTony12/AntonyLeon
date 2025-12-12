import './styles.css'

const Tools = () => {
  return (
    <div className="tools-container">
      <div className="tools-wrapper">
        {/* Header */}
        <div className="tools-header">
          <h2 className="tools-main-title">Tools</h2>
          <span className="tools-badge">Utilidades</span>
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-card-content">
              <span className="tool-id">TOOL 01</span>
              <h3 className="tool-title">Dictador de texto</h3>
              <p className="tool-description">
                Una herramienta para estudiantes de educación media, convierte texto en voz para que puedas copiarlo fácilmente en tu cuaderno mientras escuchas, puedes ajustarlo a tu ritmo sin perderte, pruebalo ahora.
              </p>
            </div>
            <a target='_blank' href="https://dictador-v2.vercel.app/" className="tool-icon-link">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          <div className="tool-card">
            <div className="tool-card-content">
              <span className="tool-id">TOOL 02</span>
              <h3 className="tool-title">Lista de tareas</h3>
              <p className="tool-description">
                Una app simple y fácil de usar para organizar tus pendientes del día. Agrega, marca como completado o elimina tareas en segundos. Ideal para mantener tu día en orden.
              </p>
            </div>
            <a target='_blank' href="https://todo-list-sigma-one-35.vercel.app/" className="tool-icon-link">
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools