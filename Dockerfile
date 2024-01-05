FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ENV REACT_APP_API_KEY "AIzaSyDQbM4DPf0U5pRAtKKllyZ7LJtTqOdWbA8"
ENV REACT_APP_AUTH_DOMAIN "sfacfolio.firebaseapp.com"
ENV REACT_APP_DATABASE_URL "https://sfacfolio-default-rtdb.asia-southeast1.firebasedatabase.app"
ENV REACT_APP_PROJECT_ID "sfacfolio"
ENV REACT_APP_STORAGE_BUCKET "sfacfolio.appspot.com"
ENV REACT_APP_MESSAGING_SENDER_ID "177707641690"
ENV REACT_APP_APP_ID "1:177707641690:web:b39395a5a82a9fe16f6163"
ENV REACT_APP_MESUREMENT_ID "G-1B3GS1JKX0"

EXPOSE 3003

CMD ["nginx", "-g", "daemon off;"]