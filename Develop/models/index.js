//  Carol actioning - still need to be completed with relationship to many etc

const Category = require('./Category');
const City = require('./City');
const User = require('./User');
const Event = require('./Event');

// hasMany
User.hasMany(Event, {
  foreignKey: 'user_id',
  // onDelete: 'CASCADE',
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
});

// belongsTo
Event.belongsTo(Category, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
});

// hasMany
Category.hasMany(Event, {
  foreignKey: 'category_id',
});

// hasMany
Event.belongsTo(City, {
  foreignKey: 'city_id',
});

City.hasMany(Event, {
  foreignKey: 'city_id',
});


module.exports = { Category, Event, City, User };
