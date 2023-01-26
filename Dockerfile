FROM node:18.12.1-alpine
WORKDIR /app
COPY package.json .
RUN npm i
RUN npm run build
COPY . .
EXPOSE 4173
CMD ["npm", "run", "preview"]
