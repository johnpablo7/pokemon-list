FROM node:18.12.1-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
ENV NPM_FLAGS --legacy-peer-deps
RUN npm install && npm cache clean --force
RUN npm run build
COPY ./ /usr/src/app
ENV NODE_ENV production
ENV PORT 80
EXPOSE 80
CMD [ "npm", "preview" ]