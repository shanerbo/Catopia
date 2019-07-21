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
    let erbosPosts = await findUserPostsByEmail("erbos@sfu.ca");
    let jiaranPosts = await findUserPostsByEmail("jiarany@sfu.ca");
    let ottoPosts = await findUserPostsByEmail("ohu@sfu.ca");
    let mcaPosts = await findUserPostsByEmail("mca176@sfu.ca");

    let erbosId = await userId("erbos@sfu.ca");
    let jiaranId = await userId("jiarany@sfu.ca");
    let ottoId = await userId("ohu@sfu.ca");
    let mcaId = await userId("mca176@sfu.ca");

    let erbosPostId1 = erbosPosts[0].get('id');
    let erbosPostId2 = erbosPosts[1].get('id');
    let jiaranPostId1 = jiaranPosts[0].get('id');
    let jiaranPostId2 = jiaranPosts[1].get('id');
    let ottoPostId1 = ottoPosts[0].get('id');
    let ottoPostId2 = ottoPosts[1].get('id');
    let mcaPostId1 = mcaPosts[0].get('id');
    let mcaPostId2 = mcaPosts[1].get('id');
    return queryInterface.bulkInsert('Comments',
      [
        {
          user_id: erbosId,
          post_id: erbosPostId1,
          content: "wtf is that?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: erbosPostId1,
          content: "Jesus fucking christ",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          post_id: erbosPostId2,
          content: "this cat is cute af!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: erbosPostId2,
          content: "holy shiiit it is on fire!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          post_id: erbosPostId2,
          content: "i am calling the cops!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          post_id: erbosPostId2,
          content: "kkkkk good tho",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // ---------
        {
          user_id: erbosId,
          post_id: jiaranPostId1,
          content: "this is a question",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: jiaranPostId1,
          content: "do not go gentle into that good night",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          post_id: jiaranPostId2,
          content: "old age should burn",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          post_id: jiaranPostId2,
          content: "and rave",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: jiaranPostId2,
          content: "rage rage",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          post_id: jiaranPostId2,
          content: "at the clost of day",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // -------
        {
          user_id: erbosId,
          post_id: ottoPostId1,
          content: "ok i will be there in a sec",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: ottoPostId1,
          content: "i would like to get this kind of cat how old is it?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          post_id: ottoPostId2,
          content: "what kind of cat food you feed them",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          post_id: ottoPostId2,
          content: "you have two cats???",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: ottoPostId2,
          content: "not as cute as my cat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          post_id: ottoPostId2,
          content: "am i supposed to be expecting a cute cat",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // ---
        {
          user_id: erbosId,
          post_id: mcaPostId1,
          content: "im gonna kill it",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: mcaPostId1,
          content: "dude i mean this is the cutest cat i've ever seen",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          post_id: mcaPostId2,
          content: "omg its so cute!!!!!!!!!!!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          post_id: mcaPostId2,
          content: "i need this rn!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          post_id: mcaPostId2,
          content: "holy fuck this is insane",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          post_id: mcaPostId2,
          content: "where i can get this cat",
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
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
