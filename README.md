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
      * [Rodando a aplicação](#rodando-o-back-end)
   * [Tecnologias](#tecnologias)
   * [new-opportunities API ](#new-opportunities-API)
   * [Autor](#autor)
<!--te-->

# Como Rodar o projeto

### Pré-requisitos

Antes de começar a rodar o projeto, você vai precisar instalar em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/)

Após isso é recomendável a instalação de um editor de código(caso não tenha), como o [VSCode](https://code.visualstudio.com/)

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

### Rodando o Back End

```bash
# Clone este repositório
$ git clone <https://github.com/josedembo/new-opportunities>

# Acesse a pasta do projeto no terminal/cmd
$ cd new-opportunities

# Instale as dependências(pode usar qualquel uma das opções abaixo)
$ npm install  
$ yarn 
 
# Execute a aplicação em modo de desenvolvimento
$ yarn dev
$ npm run dev

# O servidor estará rodando  na porta:3333
# Pode consumir a API usando Insomnia, postman ou qualquer  ferramenta de sua preferência
```

## Tecnologias
As ferramentas abaixo foram usadas para a construção do projeto: 

- [x] [Node.js](https://nodejs.org/en/)
- [x] [Typescript](https://www.typescriptlang.org/)
- [x] [Docker](https://www.docker.com/)
- [x] [TypeORM](https://typeorm.io/#/)

## new-opportunities API

## User

##### `POST` `/signUp`

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
`GET` `/getAll`

``` 
http://localhost:3333/users
```

Authorization  <span style="color:gray"> &ensp;&ensp;&ensp;&ensp;Bearer Token<span>

token &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&lt;token&gt;

---

`GET`  `/getOne`

```cURL
http://localhost:3333/users/c23c6e00-c496-4fad-b97d-11d882f92954
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