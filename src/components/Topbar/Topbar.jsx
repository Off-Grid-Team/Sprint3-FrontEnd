import React from 'react'
import "./Topbar.css"

const Topbar = () => {
  return (
    <>
        <header className="topbar">
            <div className="topbar-logo">
                App
            </div>

            <nav className="topbar-menu">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            {/* <button className="topbar-button">
                Sign Up
            </button> */}
        </header>
    </>
  )
}

export default Topbar
