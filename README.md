# Toughts
![maintenance-status](https://img.shields.io/badge/maintenance-experimental-blue.svg)

![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## Sobre este projeto
É um projeto do curso de Node.js do "Hora de codar" que aborda os tópicos principais de um projeto web, como: autenticação, login, controle de sessão e interface de interação com o usuário seguindo o padrão arquitetural MVC.

### Pre requisitos
Para este projeto é necessário ter o git, node e MySQL instalados.

## Instrução de instalação (Setup)
Caso for clonar o projeto em sua máquina, apenas coloque o seguinte comando na pasta do projeto...

```bash
npm install
```

## Caso queira começar do zero e seguir commit um a um
Coloque o seguinte comando na pasta do projeto...
```bash
mkdir controllers db models public routes sessions views
touch index.js
```

Views e public possuem subpastas...
```bash
cd public
mkdir css
``` 
```bash
cd views
mkdir layouts
``` 
Seguem os comandos npm na pasta principal...
```bash
npm init -y
npm install express express-handlebars bcryptjs connect-flash cookie-parser cookie-session express-flash -express-session mysql2 sequelize nodemon session-file-store
``` 

