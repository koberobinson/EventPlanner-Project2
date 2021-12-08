//  Carol actioning - still need to be completed with relationship to many etc

const City = require("./City");
const Category = require("./Category");
const User = require("./User");
const Event = require("./Event");


// add relationships

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id',
// });

module.exports = { Event, City, User, Category };
