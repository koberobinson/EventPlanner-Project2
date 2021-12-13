//  carol actioned this, i think its complete
const seedCategory = require('./category-seed');
const seedCity = require('./city-seed');
const seedUser = require('./user-seed');
const seedEvent = require('./event-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

    console.log('\n----- DATABASE SYNCED -----\n');
    
  await seedCategory();
  console.log('\n----- CATEGORY SEEDED -----\n');

  await seedCity();
  console.log('\n----- CITY SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedEvent();
  console.log('\n----- EVENT SEEDED -----\n');

  process.exit(0);
};
try {
seedAll();
} catch (err) {
  console.log(err);
}


// const { Category, City, User, Event } = require("../models");

// const categoryData = require("./category-seed");
// const cityData = require("./city-seed");
// const userData = require("./user-seed");
// const eventData = require("./event-seed");

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });

//   const category = await Category.bulkCreate(categoryData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const city of cityData) {
//     await City.create({
//         ...city,
//     });
//   }

//   for (const user of userData) {
//     await User.create({
//       ...user,
     
//     });
//   }
//     for (const event of eventData) {
//       await Event.create({
//         ...event,
      
//       });
//     }
    
//     process.exit(0);
    
// };

// seedDatabase();
