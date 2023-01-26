FROM node:18.12.1-alpine
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
