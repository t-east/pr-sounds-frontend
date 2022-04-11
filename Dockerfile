FROM node:16.7.0-alpine
<<<<<<< HEAD

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN apk update && \
    apk add git
RUN yarn add nuxt && \
yarn install
=======
WORKDIR /front
COPY ./front/package.json ./front/yarn.lock /front/
RUN apk update && \
    apk add git
RUN yarn install
>>>>>>> 2e5ec923167e387a3bab45d78d71de677364f724
