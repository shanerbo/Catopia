'use strict';
const model = require("../models/index");

async function findUserCatsByEmail(email) {
  const userID = await model.Users.findUserByEmail(email).get('id');
  return await model.Cats.findUserCats(userID);
}

async function findUserPostsByEmail(email) {
  const userID = await model.Users.findUserByEmail(email).get('id');
  return await model.Posts.findUserPosts(userID);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let erbosCats = await findUserCatsByEmail("erbos@sfu.ca");
    let jiaranCats = await findUserCatsByEmail("jiarany@sfu.ca");
    let ottoCats = await findUserCatsByEmail("ohu@sfu.ca");
    let mcaCats = await findUserCatsByEmail("mca176@sfu.ca");
    let erbosPosts = await findUserPostsByEmail("erbos@sfu.ca");
    let jiaranPosts = await findUserPostsByEmail("jiarany@sfu.ca");
    let ottoPosts = await findUserPostsByEmail("ohu@sfu.ca");
    let mcaPosts = await findUserPostsByEmail("mca176@sfu.ca");
    let erbosCatId1 = erbosCats[0].get('id');
    let erbosCatId2 = erbosCats[1].get('id');
    let erbosCatId3 = erbosCats[2].get('id');
    let jiaranCatId1 = jiaranCats[0].get('id');
    let jiaranCatId2 = jiaranCats[1].get('id');
    let jiaranCatId3 = jiaranCats[2].get('id');
    let ottoCatId1 = ottoCats[0].get('id');
    let ottoCatId2 = ottoCats[1].get('id');
    let ottoCatId3 = ottoCats[2].get('id');
    let mcaCatId1 = mcaCats[0].get('id');
    let mcaCatId2 = mcaCats[1].get('id');
    let mcaCatId3 = mcaCats[2].get('id');
    let erbosPostId1 = erbosPosts[0].get('id');
    let erbosPostId2 = erbosPosts[1].get('id');
    let jiaranPostId1 = jiaranPosts[0].get('id');
    let jiaranPostId2 = jiaranPosts[1].get('id');
    let ottoPostId1 = ottoPosts[0].get('id');
    let ottoPostId2 = ottoPosts[1].get('id');
    let mcaPostId1 = mcaPosts[0].get('id');
    let mcaPostId2 = mcaPosts[1].get('id');
    return queryInterface.bulkInsert('post_cats',
      [
        {
          cat_id: erbosCatId1,
          post_id: erbosPostId1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: erbosCatId2,
          post_id: erbosPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: erbosCatId3,
          post_id: erbosPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: jiaranCatId1,
          post_id: jiaranPostId1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: jiaranCatId2,
          post_id: jiaranPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: jiaranCatId3,
          post_id: jiaranPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: ottoCatId1,
          post_id: ottoPostId1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: ottoCatId2,
          post_id: ottoPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: ottoCatId3,
          post_id: ottoPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: mcaCatId1,
          post_id: mcaPostId1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: mcaCatId2,
          post_id: mcaPostId2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cat_id: mcaCatId3,
          post_id: mcaPostId2,
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
    return queryInterface.bulkDelete('post_cats', null, {});
  }
};
