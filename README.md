# Off-Grid — Reestruturação de UI

Landing page desenvolvida para apresentar um projeto de reestruturação da interface de um aplicativo. O projeto apresenta a proposta de redesign, o público-alvo, imagens das novas interfaces e informações sobre a equipe responsável.

## Tecnologias utilizadas

- **React** — desenvolvimento da interface e organização da aplicação em componentes reutilizáveis.
- **JavaScript** — lógica e interações da aplicação.
- **HTML/JSX** — estrutura dos componentes e das seções da landing page.
- **Tailwind CSS 4** — estilização da interface por meio de classes utilitárias, facilitando a manutenção dos estilos e a criação de layouts responsivos.
- **CSS** — definição de estilos globais, variáveis de cores e personalização do tema da aplicação.
- **Vite** — ferramenta utilizada para desenvolvimento e execução do projeto React.
- **localStorage** — armazenamento local das preferências do usuário, como a configuração do modo noturno.

## Como instalar as dependências

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
2. Clone este repositório ou abra a pasta do projeto no terminal.
3. Execute o seguinte comando:

```bash
npm install
```

Esse comando instala todas as dependências necessárias para executar o projeto.

## Como executar o projeto

Após instalar as dependências, execute:

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento. O terminal exibirá o endereço local para acessar a aplicação, normalmente:

```text
http://localhost:5173
```

Para encerrar o servidor, pressione `Ctrl + C` no terminal.

## Autenticação

O projeto **não possui sistema de autenticação**.

Portanto, não são necessários usuários ou senhas para acessar e testar a aplicação.

## Estrutura da página

A landing page é organizada em quatro seções principais:

- **Home** — apresentação e descrição do projeto de reestruturação da interface.
- **Público** — apresentação do público-alvo e da persona considerada durante o desenvolvimento da proposta.
- **Galeria** — apresentação visual das telas e dos resultados do projeto.
- **Contato** — informações e formas de contato dos integrantes da equipe.

A navegação entre as seções é realizada por meio da Topbar.

## Estilização e responsividade

A interface utiliza **Tailwind CSS 4** para organizar os estilos diretamente nas classes dos componentes React, reduzindo a necessidade de arquivos CSS individuais para cada seção.

A responsividade é implementada por meio das classes responsivas do Tailwind, que permitem adaptar o layout a diferentes tamanhos de tela, como celulares, tablets e computadores.

O projeto também utiliza variáveis CSS para definir cores e facilitar a personalização dos temas claro e escuro. A preferência pelo modo noturno é armazenada no `localStorage`, permitindo que a configuração seja mantida entre visitas à aplicação no mesmo navegador.

## Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto. Ela foi empregada principalmente para auxiliar na revisão de trechos de código em **React, JavaScript, CSS e Tailwind CSS**, esclarecer dúvidas sobre conceitos e funcionalidades dessas tecnologias, sugerir estruturas de componentes e layouts para a landing page e auxiliar na identificação e correção de problemas durante a implementação.

A IA também foi utilizada como apoio para ideias relacionadas à organização da interface, à responsividade e à experiência do usuário. As decisões finais de implementação, adaptação do código e desenvolvimento do projeto foram realizadas pela equipe.

## Equipe

- **Felipe Rabelo** — Desenvolvedor Front-end — RM570340
- **Gustavo Tavares** — Designer de UI/UX — RM569928
- **Ricardo Salmerón** — Gerente de Projeto — RM572916
