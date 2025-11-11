#  🎬 movies_tvshows

This is the backend API for the Movies & TV Shows application. Built with **Node.js**, **TypeScript**, **Express**, and **Prisma** (PostgreSQL).

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Environment Variables](#environment-variables)  
- [commands to run ](#commands-to-run)  
- [API Endpoints](#api-endpoints)  

---

## Features

- User-friendly REST API for Movies & TV Shows  
- CRUD operations for entertainment items  
- Input validation with **Zod**  
- Centralized error handling  
- PostgreSQL database with **Prisma ORM**

---

## Tech Stack

- Node.js  
- TypeScript  
- Express.js  
- Prisma ORM  
- PostgreSQL  
- Zod (validation)  

---

## Getting Started

### Prerequisites

- Node.js >= 22  
- PostgreSQL >= 17  
- npm (package manager)

### Installation

```bash
# Clone the repo
git clone https://github.com/Kallesh-B-S/movies_tvshows.git

- For Docker Version use docker branch from repo

cd movies-tvshows

# Install dependencies
npm install

```

# Environment Variables

```bash
# env

#  construct db url using below template

PG_DB_URL="postgresql://<db_user_name>:<db_password>@localhost:5432/<dbname>"

#  example

PG_DB_URL="postgresql://postgres:root@localhost:5432/movies_tvshows"

PORT=4000

```

# Commands to run

```bash

# 1) Install all project dependencies using below
npm install

# 2) To complete db migration setup use below
npm run setup

# 3) If you need sample data you can seed data using below command
npm run db-seed

```
## For Docker version

```bash
#  1) install dependencies
npm install

#  2) build docker images and run for first time from project path ( i.e movies_tvshows> docker-compose up --build)
docker-compose up --build

# Access API running in specified port in docker-compose.yaml file in this case
http://localhost:4112/api/entertainments

# And checkout Docker commands for further use
[Docker Compose](https://docs.docker.com/reference/cli/docker/compose/)

```


# API Endpoints

| Method | Endpoint                              | Description                          | Request Body / Query Params / Param                                                                 |
|--------|---------------------------------------|--------------------------------------|---------------------------------------------------------------------------------------------------|
| GET    | `api/entertainments`                  | Get all entertainment items          | None                                                                                              |
| GET    | `api/entertainments?page=1&limit=2`  | Get entertainment items on page 1 with 2 items/page | Query Params: <br>`page: number` <br>`limit: number`                                              |
| GET    | `api/searchEntertainments/:title`    | Get all matched entertainment items  | Param: <br>`title: string`                                                                        |
| POST   | `api/createEntertainment`             | Create a new entertainment item      | Request Body: <br>`{` <br>  `"title": "string",` <br>  `"type": "movie" or "tv_show",` <br>  `"director": "string",` <br>  `"budget": number,` <br>  `"location": "string",` <br>  `"duration": "string",` <br>  `"year": number` <br>`}` |
| PUT    | `api/updateEntertainment/:id`        | update entertainment item            | Param: <br> `id: number` <br><br> Request Body: <br>`{` <br>  `"title": "string",` <br>  `"type": "movie" or "tv_show",` <br>  `"director": "string",` <br>  `"budget": number,` <br>  `"location": "string",` <br>  `"duration": "string",` <br>  `"year": number` <br>`}`                                             |
| PATCH  | `api/patchEntertainment/:id`         | patch entertainment item             | Param: <br> `id: number` <br><br> Request Body: <br>`{` <br>  `"title": "string",` <br>  `"type": "movie" or "tv_show",` <br>  `"director": "string",` <br>  `"budget": number,` <br>  `"location": "string",` <br>  `"duration": "string",` <br>  `"year": number` <br>`}`                                             |
| DELETE | `api/deleteEntertainment/:id`        | delete entertainment item            | Param: <br> `id: number`                                             |