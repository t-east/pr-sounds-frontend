FROM node:16.7.0-alpine

RUN apk update && \
    yarn global add create-nuxt-app