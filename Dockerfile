# Этап сборки
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап продакшн-сервера
FROM nginx:stable-alpine

# Копируем собранное приложение в папку nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг nginx при необходимости
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
