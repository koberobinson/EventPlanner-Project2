//  carol actioned this, i think its complete

const chalk = require("chalk");
const sequelize = require("../config/connection");
const { Category, City, Location, User, Event } = require("../models");

const seedCategory = require("./category-seed");
const seedCity = require("./city-seed");
const seedUser = require("./user-seed");
const seedEvent = require("./event-seed");

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedCategory();
  console.log(
    chalk.black.bgGreenBright.bold("n----- CATEGORY SEEDED -----\n"));

  await seedCity();
  console.log(chalk.black.bgGreenBright.bold("\n----- CITY SEEDED -----\n"));

  await seedUser();
  console.log(chalk.black.bgGreenBright.bold("\n----- USER SEEDED -----\n"));

  await seedEvent();
  console.log(chalk.black.bgGreenBright.bold("\n----- EVENT SEEDED -----\n"));

  process.exit(0);
};

seedAll();
