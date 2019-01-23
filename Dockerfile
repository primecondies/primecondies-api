FROM node:11.6.0-alpine

# Create app directory
WORKDIR /pc-api

# Install app dependencies
COPY package*.json ./

RUN apk update && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
	&& npm install -g nodemon && npm install \
	&& npm rebuild bcrypt --build-from-source

# Bundle source code inside of docker container
COPY . .

EXPOSE 3000
CMD npm start