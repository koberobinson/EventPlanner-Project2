// carol actioned, i think this is complete

const { Event } = require('../models');

const eventData = [
  {
    id: 1,
    description: "Jack's 50th Birthday Bash",
    date: 'December 21, 2021 20:30:00',
    user_id: 2,
    city_id: 1,
    category_id: 1,
  },
  {
    id: 2,
    description: "Peter's BBQ",
    date: 'December 15, 2021 14:30:00',
    user_id: 1,
    city_id: 1,
    category_id: 1,
  },
  {
    id: 3,
    description: '21 & Over Pub Crawl',
    date: 'December 21, 2021 20:30:00',
    user_id: 4,
    city_id: 4,
    category_id: 3,
  },
  {
    id: 4,
    description: "Kim's Sunset Drinks",
    date: 'December 31, 2021 18:00:00',
    user_id: 5,
    city_id: 7,
    category_id: 7,
  },
  {
    id: 5,
    description: "Justin's Breakfast Jog",
    date: 'January 10, 2022 06:30:00',
    user_id: 7,
    city_id: 2,
    category_id: 7,
  },
];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
