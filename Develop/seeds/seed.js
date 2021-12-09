//  carol actioned this, i think its complete
const sequelize = require("../config/connection");
const { Category, City, User, Event } = require("../models");

const categoryData = require("./category-seed");
const cityData = require("./city-seed");
const userData = require("./user-seed");
const eventData = require("./event-seed");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const category = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  for (const city of cityData) {
    await City.create({
      ...city,
      category_id: categories[Math.floor(Math.random() * categories.length)].id,
    });
  }

  for (const user of userData) {
    await User.create({
      ...user,
      category_id: city[Math.floor(Math.random() * city.length)].id,
    });
  }
    for (const event of eventData) {
      await Event.create({
        ...event,
        user_id: user[Math.floor(Math.random() * user.length)].id,
      });
    }
    
    process.exit(0);
    
};

seedDatabase();
