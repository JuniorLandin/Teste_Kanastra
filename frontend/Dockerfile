FROM node:18.18.2

WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]