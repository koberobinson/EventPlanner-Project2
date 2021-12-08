// carol actioned, i think this is complete

const { Event } = require("../models");

const eventData = [
  {
    description: "Jack's 50th Birthday Bash",
    date: "December 21, 2021 20:30:00",
    city:"Adelaide",
    id: "1",
  },
  {
    description: "Peter's BBQ",
    date: "December 15, 2021 14:30:00",
    city:"Brisbane",
    id: "2",
  },
  {
    description: "21 & Over Pub Crawl",
    date: "December 21, 2021 20:30:00",
    city:"Melbourne",
    id: "3",
  },
  {
    description: "Kim's Sunset Drinks",
    date: "December 31, 2021 18:00:00",
    city:"Cairns",
    id: "4",
  },
  {
    description: "Justin's Breakfast Jog",
    date: "January 10, 2022 06:30:00",
    city:"Adelaide",
    id: "5",
  },

];

const seedEvent = () => Event.bulkCreate(eventData);

module.exports = seedEvent;
