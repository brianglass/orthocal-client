FROM node:alpine

WORKDIR /orthocal-client/
ADD . .

RUN npm install
RUN npm run babel
RUN npm run compile

EXPOSE 8000
ENTRYPOINT npm run start
