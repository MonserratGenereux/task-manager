FROM node:9

# Create app directory
WORKDIR /usr/tasks-manager/habits

# Install app dependencies
COPY package.json .
COPY .npmrc .

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "start" ]
