'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        userName: "ErboShan",
        email: "erbos@sfu.ca",
        pwd: bcrypt.hashSync("p", salt),
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "JiaranYu",
        email: "jiarany@sfu.ca",
        pwd: bcrypt.hashSync("p", salt),
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "ZhixuanHu",
        email: "ohu@sfu.ca",
        pwd: bcrypt.hashSync("P", salt),
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        userName: "MingChen",
        email: "mca176@sfu.ca",
        pwd: bcrypt.hashSync("p", salt),
        createdAt: new Date,
        updatedAt: new Date
      }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
