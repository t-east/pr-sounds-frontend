FROM node:16.7.0-alpine
WORKDIR /front
COPY ./front/package.json ./front/yarn.lock /front/
RUN apk update && \
    apk add git
RUN yarn install