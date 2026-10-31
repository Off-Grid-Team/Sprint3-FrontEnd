
import React from 'react'

const Contato = () => {
  return (
    <section
      id="contato"
      className="min-h-screen px-[8%] py-20 text-center text-[var(--text)]"
    >
      <h2 className="pb-5 text-3xl font-bold">Contato</h2>
      <h3 className="text-2xl mb-5 font-semibold">Conheça nossa equipe!</h3>

      <div className="mx-auto mt-0 flex flex-wrap items-stretch justify-center gap-[30px]">
        {/* Felipe */}
        <div className="mb-0 w-[280px] max-h-[50vh] rounded-[20px] bg-[var(--card-background)] pt-[30px] text-center transition duration-300 hover:-translate-y-[10px]">
          <h3 className="pb-[15px] text-2xl font-semibold">Felipe Rabelo</h3>

          <img
            src="/images/foto-felipe.png"
            alt="Felipe Rabelo"
            className="mb-[15px] h-auto w-[60%] rounded-full mx-auto"
          />

          <h4 className="text-xl">Desenvolvedor Front-end</h4>

          <div className="mt-5 flex justify-center gap-2 mb-4">
            <a
              href="https://www.linkedin.com/in/felipe-rabelo-2199b7291/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img
                src="/images/linkedin-app-icon.png"
                alt="LinkedIn"
                className="w-[60%] rounded-[15%] transition-transform duration-300"
              />
            </a>

            <a
              href="https://github.com/Whipepe"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img
                src="/images/github-app-icon.png"
                alt="GitHub"
                className="w-[60%] rounded-[15%] transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Gustavo */}
        <div className="mb-0 w-[280px] max-h-[50vh] rounded-[20px] bg-[var(--card-background)] pt-[30px] text-center transition duration-300 hover:-translate-y-[10px]">
          <h3 className="pb-[15px] text-2xl font-semibold">Gustavo Tavares</h3>

          <img
            src="/images/foto-gustavo.png"
            alt="Gustavo"
            className="mb-[15px] h-auto w-[60%] rounded-full mx-auto"
          />

          <h4 className="text-xl">Documentação</h4>

          <div className="mt-5 flex justify-center gap-2 mb-4">
           <a
              href="https://www.linkedin.com/in/fgustavot/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img
                src="/images/linkedin-app-icon.png"
                alt="LinkedIn"
                className="w-[60%] rounded-[15%] transition-transform duration-300"
              />
            </a>

            <a
              href="https://github.com/fgustavot"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img
                src="/images/github-app-icon.png"
                alt="GitHub"
                className="w-[60%] rounded-[15%] transition-transform duration-300"
              />
            </a>
          </div>
        </div>

        {/* Ricardo */}
        <div className="mb-0 w-[280px] max-h-[50vh] rounded-[20px] bg-[var(--card-background)] pt-[30px] text-center transition duration-300 hover:-translate-y-[10px]">
          <h3 className="pb-[15px] text-2xl font-semibold">Ricardo Salmerón</h3>

          <img
            src="/images/foto-ricardo.png"
            alt="Ricardo"
            className="mb-[15px] h-auto w-[60%] rounded-full mx-auto"
          />

          <h4 className="text-xl">Desenvolvedor Back-end</h4>

          <div className="mt-5 flex justify-center gap-2 mb-4">
            <a
              href="https://www.linkedin.com/in/ricardo-salmerón-620467297/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img
                src="/images/linkedin-app-icon.png"
                alt="LinkedIn"
                className="w-[60%] rounded-[15%] transition-transform duration-300"
              />
            </a>

            <a
              href="https://github.com/RicardoSalmeron"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 flex items-center justify-center"
            >
              <img
                src="/images/github-app-icon.png"
                alt="GitHub"
                className="w-[60%] rounded-[15%] transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
