# TechNova - JOVI

Site institucional da **TechNova**, empresa fictícia que apresenta o **JOVI**, uma solução que usa a câmera como ferramenta de aprendizagem para estudantes. O projeto foi desenvolvido na Sprint 3 e migrado de HTML, CSS e JavaScript puros para **React** com **Tailwind CSS**.

Link do Deploy: https://front-sprint3-4.vercel.app/
Link do Repositório: https://github.com/LeoScalisse/front-sprint3-4

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Páginas e rotas](#páginas-e-rotas)
- [Como instalar as dependências](#como-instalar-as-dependências)
- [Como executar o projeto](#como-executar-o-projeto)
- [Scripts disponíveis](#scripts-disponíveis)
- [API de pesquisa (Wikipedia)](#api-de-pesquisa-wikipedia)
- [Problemas comuns](#problemas-comuns)
- [Versão anterior](#versão-anterior)
- [Equipe](#equipe)

## Funcionalidades

- Navegação entre páginas sem recarregar o site (React Router).
- Cabeçalho responsivo, com menu em formato hambúrguer em telas pequenas.
- Apresentação da solução, do público-alvo, da galeria de fotos e da equipe.
- Pesquisa de temas de estudo na página **Solução**, com resumo de artigos da Wikipedia.
- Layout responsivo, com estilização feita em Tailwind CSS.

## Tecnologias utilizadas

- [React 19](https://react.dev/) — construção da interface com componentes.
- [React Router 8](https://reactrouter.com/) — rotas e navegação.
- [Vite 8](https://vite.dev/) — ambiente de desenvolvimento e build.
- [Tailwind CSS 4](https://tailwindcss.com/) — estilização, com o plugin `@tailwindcss/vite`.
- JavaScript (ES Modules).
- [API REST da Wikipedia](https://pt.wikipedia.org/api/rest_v1/) — resumos de artigos, gratuita e sem chave de acesso.
- ESLint — análise estática do código.

## Estrutura do projeto

```text
.
├── legacy/                       # Versão anterior em HTML, CSS e JavaScript
├── public/
│   └── images/                   # Imagens da home, da galeria e da equipe
├── src/
│   ├── components/
│   │   ├── Footer.jsx            # Rodapé
│   │   ├── Header.jsx            # Cabeçalho e menu de navegação
│   │   └── PesquisaWikipedia.jsx # Pesquisa de temas na API da Wikipedia
│   ├── pages/
│   │   ├── Equipe.jsx            # Integrantes do grupo
│   │   ├── Galeria.jsx           # Fotos do projeto
│   │   ├── Home.jsx              # Página inicial
│   │   ├── Publico.jsx           # Público-alvo
│   │   └── Solucao.jsx           # Recursos da solução e pesquisa de temas
│   ├── App.jsx                   # Estrutura da página e rotas
│   ├── index.css                 # Importação do Tailwind
│   └── main.jsx                  # Ponto de entrada React
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Páginas e rotas

| Rota | Página | Conteúdo |
| --- | --- | --- |
| `/` | Home | Apresentação da TechNova e link para a solução. |
| `/solucao` | Solução | Recursos do JOVI e a pesquisa de temas. |
| `/publico` | Público-alvo | Estudantes, educadores e instituições. |
| `/galeria` | Galeria | Fotos do projeto. |
| `/equipe` | Nossa equipe | Integrantes e suas funções. |

## Como instalar as dependências

Pré-requisitos: [Node.js](https://nodejs.org/) 20 ou superior e npm.

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção e visualizá-la localmente:

```bash
npm run build
npm run preview
```

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com recarregamento automático. |
| `npm run build` | Gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente o build gerado. |
| `npm run lint` | Executa a verificação de estilo e possíveis problemas com ESLint. |

## API de pesquisa (Wikipedia)

Na página **Solução**, a seção **Pesquise um tema** permite digitar um assunto de estudo, como "Fotografia", e ver um resumo do artigo correspondente na Wikipedia em português.

- **Endpoint:** `GET https://pt.wikipedia.org/api/rest_v1/page/summary/{título}`
- **Autenticação:** não é necessária.
- **Componente:** `src/components/PesquisaWikipedia.jsx`, que usa `fetch` e o estado do React.
- **Dados exibidos:** título, descrição curta, miniatura (quando existe), resumo e link para o artigo completo.

Situações tratadas:

| Situação | Mensagem exibida |
| --- | --- |
| Campo vazio | Nada acontece e nenhuma requisição é feita. |
| Artigo não encontrado (404) | "Não encontramos esse tema." |
| Termo com vários significados | "Esse termo tem vários significados." |
| Falha de rede ou do servidor | "Não foi possível pesquisar agora." |

Observações:

- A busca é feita pelo título do artigo, então a escrita precisa ser próxima à da Wikipedia (por exemplo, com acentos).
- O texto digitado é enviado à Wikipedia. Nenhum outro dado da pessoa usuária é enviado.
- Trata-se de uma pesquisa de conteúdo, e não de um recurso de inteligência artificial.

## Problemas comuns

**Erro `Could not resolve '@tailwindcss/vite'` ao executar o projeto ou o build.**
Os pacotes do Tailwind não estão instalados. Instale-os e confirme que ficaram registrados no `package.json`:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

## Versão anterior

A pasta `legacy/` guarda a primeira versão do site, feita em HTML, CSS e JavaScript puros. Ela é mantida apenas como referência e não faz parte da aplicação React.

## Equipe

| Integrante | Função |
| --- | --- |
| Allan Ragazzo Freire | Desenvolvimento front-end |
| Danillo Roque Souza Machado | Pesquisa e requisitos |
| Leonardo Scalisse Silva | Design e experiência |
| Pietro Schimidt Ruotolo | Desenvolvimento front-end |
| Valdemar da Rocha Formiga Neto | Estratégia e apresentação |
