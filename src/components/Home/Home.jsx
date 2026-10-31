
import React from 'react'

const Home = () => {
  return (
    <section id="home" className="text-[var(--text)] mt-16">

      <h1 className="mb-[40px] px-[10%] text-center text-3xl font-bold">
        Uma nova experiência para câmeras de celular
      </h1>

      <h2 className="mb-[30px] px-[10%] text-center text-2xl font-bold">
        Reestruturação da interface do aplicativo com foco em uma experiência mais intuitiva, acessível e eficiente.
      </h2>

      <p className="mb-5 px-[10%] text-justify text-base font-normal">
        A empresa JOVI veio até a nossa equipe com um pedido especial, apresentar uma proposta de reestruturação da UI do aplicativo de câmera nativo dos celulares
        da empresa buscando solucionar problemas encontrados na interface atual e tornar a navegação mais simples e agradável para seus usuários jovens estudantes, como adoramos desafios topamos realizar esse desenvolvimento.
      </p>

      <h2 className="mb-[30px] px-[10%] text-center text-xl font-bold">
        O Problema
      </h2>

      <p className="mb-5 px-[10%] text-justify text-base font-normal">
        Após realizarmos uma pesquisa com o público-alvo do projeto para analisar suas experiências com outros smartphones, muitos usuários enfrentam dificuldades ao utilizar as câmeras de seus dispositivos celulares,
        principalmente com questões de intuitividade da interface, indicando que elas são escondidas, além da falta de explicação clara sobre as funcionalidades
        disponíveis. Isso normalmente leva a frustrações e uma experiência de usuário insatisfatória.
      </p>

      <h2 className="mb-[30px] px-[10%] text-center text-xl font-bold">
        A Solução
      </h2>

      <p className="mb-5 px-[10%] text-justify text-base font-normal">
        Com as ideias da empresa em mente a nossa proposta para o projeto é apresentar uma nova interface para o aplicativo de câmera nativo da JOVI com feedbacks obtidos diretamente com o público-alvo da empresa e desse pequeno projeto que estamos desenvolvendo,
        com o objetivo de melhorar a experiência do usuário, tornando-a mais intuitiva, acessível e eficiente.
      </p>

      <a
        className="mt-[60px] flex justify-center gap-[10px] no-underline"
        href="#publico"
      >
        <button className="cursor-pointer rounded-lg border-0 bg-[var(--card-background)] px-[30px] py-[18px] text-base font-bold text-[var(--text)] transition-colors duration-300 hover:bg-[#555]">
          Conheça o nosso projeto!
        </button>
      </a>

    </section>
  )
}

export default Home
