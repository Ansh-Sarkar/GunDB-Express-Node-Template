FROM node:16.15-alpine3.15
WORKDIR /app
COPY package.json /app
RUN npm install && npm cache clean --force
COPY . /app
CMD npm start
EXPOSE 8003