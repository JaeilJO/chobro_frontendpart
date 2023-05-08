FROM node:18-alpine

MAINTAINER whwodlf97@gmail.com

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

CMD ['npm','run','dev']

EXPOSE 3000

