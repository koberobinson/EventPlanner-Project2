// carol actioned, i think this is complete

const { Category } = require('../models');

const categoryData = [
  {
     id: '1',
    description: 'Family Friendly'
   
  },
  {id: '2',
    description: 'Singles'
    
  },
  {id: '3',
    description: 'Pub Crawl'
    
  },
  {id: '4',
    description: 'Couples'
    
  },
  {
    id: '5',
    description: '20-30'
    
  },
  {
    id: '6',
    description: '30-50'
    
  },
  {
    id: '7',
    description: '50+'
    
  },
  {
     id: '8',
    description: 'Seniors'   
  },
 
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
