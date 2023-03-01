FROM node:18.14.2-alpine

ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .

CMD ["yarn", "start"]