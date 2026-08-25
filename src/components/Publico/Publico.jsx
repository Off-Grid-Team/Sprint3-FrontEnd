import React from 'react'
import './Publico.css'

const Publico = () => {
  return (
    <>
      <h2>Público Alvo</h2>

      <section className="persona" id="publico">
    <h2>Nosso Público-Alvo</h2>

    <div className="persona-card">
        <div className="persona-image">
            <img src="/images/persona.png" alt="Foto da persona" />
        </div>

        <div className="persona-info">
            <h3>Enzo, 19 anos</h3>
            <p>Estudante universitário</p>

            <div className="persona-details">
                <div>
                    <h4>Objetivos</h4>
                    <p>Utilizar o aplicativo de forma rápida e intuitiva.</p>
                </div>

                <div>
                    <h4>Dificuldades</h4>
                    <p>Encontrar funcionalidades e navegar pela interface.</p>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default Publico
