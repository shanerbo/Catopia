'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        userName: "ErboShan",
        email: "erbos@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        prof_url: "https://storage.googleapis.com/user_posts/1564086103066IMG_5693.JPG.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "JiaranYu",
        email: "jiarany@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        prof_url: "https://storage.googleapis.com/user_posts/1564086103066IMG_5693.JPG.jpg",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "ZhixuanHu",
        email: "ohu@sfu.ca",
        prof_url: "https://storage.googleapis.com/user_posts/1564086103066IMG_5693.JPG.jpg",
        pwd: bcrypt.hashSync("pppppp", salt),
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "MingChen",
        email: "mca176@sfu.ca",
        pwd: bcrypt.hashSync("pppppp", salt),
        createdAt: new Date,
        updatedAt: new Date,
        prof_url: "https://storage.googleapis.com/user_posts/1564086103066IMG_5693.JPG.jpg",
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
