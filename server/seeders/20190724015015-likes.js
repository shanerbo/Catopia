'use strict';
'use strict';
const model = require("../models/index");

async function findUserPostsByEmail(email) {
  const userID = await model.Users.findUserByEmail(email).get('id');
  return await model.Posts.findUserPosts(userID);
}
async function userId(email) {
  return await model.Users.findUserByEmail(email).get('id');
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let erbosId = await userId("erbos@sfu.ca");
    let jiaranId = await userId("jiarany@sfu.ca");
    let ottoId = await userId("ohu@sfu.ca");
    let mcaId = await userId("mca176@sfu.ca");
    let erbosPosts = await findUserPostsByEmail("erbos@sfu.ca");
    let jiaranPosts = await findUserPostsByEmail("jiarany@sfu.ca");
    let ottoPosts = await findUserPostsByEmail("ohu@sfu.ca");
    let mcaPosts = await findUserPostsByEmail("mca176@sfu.ca");
    return queryInterface.bulkInsert('post_likes', [
      {
        user_id: ottoId,
        post_id: erbosPosts[0].get('id'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: erbosId,
        post_id: erbosPosts[0].get('id'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: jiaranId,
        post_id: erbosPosts[0].get('id'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: mcaId,
        post_id: erbosPosts[0].get('id'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('post_likes', null, {});

  }
};
