
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex min-h-[120px] w-full flex-col items-center justify-center gap-5 bg-[#222] px-5 py-6 text-white sm:px-8 lg:flex-row lg:justify-between">

      {/* Logo */}
      <div className="shrink-0">
        <h2 className="text-2xl font-bold">
          Off-Grid
        </h2>
      </div>

      {/* Navegação */}
      <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
        <a
          href="#home"
          className="text-base text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Home
        </a>

        <a
          href="#publico"
          className="text-base text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Público
        </a>

        <a
          href="#galeria"
          className="text-base text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Galeria
        </a>

        <a
          href="#contato"
          className="text-base text-white no-underline transition-colors hover:font-bold hover:text-[#aaa] hover:underline"
        >
          Contato
        </a>
      </nav>

      {/* Direitos autorais */}
      <p className="text-center text-sm sm:text-base lg:text-right">
        © 2026 Off-Grid. Todos os direitos reservados.
      </p>

    </footer>
  )
}

export default Footer
