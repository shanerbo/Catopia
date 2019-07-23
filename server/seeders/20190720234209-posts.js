'use strict';
const model = require("../models/index");

async function userId(email) {
  return await model.Users.findUserByEmail(email).get('id');
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let erbosId = await userId("erbos@sfu.ca");
    let jiaranId = await userId("jiarany@sfu.ca");
    let ottoId = await userId("ohu@sfu.ca");
    let mcaId = await userId("mca176@sfu.ca");
    return queryInterface.bulkInsert('Posts',
      [
        {
          user_id: erbosId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          description: "a",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
