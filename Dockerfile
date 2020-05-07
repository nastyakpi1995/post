FROM node:lts-alpine

ENV PORT 3000
# Create app directory
WORKDIR /home/node/app
# Installing dependencies
COPY ["package.json", "yarn.lock", "./"]

RUN yarn install
# Copying source files
COPY . ./
# Building app
RUN yarn build

EXPOSE 3000
# Running the app

CMD yarn start
