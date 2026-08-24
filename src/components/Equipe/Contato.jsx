import React from 'react'
import './Contato.css'

const Contato = () => {
  return (
    <>
      <h2>Contato</h2>
      <p>Conheça nossa equipe!</p>

      <section className="cards-container">
        <div className="card">
          <h3>Felipe Rabelo</h3>
          <p>Desenvolvedor Front-end</p>
        </div>

        <div className="card">
          <h3>Gustavo Tavares</h3>
          <p>Designer de UI/UX</p>
        </div>

        <div className="card">
          <h3>Ricardo Salmerón</h3>
          <p>Gerente de Projeto</p>
        </div>

      </section>
    </>
  )
}

export default Contato
