import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <>
      <section id="contato">
        <h2>Contato</h2>
        <h3>Conheça nossa equipe!</h3>

        <section className="cards-container">
          <div className="card">
            <h3>Felipe Rabelo</h3>
            <img src="/images/foto-felipe.png" alt="Felipe Rabelo" />
            <h4>Desenvolvedor Front-end</h4>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/felipe-rabelo-2199b7291/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-app-icon.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Whipepe" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-app-icon.png" alt="GitHub" />
              </a>
            </div>

          </div>

          <div className="card">
            <h3>Gustavo Tavares</h3>
            <img src="/images/foto-gustavo.png" alt="Gustavo Tavares" />
            <h4>Documentação</h4>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/fgustavot/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-app-icon.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/fgustavot" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-app-icon.png" alt="GitHub" />
              </a>
            </div>
          </div>

          <div className="card">
            <h3>Ricardo Salmerón</h3>
            <img src="/images/foto-ricardo.png" alt="Ricardo Salmerón" />
            <h4>Desenvolvedor Back-end</h4>

            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ricardo-salmerón-620467297/" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-app-icon.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/RicardoSalmeron" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-app-icon.png" alt="GitHub" />
              </a>
            </div>
          </div>

        </section>
      </section>
    </>
  )
}

export default Contato
