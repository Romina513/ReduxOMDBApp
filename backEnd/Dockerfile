FROM node:alpine

RUN mkdir app

WORKDIR app

ADD ./package.json package.json

RUN npm install

ADD app.js app.js

EXPOSE 3000
