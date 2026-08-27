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
            <p>Desenvolvedor Front-end</p>
          </div>

          <div className="card">
            <h3>Gustavo Tavares</h3>
            <p>Documentação</p>
          </div>

          <div className="card">
            <h3>Ricardo Salmerón</h3>
            <p>Desenvolvedor Back-end</p>
          </div>

        </section>
      </section>
    </>
  )
}

export default Contato
