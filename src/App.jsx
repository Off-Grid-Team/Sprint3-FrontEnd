import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Home from './components/Home/Home'
import Publico from './components/Publico/Publico'
import Galeria from './components/Galeria/Galeria'
import Equipe from './components/Equipe/Contato'

const App = () => {
  return (
    <>
      <Topbar />

      <main>
        <section>
            <Home />
        </section>
        <section>
            <Publico />
        </section>
        <section>
            <Galeria />
        </section>
        <section>
            <Equipe />
        </section>
      </main>
    </>
  )
}

export default App
