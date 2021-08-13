# 👨‍🏫Instruções

### 👨‍💻Clonar projeto

-Clone o projeto na sua máquina; <br>
-Com o projeto clonado, realize a instalação das dependências de preferência com o ```yarn```<br>

### ⚙Configurando 

-Caso deseje executar a API da mesma forma, será necessário a instalação do MongoDB<br>
-Se deseja utilizar a porta padrão do MongoDB, a porta 3333 do servidor node e a porta 400 padrão do graphql, não precisa fazer nada :)<br>


### 🗃Rodando API

-Com tudo configurado basta executar o servidor normalmente, caso queira, verifique o ```package.json``` para utilizar os scripts de execução;<br>

### 💻🖱Testando rotas
-Para executar o servidor rode ```yarn dev:server```<br>
-Após a execução do servidor, execute uma requisição do tipo **POST** como teste na rota ```http://localhost:4000/graphql``` utilizando o Insomnia ou outro de sua preferência, enviando os seguintes dados em JSON:<br>

#### Listagem de Pokémon
-Basta realizar a busca com a query desejada, abaixo uma query de exemplo conforme o desafio proposto:

```graphql

query  {
  pokemons {
    generation,is_legendary,type1,type2,abilities
  }
}

```




### 🔗Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:<br>

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [MongoDB](https://www.mongodb.com/pt-br)
- [Mongoose](https://mongoosejs.com/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)

