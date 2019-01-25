FROM node:11.6.0-alpine

# Create app directory
WORKDIR /pc-api

# Install app dependencies
COPY package*.json ./

RUN npm install -g nodemon \
		npm install

# Bundle source code inside of docker container
COPY . .

EXPOSE 3000
CMD npm start