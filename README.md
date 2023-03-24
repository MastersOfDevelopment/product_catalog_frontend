# Project Title

Masters of development
 
Wellcome to Nice Gadgets - online store project which was created using React.js, Typescript, Node.js, HTML, CSS, our skills, passion, sleepless nights and long-long meetings.
Our goal was to create a user-friendly online store with beautiful clear interface and slight logic.
We used husky, prettier and eslint to check the quality of our code, Material UI, React Router, react-slick, ORM Sequelize libraries. Such tools as Postgres and Postman hepled us in backend part.

We have performed both backend and frontend part.

## Frontend part includes:
1.adaptive layout
2.dividing into logical components
3.performing logic based on user flow
4.creating adding favourite product user flow and adding items to the cart and checkout
5.animation

### Install & run

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install
    $ npm start



## Backend part:
### Install & run

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

### Setup DB locally

  $ add .env file in root directory
   fill it with following variables:
      DB_HOST='host'
      DB_NAME='db name'
      DB_USER='user'
      DB_PASSWORD='pass'
      DB_DRIVER='postgres'
  $ add config.json file inside src/config with following text:

{
  "development": {
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": true
      }
    },
    "username": "DB_NAME",
    "password": "DB_PASSWORD",
    "database": "DB_PASSWORD",
    "host": "DB_HOST",
    "dialect": "DB_DRIVER"
  },
  "test": {
    "username": "DB_NAME",
    "password": "DB_PASSWORD",
    "database": "DB_PASSWORD",
    "host": "DB_HOST",
    "dialect": "DB_DRIVER"
  },
  "production": {
    "username": "DB_NAME",
    "password": "DB_PASSWORD",
    "database": "DB_PASSWORD",
    "host": "DB_HOST",
    "dialect": "DB_DRIVER"
  }
}

### Running the project

    $ npm start

