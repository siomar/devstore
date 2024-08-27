# DevStore

DevStore é uma aplicação de e-commerce desenvolvida com [Next.js](https://nextjs.org/) e [TypeScript](https://www.typescriptlang.org/). Este projeto oferece funcionalidades de busca de produtos e adição de itens ao carrinho de compras.

## Tecnologias Utilizadas

- **Next.js** - Framework React para desenvolvimento de aplicações web server-side rendering (SSR) e static site generation (SSG).
- **TypeScript** - Superset de JavaScript que adiciona tipagem estática ao código.
- **Cypress** - Framework de testes end-to-end que facilita a automação de testes.

## Requisitos

Antes de começar, certifique-se de ter o Node.js e ppm instalados na sua máquina.

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [pnpm](https://pnpm.io/pt/) (gerenciador de pacotes utilizado no projeto)

## Instalação

Clone o repositório e instale as dependências do projeto.

```bash
git clone https://github.com/seu-usuario/devstore.git
cd devstore
pnpm install
```

## Como Executar o Projeto

Para rodar o projeto em ambiente de desenvolvimento, utilize o seguinte comando:

```bash
pnpm run dev
```

O aplicativo estará disponível em http://localhost:3000.

## Construindo para Produção

Para construir a aplicação para produção, use o comando:

```bash
pnpm run build

&

pnpm start
```

## Testes End-to-End com Cypress

Configuração do Cypress

Primeiro, você precisa instalar as dependências do Cypress:

```bash
pnpm install cypress --save-dev
```

Executando os Testes

```bash
pnpm cypress open

& 

pnpm cypress run
```