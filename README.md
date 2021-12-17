# new-opportunities

## Aplicação de compartilhamento de oportunidades da ária de TI

[![GitHub issues](https://img.shields.io/github/issues/josedembo/new-opportunities)](https://github.com/josedembo/new-opportunities/issues)
[![GitHub forks](https://img.shields.io/github/forks/josedembo/new-opportunities)](https://github.com/josedembo/new-opportunities/network)
[![GitHub stars](https://img.shields.io/github/stars/josedembo/new-opportunities)](https://github.com/josedembo/new-opportunities/stargazers)
[![GitHub license](https://img.shields.io/github/license/josedembo/new-opportunities)](https://github.com/josedembo/new-opportunities/blob/main/LICENSE)

O new-opportunities é uma aplicação dedica ao compartilhamento de oportunidades na ária de TI através de vários tipos de postagens como, cursos de formação total ou parciamente financiados, oportunidades de emprego, e demais oportunidades da ária de TI.

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#new-opportunities)
   * [Tabela de Conteudo](#tabela-de-conteúdos)
   * [Como rodar o projeto](#como-rodar-o-projeto)
      * [Pre Requisitos](#pré-requisitos)
      * [dependecias](#dependecias)
      * [Rodando a aplicação](#rodando-a-aplicação)
   * [Tecnologias](#tecnologias)
   * [new-opportunities API ](#new-opportunities-API)
     * [User](#user)
     * [Post](#post)
   * [Autor](#autor)
<!--te-->

# Como Rodar o projeto

### Pré-requisitos

Antes de começar a rodar o projeto, você vai precisar instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [postgres](https://www.postgresql.org/download/)  e [docker](https://docs.docker.com/get-docker/)(opcional)

Após isso é recomendável a instalação de um editor de código(caso não tenha), como o [VSCode](https://code.visualstudio.com/)

Posterirormente após fazer o clone do repositório e acessar a pasta new-opportunities crie uma arquivo `.env` com a variavel de ambiente de nome `JWT_SECRET`, ficando nesse formato `JWT_SECRET=<valor da variavel>`, o valor da variavel pode ser qualquer , pode gerar uma hash [aqui](https://www.md5hashgenerator.com/) para ser o valor da variável

### dependências

<!--ts-->
   * [pacotes](#dependencias)
      * [express](https://expressjs.com/pt-br/)
      * [typeorm](https://typeorm.io/#/)
      * [crypto-js](https://www.npmjs.com/package/crypto-js)
      * [cors](http://expressjs.com/en/resources/middleware/cors.html)
      * [dotenv](https://www.npmjs.com/package/dotenv)
      * [express-async-errors](https://www.npmjs.com/package/express-async-errors)
      * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
      * [pg](https://www.npmjs.com/package/pg)
      * [uuid](https://www.npmjs.com/package/uuid)
<!--te-->

para ver a versões de cada pacote acesse o [package.json](package.json) do projeto

### Rodando a aplicação

Os comandos podem ser executados com os gerenciadores de pacotes `yarn` ou `npm` no terminal da sua máquina


1. #### Clone este repositório
   `git clone https://github.com/josedembo/new-opportunities`

2. #### Acesse a pasta do projeto no terminal/cmd
   `cd new-opportunities`

3. #### Instale as dependências(pode usar qualquel uma das opções abaixo)
 
   `yarn`

   `npm install`  

4. #### caso já tenha o [potsgres](https://www.postgresql.org/download/) instalado em sua máquina, crie um novo database com o nome `dowhile`, acesse o arquivo [ormconfig.json](./ormconfig.json) e altere as configurações de `username`e `password` de acordo com as configurações do seu postgres,feito isso, pode pular para o passo 5.Caso não tenha o postgres instalado em sua máquina, mas tiver o [docker](https://docs.docker.com/get-docker/) instalado execute o camando abaixo para rodar um container com o postgres

   `docker-compose up -d`

5. #### execute qualquer uma das opções abaixo para rodar as migrations e criar as tabelas no banco de dados

   `yarn typeorm migration:run`

   `npm run typeorm migration:run`

6. #### Execute a aplicação em modo de desenvolvimento

   `yarn dev`

   `npm run dev`

#### O servidor estará rodando  na porta: 3333
#### Pode consumir a API usando [Insomnia](https://insomnia.rest/download), [postman](https://www.postman.com/downloads/##) ou qualquer  ferramenta de sua preferência


## Tecnologias
As ferramentas abaixo foram usadas para a construção do projeto: 

- [x] [Node.js](https://nodejs.org/en/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Docker](https://www.docker.com/)
- [x] [TypeORM](https://typeorm.io/#/)

## new-opportunities API

## User

Rotas dos usuarios

##### `POST` `/signUp`

Cadastra um novo usuario
```cURL
http://localhost:3333/users/signUp
```
 Body 
 ```Json
{
	"name":"José Augusto",
	"username":"joseaugusto12",
	"email":"joseaugustinho@gmail.com",
	"password":"jose"
}
```
---
##### `POST` `/signIn`
Faz login de um usuario

```cURL
http://localhost:3333/users/signIp
```
 Body 
 ```Json
{
	"email":"joseaugustinho@gmail.com",
	"password":"jose"
}
```
---
##### `PUT` 
Actualiza os dados de um  usuario já cadastrado <br/>
O usuario precisa estar autenticado e informar o seu id


```cURL
http://localhost:3333/users/c23c6e00-c496-4fad-b97d-11d882f92954

```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

 Body 
 ```Json
 {
   "name":"José Augustinho",
   "email":"augustinho12@hotmail.com",
}
```
---
##### `GET` 

Retorna os dados de todos os usuarios cadastrados<br/>
O usuario precisa estar autenticado

```cURL
http://localhost:3333/users
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

##### `GET`  

Retorna os dados do usuario logado<br/>
O usuario precisa estar autenticado e informar o seu id

```cURL
http://localhost:3333/users/c23c6e00-c496-4fad-b97d-11d882f92954
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

##### `DEL`  

Deleta um usuario cadastrado<br/>
O usuario precisa estar autenticado e informar o seu id

```cURL
http://localhost:3333/users/c23c6e00-c496-4fad-b97d-11d882f92954
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

## Post

Rotas das postagens

##### `POST` 

Cria uma nova postagem <br/>
O usuario precisa estar autenticado

```cURL
http://localhost:3333/posts
```
thorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

 Body 
 ```Json
{	
	"title":"Programa bolsas de estudo  potencia Tech",
	"type":"100% financeada",
	"description":"O programa de bolsas é patrocinado por todas as empresas parceiras do DoWhile, e seu objetivo é dar oportunidade para aqueles que querem transformar suas carreiras e alcançar as melhores oportunidades, principalmente dentro das próprias empresas parceiras 🚀."
}
```
---
##### `PUT` 

Actualiza os dados de uma postagem já existente de um  usuario cadastrado<br/>
O usuario precisa estar autenticado e informar o id da postagem que pretende actualizar

```cURL
http://localhost:3333/posts/810a74a9-2a20-48b7-8af4-dace58076508
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

 Body 
 ```Json
{	
	"title":"Programa de bolsas de estudo  potência Tech  e rocketseat 🚀"
}
```
---
##### `GET`

Retorna todas as postagens de todos os usuarios<br/>
O usuario precisa estar autenticado


``` 
http://localhost:3333/posts
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

##### `GET` `/my`

Retorna todas as postagens de um usuario<br/>
O usuario precisa estar autenticado

``` 
http://localhost:3333/posts/my
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

##### `DEL`  

Deleta uma postagem do usuario logado<br/>
O usuario precisa estar autenticado e informar o id da postagem que pretende deletar

```cURL
http://localhost:3333/posts/810a74a9-2a20-48b7-8af4-dace58076508

```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

# Autor
---

<a href="https://github.com/josedembo">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/68882941?s=400&u=d518c6c61763405cd84f0d90e75f64845c37495c&v=4" width="100px;" alt="foto-Jose Dembo"/>
 <br />
 <sub><b>José Pedro Daniel Dembo</b></sub></a> <a href="https://github.com/josedembo" title="josedembo">🚀</a>


Feito com muita dedicação e **❤️**
 
[![Linkedin Badge](https://img.shields.io/badge/-josedembo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/josedembo/)](https://www.linkedin.com/in/josedembo/) 
