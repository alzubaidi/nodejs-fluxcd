FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /app
COPY . .
RUN npm i --production
EXPOSE 3000
CMD npm start