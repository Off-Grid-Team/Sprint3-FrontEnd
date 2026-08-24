import React from 'react'
import "./Topbar.css"

const Topbar = () => {
  return (
    <>
        <header className="topbar">
            <div className="topbar-logo">
                Off-Grid
            </div>

            <nav className="topbar-menu">
                <a href="#home">Home</a>
                <a href="#publico">Público</a>
                <a href="#galeria">Galeria</a>
                <a href="#contato">Contato</a>
            </nav>

            {/* <button className="topbar-button">
                Sign Up
            </button> */}
        </header>
    </>
  )
}

export default Topbar
