FROM node:18.14.2-alpine

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

CMD ["yarn", "start"]