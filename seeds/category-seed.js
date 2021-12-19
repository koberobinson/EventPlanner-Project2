// carol actioned, i think this is complete

const { Category } = require('../models');

const categoryData = [
  {
     id: '1',
    description: 'Family Friendly',
    color: "coral"
   
  },
  {id: '2',
    description: 'Singles',
    color: "purple"
    
  },
  {id: '3',
    description: 'Pub Crawl',
    color: "green"
    
  },
  {id: '4',
    description: 'Couples',
    color: "pink"
    
  },
  {
    id: '5',
    description: '20-30',
    color: "blue"
    
  },
  {
    id: '6',
    description: '30-50',
    color: "yellow"
    
  },
  {
    id: '7',
    description: '50+',
    color: "red"
    
  },
  {
     id: '8',
    description: 'Seniors' ,
    color: "grey"  
  },
 
];

const seedCategory = () => Category.bulkCreate(categoryData);

module.exports = seedCategory;
