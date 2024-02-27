# EasyEnroll Server
EasyEnroll Server is application that handles user accounts and roles. It serves as a communication bridge between ESP32 devices, database, React web app, and React Native mobile app.

## Requirements

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Vercel](https://vercel.com/)

## Getting started

Clone the repository
```
git clone https://github.com/markocurlin/easy-enroll-server.git
```
Install dependencies
```
cd easy-enroll-server
npm install
```

## Project Structure

```
.
├── app.js
├── config/
├── controllers/
├── node_modules/
├── package.json
├── routes/
│   ├── user.route.js
│   └── index.js
├── services/
├── common/
├── vercel.json
└── yarn.lock
```

### Brief Overview

#### `app.js`

Express app entry point

#### `config/`

for configuration stuff... for example, database connection setup

#### `controllers/`

mostly express route handlers

#### `routes/`

- `index.js` – bootstraps all routes. new namespaces should always be registered here
- `user.route.js` – sample standalone route

#### `services/`

for "external" services (e.g. a weather.service.js file for interacting with darksky API)