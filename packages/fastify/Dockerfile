FROM node:12-alpine
RUN mkdir /app
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
CMD ["node", "server.js"]