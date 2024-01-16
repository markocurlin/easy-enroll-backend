# EasyEnroll Server

## Requirements

Install [Node.js](https://nodejs.org/en/)
Install [Express.js](https://expressjs.com/)

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
Build and run the project
```
npm run dev
```
  Navigate to `http://localhost:8000`

## Project Structure

```
.
├── app.js
├── config/
├── controllers/
├── node_modules/
├── package.json
├── routes/
│   ├── demo.route.js
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
- `demo.route.js` – sample standalone route

#### `services/`

for "external" services (e.g. a weather.service.js file for interacting with darksky API)