// carol actioned this, i think this is complete

const { City } = require("../models");

const cityData = [
  {
    name: "Brisbane",
    id: "1",
  },
  {
    name: "Adelaide",
    id: "2",
  },
  {
    name: "Perth",
    id: "3",
  },
  {
    name: "Melbourne",
    id: "4",
  },
  {
    name:"Sydney",
    id: "6",
  },
  {
    name: "Gold Coast",
    id: "7",
  },
  {
    name: "Canberra",
    id: "8",
  },
  {
    name: "Geelong",
    id: "9",
  },
  {
    name: "Hobart",
    id: "10",
  },
  {
    name: "Townsville",
    id: "11",
  },
  {
    name: "Cairns",
    id: "12",
  },
  {
    name: "Bendigo",
    id: "13",
  },
  {
    name: "Darwin",
    id: "14",
  },
  {
    name:"Darwin",
    id: "15",
  },
];

const seedCity = () => City.bulkCreate(cityData);

module.exports = seedCity;