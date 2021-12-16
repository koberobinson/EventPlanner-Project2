// carol actioned, i think this is complete

const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: 'Peter',
    email: 'peter@gmail.com',
    password: 'carol1234',
    event_id: 2
  },
  {
    id: 2,
    name: 'Roger',
    email: 'roger@gmail.com',
    password: 'carol1235',
    event_id: 1
  },
  {
    id: 3,
    name: 'Carol',
    email: 'carol@gmail.com',
    password: 'carol1236'
  },
  {
    id: 4,
    name: 'Jessica',
    email: 'jessica@gmail.com',
    password: 'carol1237',
    event_id: 4
  },
  {
    id: 5,
    name: 'Kim',
    email: 'kim@gmail.com',
    password: 'carol1238',
    event_id: 4
  },
  {
    id: 6,
    name: 'Karen',
    email: 'karen@gmail.com',
    password: 'carol1239'
  },
  {
    id: 7,
    name: 'Justin',
    email: 'justin@gmail.com',
    password: 'carol1233',
    event_id: 5
  },
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;