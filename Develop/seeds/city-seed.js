// carol actioned this, i think this is complete

const { City} = require('../models');

const seedData = [
  {
    id: 1,
    name: 'Brisbane'
  },
  {
    id: 2,
    name: 'Adelaide'
  },
  {
    id: 3,
    name: 'Perth'
  },
  {
    id: 4,
    name: 'Melbourne'
  },
  {
    id: 5,
    name: 'Sydney'
  },
  {
    id: 6,
    name: 'Gold Coast'
  },
  {
    id: 7,
    name: 'Canberra'
  },
  {
    id: 8,
    name: 'Geelong'
  },
  {
    id: 9,
    name: 'Hobart'
  },
  {
    id: 10,
    name: 'Townsville'
  },
  {
    id: 11,
    name: 'Cairns'
  },
  {
    id: 12,
    name: 'Bendigo'
  },
  {
    id: 13,
    name: 'Darwin'
  },
];

const seedCity = () => City.bulkCreate(seedData);


module.exports = seedCity;