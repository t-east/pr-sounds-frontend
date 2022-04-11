FROM node:16.7.0-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN apk update && \
    apk add git
RUN yarn add nuxt && \
yarn install