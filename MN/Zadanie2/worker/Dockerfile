FROM node:alpine
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR "/app"
COPY ./package.json ./index.js ./keys.js ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "run", "start"]