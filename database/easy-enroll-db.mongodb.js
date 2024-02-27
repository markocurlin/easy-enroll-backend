use('easy-enroll-db');

db.getCollection('users').insertMany([
  { _id: 1001, 'firstName': 'Ivan', 'lastName': 'Ivanović', 'username': 'ivan123', 'email': 'ivan123@gmail.com', 'password': 'fesb1234', 'role': 'professor' },
  { _id: 1002, 'firstName': 'William', 'lastName': 'Kurir', 'username': 'wkurir69', 'email': 'wkurir69@hotmail.com', 'password': 'fesb1234', 'role': 'student' },
  { _id: 1003, 'firstName': 'Ivica', 'lastName': 'Legač', 'username': 'theLegac', 'email': 'theLegac@gmail.com', 'password': 'fesb1234', 'role': 'student' },
  { _id: 1004, 'firstName': 'Ante', 'lastName': 'Antić', 'username': 'antimon', 'email': 'antimon@gmail.com', 'password': 'fesb1234', 'role': 'student' },
  { _id: 1005, 'firstName': 'Luka', 'lastName': 'Lukić', 'username': 'luka123', 'email': 'luka123@gmail.com', 'password': 'fesb1234', 'role': 'student' }
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