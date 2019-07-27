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
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: erbosPostId2,
          url: "https://www.ctvnews.ca/polopoly_fs/1.4365547.1554383750!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: erbosPostId2,
          url: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/05/ChMkJlbKyK-IMM4RAAOKacoaXYsAALIFgNMO4cAA4qB260.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: erbosPostId2,
          url: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/05/ChMkJlbKyK-IMM4RAAOKacoaXYsAALIFgNMO4cAA4qB260.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId1,
          url: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/05/ChMkJlbKyK-IMM4RAAOKacoaXYsAALIFgNMO4cAA4qB260.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId2,
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId2,
          url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-cats-are-best-pets-1559241235.jpg?crop=0.586xw:0.880xh;0.0684xw,0.0611xh&resize=640:*",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: jiaranPostId2,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId1,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId2,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId2,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: ottoPostId2,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId1,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId2,
          url: "https://i.redd.it/5h1jyjy5n3n21.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId2,
          url: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/05/ChMkJlbKyK-IMM4RAAOKacoaXYsAALIFgNMO4cAA4qB260.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          post_id: mcaPostId2,
          url: "https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/05/ChMkJlbKyK-IMM4RAAOKacoaXYsAALIFgNMO4cAA4qB260.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post_media', null, {});
  }
};
