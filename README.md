<h1 align="center">
    <img alt="NotesTitle" title="Notes" src="./assets/Notes.png" />
</h1>


## Descrição do Projeto
<p align="center">Essa API tem como objetivo fornecer uma forma eficiente de se criar um bloco de notas</p>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Também é necessário um servidor de banco de dados, nessa aplicação o serviço escolhido foi o [MySQL](https://www.mysql.com/)

### 🎲 Rodando a API

```bash
# Clone este repositório
$ git clone <https://github.com/felippepg/notes>

# Acesse a pasta do projeto no terminal/cmd
$ cd notes

# Instale as dependências
$ yarn install

# Criar um banco de dados
$ yarn run sequelize db:create


# Cirar as tabelas da aplicação
$ yarn run sequelize db:migrate

# Execute a aplicação em modo de produção
$ yarn run start

# Execute a aplicação em modo de desenvolvimento
$ yarn run start:dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3000>
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção da API:

- [Node.js][nodejs]
- [Mysql][mysql]
- [Sequelize][sequelize]
- [Jest][jest]

## Features

- [x] Cadastro de Notas
- [x] Edição de Notas
- [X] Exclusão de Notas
- [X] Atualização de Notas
