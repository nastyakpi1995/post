FROM node:12
ENV PORT 3000
# Create app directory
WORKDIR /home/node/app
# Installing dependencies
COPY package*.json /home/node/app/
RUN npm install
# Copying source files
COPY . /home/node/app
# Building app
RUN npm run build
EXPOSE 3000
# Running the app
CMD "npm" "run" "dev"