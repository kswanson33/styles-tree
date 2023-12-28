FROM node:21.4-bullseye

WORKDIR /code

RUN apt-get update && \
    apt-get install -y vim

COPY . ./
