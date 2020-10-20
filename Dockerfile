FROM node:14.14.0-alpine3.10

RUN mkdir -p /working/lib

COPY src /working/src
COPY package*.json /working/


WORKDIR /working

RUN npm install --quiet || cat npm-debug.log

VOLUME /working/src

EXPOSE 3000

CMD ["npm", "start"]