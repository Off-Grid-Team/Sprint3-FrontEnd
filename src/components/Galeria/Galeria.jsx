
import React from 'react'

const Galeria = () => {
  return (
    <section
      id="galeria"
      className="px-5 py-12 text-center text-[var(--text)] sm:px-[6%] sm:py-16 lg:px-[8%] lg:py-20"
    >
      <h2 className="mb-8 sm:mb-[40px] font-bold text-3xl">
        Imagens do Projeto
      </h2>

      {/* Galeria de imagens */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5 lg:grid-cols-3 lg:gap-4 sm:grid-cols-3">

        {/* Tela Inicial */}
        <div className="flex min-w-0 flex-col items-center gap-2">
          <img
            src="/images/tela-inicial.png"
            alt="Tela Inicial"
            className="max-h-[80vh] w-full object-contain rounded-2xl"
          />

          <p className="text-base font-bold">
            Tela Inicial
          </p>
        </div>

        {/* Tela de Informações */}
        <div className="flex min-w-0 flex-col items-center gap-2">
          <img
            src="/images/tela-info.png"
            alt="Tela de Informações"
            className="max-h-[80vh] w-full object-contain rounded-2xl"
          />

          <p className="text-base font-bold">
            Tela de Informações
          </p>
        </div>

        {/* Tela de Lista de Modos */}
        <div className="flex min-w-0 flex-col items-center gap-2">
          <img
            src="/images/tela-modos.png"
            alt="Tela de Lista de Modos"
            className="max-h-[80vh] w-full object-contain rounded-2xl"
          />

          <p className="text-base font-bold">
            Tela de Lista de Modos
          </p>
        </div>

      </div>

      {/* Botão do protótipo */}
      <a
        className="mt-12 flex justify-center no-underline sm:mt-[60px]"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.figma.com/proto/0m8rZT3DurRDQ2TUSxGrQd/JOVI-Sprint-1?node-id=1-11&p=f&t=EzYrxRyagZjv722H-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A11"
      >
        <button className="w-full max-w-[320px] cursor-pointer rounded-lg border-0 bg-[var(--card-background)] px-6 py-[18px] text-base font-bold text-[var(--text)] transition-colors duration-300 hover:bg-[#555] sm:w-auto sm:px-[30px]">
          Experimente nosso Protótipo!
        </button>
      </a>

    </section>
  )
}

export default Galeria
