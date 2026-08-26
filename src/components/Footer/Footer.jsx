import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <div className="footer-logo">
        <h2>Off-Grid</h2>
      </div>

      <nav className="footer-nav">
        <a href="#home">Home</a>
        <a href="#publico">Público</a>
        <a href="#galeria">Galeria</a>
        <a href="#contato">Contato</a>
      </nav>

      <p className="footer-copy">
        © 2026 Off-Grid. Todos os direitos reservados.
      </p>
    </footer>
    </>
  )
}

export default Footer
