use('easy-enroll-db');

db.getCollection('roles').insertMany([
  { _id: 1101, 'name': 'proffesor'},
  { _id: 1102, 'name': 'student' }
])

db.getCollection('users').insertMany([
  { _id: ObjectId(), 'firstName': 'Swen', 'lastName': 'Gotovina', 'username': 'swenboi', 'email': 'swenboi@hotmail.com', 'password': 'fesb1234', 'role': 1101 },
  { _id: ObjectId(), 'firstName': 'William', 'lastName': 'L. Kurir', 'username': 'wkurir69', 'email': 'wkurir69@hotmail.com', 'password': 'fesb1234', 'role': 1102 },
]);

const rolesCollection = db.getCollection('roles');
const userCollection = db.getCollection('users');