FROM node:11.6.0

# Create app directory
WORKDIR /usr/src/pc-api

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]