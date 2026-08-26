import React from 'react'
import './Publico.css'

const Publico = () => {
  return (
    <>
    <section id="publico">
      <h2>Público Alvo</h2>

        <div className="persona-card">
            <div className="persona-image">
                <img src="/images/persona.png" alt="Foto da persona" />
            </div>

            <div className="persona-info">
                <h3>Enzo, 19 anos</h3>
                <p>Enzo utiliza bastante a câmera do celular e costuma postar frequentemente. Ele quer conseguir tirar fotos e utilizar os recursos da câmera de maneira rápida, mas não costuma explorar muito as funcionalidades disponíveis no aplicativo nativo.</p>

                <div className="persona-details">
                    <div>
                        <h4>Objetivos</h4>
                        <ul>
                            <li>Ter acesso fácil às principais funções da câmera.</li>
                            <li>Consguir utilizar os recursos sem precisar procurar muito.</li>
                            <li>Ter uma experiência mais simples e intuitiva.</li>
                            <li>Tirar e compartilhar fotos com facilidade.</li>
                        </ul>
                    </div>

                    <div>
                        <h4>Dificuldades</h4>
                        <ul>
                            <li>Não explora as funcionalidades mais avançadas.</li>
                            <li>Pode ter dificuldade para descobrir recursos que não estão imediatamente visíveis.</li>
                            <li>Quer praticidade e não deseja perder tempo procurando opções.</li>
                            <li>A interface atual pode dificultar a descoberta e utilização de determinadas funções.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Publico
