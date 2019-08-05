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
    let d1 = await userId("dummy1@sfu.ca");
    let d2 = await userId("dummy2@sfu.ca");
    let d3 = await userId("dummy3@sfu.ca");
    let d4 = await userId("dummy4@sfu.ca");
    let d5 = await userId("dummy5@sfu.ca");
    let d6 = await userId("dummy6@sfu.ca");

    return queryInterface.bulkInsert('Follows', [
      { user_id: erbosId, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, following: d2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, following: d3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, following: d5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, following: d2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, following: d4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, following: d5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: jiaranId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: d2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: d3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: d4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: d5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, following: d6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, following: jiaranId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, following: ottoId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, following: d2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, following: d3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, following: d4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, following: erbosId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, following: d3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, following: d4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, following: d5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, following: d6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, following: ottoId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, following: d1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, following: d5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: erbosId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: jiaranId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: d2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: d4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: d5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, following: d6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, following: jiaranId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, following: ottoId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, following: d3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, following: d4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, following: d6, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, following: jiaranId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, following: ottoId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, following: mcaId, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, following: d2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, following: d5, createdAt: new Date(), updatedAt: new Date() },
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
