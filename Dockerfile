# STAGE 1
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# STAGE 2
FROM nginx:1.17.9-alpine
COPY --from=build /usr/src/app/dist/angular-practice /usr/share/nginx/html
