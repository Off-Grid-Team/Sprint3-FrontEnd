import React from 'react'
import './Galeria.css'

const Galeria = () => {
  return (
    <>

      <section id="galeria">
        <h2>Imagens do Projeto</h2>

        <div className="galeria-grid">
          <div className="galeria-item">
            <img src="/images/tela-inicial.png" alt="Imagem 1" />
            <p>Tela Inicial</p>
          </div>
          <div className="galeria-item">
            <img src="/images/tela-info.png" alt="Imagem 2" />
            <p>Tela de Informações</p>
          </div>
          <div className="galeria-item">
            <img src="/images/tela-modos.png" alt="Imagem 3" />
            <p>Tela de Lista de Modos</p>
          </div>
        </div>

        <a className="button-container" target="_blank" href="https://www.figma.com/proto/0m8rZT3DurRDQ2TUSxGrQd/JOVI-Sprint-1?node-id=1-11&p=f&t=EzYrxRyagZjv722H-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A11">
          <button className="botao-pagina" >
            Experimente nosso Protótipo!
          </button>
        </a>
      </section>
    </>
  )
}

export default Galeria
