
import React from 'react'

const Topbar = () => {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    const isDark = savedTheme === 'true'

    setDarkMode(isDark)

    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode

    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))

    if (newMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return (
    <header className="fixed left-0 top-0 z-[1000] flex h-16 w-full items-center justify-between bg-[var(--topbar-background)] px-4 text-white transition-colors duration-300 sm:px-5">

      {/* Logo */}
      <div className="shrink-0 text-xl font-bold sm:text-2xl">
        Off-Grid
      </div>

      {/* Menu */}
      <nav className="flex items-center gap-3 text-sm sm:gap-6 sm:text-base">

        <a
          href="#home"
          className="text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Home
        </a>

        <a
          href="#publico"
          className="text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Público
        </a>

        <a
          href="#galeria"
          className="text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Galeria
        </a>

        <a
          href="#contato"
          className="text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Contato
        </a>

        {/* Botão de tema */}
        <button
          onClick={toggleDarkMode}
          aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
          className="cursor-pointer border-0 bg-transparent text-base text-white transition-colors hover:font-bold hover:text-[#555]"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

      </nav>
    </header>
  )
}

export default Topbar
