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
|   ├── login-mobile.route.js
|   ├── login.route.js
|   ├── presence.route.js
│   └── index.js
├── services/
├── common/
├── vercel.json
└── yarn.lock
```

### Brief Overview

#### `app.js`

Express app entry point

#### `routes/`

- `index.js` – bootstraps all routes. new namespaces should always be registered here
- `user.route.js` – route for handling users
- `login-mobile.route.js` – login route for mobile app users
- `login.route.js` – login route for web app users
- `presence.route.js` – route for handling presences