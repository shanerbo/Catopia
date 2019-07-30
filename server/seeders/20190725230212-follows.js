'use strict';
const model = require("../models/index");
async function userId(email) {
  return await model.Users.findUserByEmail(email).get('id');
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const erbosId = await userId("erbos@sfu.ca");
    const jiaranId = await userId("jiarany@sfu.ca");
    const ottoId = await userId("ohu@sfu.ca");
    const mcaId = await userId("mca176@sfu.ca");
    return queryInterface.bulkInsert('Follows', [
      {
        user_id: erbosId,
        following: jiaranId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: erbosId,
        following: ottoId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: jiaranId,
        following: ottoId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: mcaId,
        following: ottoId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: erbosId,
        following: mcaId,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: ottoId,
        following: mcaId,
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
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
