FROM node:14.14.0-alpine
WORKDIR "/app"
COPY ./package.json ./index.js ./keys.js ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]