
import React from 'react'

const Publico = () => {
  return (
    <section
      id="publico"
      className="px-5 py-12 text-center text-[var(--text)] sm:px-[6%] sm:py-16 lg:px-[8%] lg:py-20"
    >
      <h2 className="mb-8 sm:mb-[40px] text-3xl font-bold">
        Público Alvo
      </h2>

      <div className="flex min-h-0 flex-col items-center gap-8 rounded-[24px] bg-[var(--card-background)] px-6 py-8 sm:gap-10 sm:px-8 sm:py-10 md:flex-row md:items-center md:rounded-[32px] md:px-[5%] md:py-12 lg:min-h-[80vh] lg:gap-[40px] lg:px-[8%] lg:py-[60px]">

        {/* Imagem do Enzo */}
        <div className="flex w-full shrink-0 items-center justify-center md:w-[35%]">
          <img
            src="/images/persona.png"
            alt="Foto da persona"
            className="max-h-[35vh] w-auto max-w-full object-contain sm:max-h-[40vh] md:max-h-[55vh] lg:max-h-[65vh]"
          />
        </div>

        {/* Informações da persona */}
        <div className="flex min-w-0 w-full flex-1 flex-col justify-center gap-5 text-center">

          <h3 className="text-xl font-semibold sm:text-2xl">
            Enzo, 19 anos
          </h3>

          <p className="mb-[10px] text-justify text-sm leading-relaxed sm:text-base">
            Enzo utiliza bastante a câmera do celular e costuma postar frequentemente. Ele quer conseguir tirar fotos e utilizar os recursos da câmera de maneira rápida, mas não costuma explorar muito as funcionalidades disponíveis no aplicativo nativo.
          </p>

          {/* Objetivos e dificuldades */}
          <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-2 sm:gap-5">

            {/* Objetivos */}
            <div className="min-w-0">
              <h4 className="mb-4 text-lg font-medium sm:mb-5">
                Objetivos
              </h4>

              <ul className="list-disc space-y-[10px] pl-5 text-sm leading-relaxed sm:text-base">
                <li>
                  Ter acesso fácil às principais funções da câmera.
                </li>

                <li>
                  Conseguir utilizar os recursos sem precisar procurar muito.
                </li>

                <li>
                  Ter uma experiência mais simples e intuitiva.
                </li>

                <li>
                  Tirar e compartilhar fotos com facilidade.
                </li>
              </ul>
            </div>

            {/* Dificuldades */}
            <div className="min-w-0">
              <h4 className="mb-4 text-lg font-medium sm:mb-5">
                Dificuldades
              </h4>

              <ul className="list-disc space-y-[10px] pl-5 text-sm leading-relaxed sm:text-base">
                <li>
                  Não explora as funcionalidades mais avançadas.
                </li>

                <li>
                  Pode ter dificuldade para descobrir recursos que não estão imediatamente visíveis.
                </li>

                <li>
                  Quer praticidade e não deseja perder tempo procurando opções.
                </li>

                <li>
                  A interface atual pode dificultar a descoberta e utilização de determinadas funções.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Publico
