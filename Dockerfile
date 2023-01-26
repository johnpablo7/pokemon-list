FROM node:18.12.1-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
