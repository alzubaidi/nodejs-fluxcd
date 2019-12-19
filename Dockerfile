FROM node:10.13-alpine AS build
ENV NODE_ENV production
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:10-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY  . .
EXPOSE 3000
CMD npm start