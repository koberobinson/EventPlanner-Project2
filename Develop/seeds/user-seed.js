// carol actioned, i think this is complete

const { User } = require('../models');

const userData = [
  {
    name: 'Peter',
    email: 'peter@gmail.com',
    password: 'carol1234',
    id: '1',
  },
  {
    name: 'Roger',
    email: 'roger@gmail.com',
    password: 'carol1235',
    id: '2',
  },
  {
    name: 'Carol',
    email: 'carol@gmail.com',
    password: 'carol1236',
    id: '3',
  },
  {
    name: 'Jessica',
    email: 'jessica@gmail.com',
    password: 'carol1237',
    id: '4',
  },
  {
    name: 'Kim',
    email: 'kim@gmail.com',
    password: 'carol1238',
    id: '5',
  },
  {
    name: 'Karen',
    email: 'karen@gmail.com',
    password: 'carol1239',
    id: '6',
  },
  {
    name: 'Justin',
    email: 'justin@gmail.com',
    password: 'carol1233',
    id: '7',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;