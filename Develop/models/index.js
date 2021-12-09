//  Carol actioning - still need to be completed with relationship to many etc
const Category = require('./Category');
const City = require('./City');
const User = require('./User');
const Event = require('./Event');
const { hasMany } = require('./Category');

Event.hasMany(City, {
  foreignKey: 'event_id',
});

City.belongsTo(Event, {
  foreignKey: 'event_id',
});

Event.belongsTo(User, {
  foreignKey: 'user_id',
});

Category.belongsTo(Event, {
  foreignKey: 'event_id',
});

module.exports = { Category, Event, City, User };
