use('easy-enroll-db');

db.getCollection('roles').insertMany([
  { _id: 1101, 'name': 'proffesor'},
  { _id: 1102, 'name': 'student' }
])

db.getCollection('users').insertMany([
  { _id: 1001, 'firstName': 'Swen', 'lastName': 'Gotovina', 'username': 'swenboi', 'email': 'swenboi@hotmail.com', 'password': 'fesb1234', 'role': 1101 },
  { _id: 1002, 'firstName': 'William', 'lastName': 'L. Kurir', 'username': 'wkurir69', 'email': 'wkurir69@hotmail.com', 'password': 'fesb1234', 'role': 1102 },
  { _id: 1003, 'firstName': 'Ivan', 'lastName': 'Legac', 'username': 'theLegac', 'email': 'theLegac@gmail.com', 'password': 'fesb1234', 'role': 1102 },
  { _id: 1004, 'firstName': 'Ante', 'lastName': 'Antic', 'username': 'antimon', 'email': 'antimon@gmail.com', 'password': 'fesb1234', 'role': 1102 },
  { _id: 1005, 'firstName': 'Luka', 'lastName': 'Lukic', 'username': 'luka123', 'email': 'luka123@gmail.com', 'password': 'fesb1234', 'role': 1102 }
]);

db.getCollection('presences').insertMany([
  { _id: 2001, studentId: 1002, present: false },
  { _id: 2002, studentId: 1003, present: false },
  { _id: 2003, studentId: 1004, present: false },
  { _id: 2004, studentId: 1005, present: false }
]);

const rolesCollection = db.getCollection('roles').find({});
const userCollection = db.getCollection('users').find({});
const presenceCollection = db.getCollection('presences').find({});

console.log(rolesCollection);
console.log(userCollection);
console.log(presenceCollection);