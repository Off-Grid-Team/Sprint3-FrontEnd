import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Home from './components/Home/Home'
import Publico from './components/Publico/Publico'
import Galeria from './components/Galeria/Galeria'
import Equipe from './components/Equipe/Contato'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Topbar />

      <main>
          <Home />
      
          <Publico />
      
          <Galeria />
      
          <Equipe />
      </main>

      <Footer />
    </>
  )
}

export default App
