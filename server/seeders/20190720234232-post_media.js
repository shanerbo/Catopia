'use strict';
const model = require("../models/index");

async function findUserPostsByEmail(email) {
  const userID = await model.Users.findUserByEmail(email).get('id');
  return await model.Posts.findUserPosts(userID);
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let erbosPosts = await findUserPostsByEmail("erbos@sfu.ca");
    let jiaranPosts = await findUserPostsByEmail("jiarany@sfu.ca");
    let ottoPosts = await findUserPostsByEmail("ohu@sfu.ca");
    let mcaPosts = await findUserPostsByEmail("mca176@sfu.ca");
    let erbosPostId1 = erbosPosts[0].get('id');
    let erbosPostId2 = erbosPosts[1].get('id');
    let jiaranPostId1 = jiaranPosts[0].get('id');
    let jiaranPostId2 = jiaranPosts[1].get('id');
    let ottoPostId1 = ottoPosts[0].get('id');
    let ottoPostId2 = ottoPosts[1].get('id');
    let mcaPostId1 = mcaPosts[0].get('id');
    let mcaPostId2 = mcaPosts[1].get('id');
    return queryInterface.bulkInsert('post_media',
      [
        {
          post_id: erbosPostId1,
          url: "https://storage.googleapis.com/user_posts/Erbo1.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: erbosPostId2,
          url: "https://storage.googleapis.com/user_posts/Erbo2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: erbosPostId2,
          url: "https://storage.googleapis.com/user_posts/Erbo3.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: erbosPostId2,
          url: "https://storage.googleapis.com/user_posts/Erbo4.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId1,
          url: "https://storage.googleapis.com/user_posts/Jiaran1.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId2,
          url: "https://storage.googleapis.com/user_posts/Jiaran2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId2,
          url: "https://storage.googleapis.com/user_posts/Jiaran3.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId2,
          url: "https://storage.googleapis.com/user_posts/Jiaran4.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId1,
          url: "https://storage.googleapis.com/user_posts/otto1.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId2,
          url: "https://storage.googleapis.com/user_posts/otto2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId2,
          url: "https://storage.googleapis.com/user_posts/otto3.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId2,
          url: "https://storage.googleapis.com/user_posts/otto4.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId1,
          url: "https://storage.googleapis.com/user_posts/mca1.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId2,
          url: "https://storage.googleapis.com/user_posts/mca2.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId2,
          url: "https://storage.googleapis.com/user_posts/mca3.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId2,
          url: "https://storage.googleapis.com/user_posts/mca4.jpeg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post_media', null, {});
  }
};
