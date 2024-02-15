FROM node:16-alpine

WORKDIR /app

RUN npm i -g pnpm

COPY ./package.json .

RUN pnpm i

COPY . .

CMD [ "pnpm", "run", "dev"]