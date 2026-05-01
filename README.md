# 🔗 URL Shortener
Simple URL Shortener built with Node.js, Express, and MongoDB.

## Features

* Shorten long URLs
* Redirect using short link
* Track clicks

## Setup

```bash
npm install
```
Create `.env`:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/urlShortener
```

## Run
```bash
npm run dev
```

## 📌 API

* **POST** `/shorten` → create short URL
* **GET** `/:shortId` → redirect

## 👨‍💻 Author

Pratyush Kumar
