# Node.js Project from NLW Journey - Rocketseat
The main purpose of this repository is to create an API for travel planning made in <a href= "https://www.rocketseat.com.br/eventos/nlw/convite/bruno-16274">NLW Journey</a>

## Getting Started
- Node.js version used
```
20.14.10
```
- Clone the repository
```
git clone https://github.com/BrunoSouzaPicinini/nlw-journey-nodejs.git
```
- Install dependencies
```
cd nlw-journey-nodejs
npm install
```
- Build and run the project
```
npm run dev
```
## Project Dependencies
- https://fastify.dev/ -> Framework for node.js
- https://www.prisma.io/orm -> ORM
- https://zod.dev/ -> API validation
- https://github.com/turkerdev/fastify-type-provider-zod -> zod plugin integration for fastify
- https://day.js.org/ -> Date library for js
- https://nodemailer.com/ -> self-hosted email gateway


## Development Dependencies
```
npm i typescript @types/node -D
npm i tsx -D
npm i prisma -D
npm i --save-dev @types/nodemailer
```

## Useful commands
`npx prisma migrate dev`: verify schema.prisma changes and create a migration if necessary

`npx prisma studio`: start and open a web GUI for repository

`npx prisma init --datasource-provider SQLite`: initialize prisma ORM with SQLite 

