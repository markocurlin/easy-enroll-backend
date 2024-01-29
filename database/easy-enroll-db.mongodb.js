use('easy-enroll-db');

db.getCollection('users').insertMany([
  { _id: 1001, 'firstName': 'Swen', 'lastName': 'Gotovina', 'username': 'swenboi', 'email': 'swenboi@hotmail.com', 'password': 'fesb1234', 'role': 'professor' },
  { _id: 1002, 'firstName': 'William', 'lastName': 'L. Kurir', 'username': 'wkurir69', 'email': 'wkurir69@hotmail.com', 'password': 'fesb1234', 'role': 'student' },
  { _id: 1003, 'firstName': 'Ivan', 'lastName': 'Legac', 'username': 'theLegac', 'email': 'theLegac@gmail.com', 'password': 'fesb1234', 'role': 'student' },
  { _id: 1004, 'firstName': 'Ante', 'lastName': 'Antic', 'username': 'antimon', 'email': 'antimon@gmail.com', 'password': 'fesb1234', 'role': 'student' },
  { _id: 1005, 'firstName': 'Luka', 'lastName': 'Lukic', 'username': 'luka123', 'email': 'luka123@gmail.com', 'password': 'fesb1234', 'role': 'student' }
]);

db.getCollection('presences').insertMany([
  { studentId: 1002, present: false },
  { studentId: 1003, present: false },
  { studentId: 1004, present: false },
  { studentId: 1005, present: false }
]);

const userCollection = db.getCollection('users').find({});
const presenceCollection = db.getCollection('presences').find({});

console.log(userCollection);
console.log(presenceCollection);