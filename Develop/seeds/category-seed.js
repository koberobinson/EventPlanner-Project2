// carol actioned, i think this is complete

const { Category } = require('../models');

const categoryData = [
  {
    description: 'Family Friendly',
    id: '1',
  },
  {
    description: 'Singles',
    id: '2',
  },
  {
    description: 'Pub Crawl',
    id: '3',
  },
  {
    description: 'Couples',
    id: '4',
  },
  {
    description: '20-30',
    id: '5',
  },
  {
    description: '30-50',
    id: '6',
  },
  {
    description: '50+',
    id: '7',
  },
  {
    description: 'Seniors',
    id: '8',
  },
 
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
