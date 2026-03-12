
# Backend Developer Intern Task

## Tech Stack
Node.js, Express, MySQL, Sequelize, JWT

## Setup

1 Install Node.js

2 Install dependencies

npm install

3 Create MySQL database

Run SQL in sql/schema.sql

4 Configure environment

Copy .env.example to .env

5 Run server

npm run dev

Server runs on http://localhost:5000

## Main APIs

POST /auth/register
POST /auth/login

POST /projects
GET /projects
GET /projects/:id
PUT /projects/:id
DELETE /projects/:id

POST /projects/:id/dpr
GET /projects/:id/dpr
