'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        userName: "Jean Schmitt",
        email: "erbos@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        prof_url: "https://storage.googleapis.com/user_prof/user1.jpeg",
        bio: "There is nothing either good or bad, but thinking makes it so.",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "Colette Roth",
        email: "jiarany@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        prof_url: "https://storage.googleapis.com/user_prof/user2.jpeg",
        bio: "From women's eyes this doctrine I derive.",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "Matei Hibbert",
        email: "ohu@sfu.ca",
        prof_url: "https://storage.googleapis.com/user_prof/user3.jpeg",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "The wheel is come full circle: I am here.",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "Beyonce Irvine",
        email: "mca176@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "Some rise by sin, and some by virtue fall.",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user4.jpeg",
      },
      {
        userName: "Ellie-Mae Connor",
        email: "dummy1@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "I burn, I pine, I perish.",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user5.jpeg",
      },
      {
        userName: "Karan Khan",
        email: "dummy2@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "This above all: to thine ownself be true.",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user6.jpeg",
      },
      {
        userName: "Vincenzo Glover",
        email: "dummy3@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "When thou dost ask me blessing, I'll kneel down,",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user7.jpeg",
      },
      {
        userName: "Kajetan Reeves",
        email: "dummy4@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "They have been at a great feast of languages, and stol'n the scraps.",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user8.jpeg",
      },
      {
        userName: "Reyansh Ahmed",
        email: "dummy5@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "Sigh no more, ladies, sigh no more,Men were deceivers ever",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user9.jpeg",
      },
      {
        userName: "Niall Bernal",
        email: "dummy6@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        bio: "I do love nothing in the world so well as you: is not that strange?",
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_prof/user10.jpeg",
      }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
