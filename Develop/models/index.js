//  Carol actioning - still need to be completed with relationship to many etc

const Category = require('./Category');
const City = require('./City');
const User = require('./User');
const Event = require('./Event');


User.hasOne(Event, {
  foreignKey: 'event_id',
  // onDelete: 'CASCADE',
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
});

Event.hasMany(Category, {
  foreignKey: 'category_id',
  // onDelete: 'CASCADE',
});

Category.belongsTo(Event, {
  foreignKey: 'event_id',
});

City.belongsTo(Event, {
  foreignKey: 'event_id',
});



module.exports = { Category, Event, City, User };
