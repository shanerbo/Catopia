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
    let erbosPosts = await findUserPostsByEmail("erbos@sfu.ca");
    let jiaranPosts = await findUserPostsByEmail("jiarany@sfu.ca");
    let ottoPosts = await findUserPostsByEmail("ohu@sfu.ca");
    let mcaPosts = await findUserPostsByEmail("mca176@sfu.ca");
    let d1Posts = await findUserPostsByEmail("dummy1@sfu.ca");
    let d2Posts = await findUserPostsByEmail("dummy2@sfu.ca");
    let d3Posts = await findUserPostsByEmail("dummy3@sfu.ca");
    let d4Posts = await findUserPostsByEmail("dummy4@sfu.ca");
    let d5Posts = await findUserPostsByEmail("dummy5@sfu.ca");
    let d6Posts = await findUserPostsByEmail("dummy6@sfu.ca");



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

    let erbosPostId1 = erbosPosts[0].get('id');
    let erbosPostId2 = erbosPosts[1].get('id');
    let erbosPostId3 = erbosPosts[2].get('id');
    let erbosPostId4 = erbosPosts[3].get('id');
    let erbosPostId5 = erbosPosts[4].get('id');

    let jiaranPostId1 = jiaranPosts[0].get('id');
    let jiaranPostId2 = jiaranPosts[1].get('id');
    let jiaranPostId3 = jiaranPosts[2].get('id');
    let jiaranPostId4 = jiaranPosts[3].get('id');
    let jiaranPostId5 = jiaranPosts[4].get('id');

    let ottoPostId1 = ottoPosts[0].get('id');
    let ottoPostId2 = ottoPosts[1].get('id');
    let ottoPostId3 = ottoPosts[2].get('id');
    let ottoPostId4 = ottoPosts[3].get('id');
    let ottoPostId5 = ottoPosts[4].get('id');

    let mcaPostId1 = mcaPosts[0].get('id');
    let mcaPostId2 = mcaPosts[1].get('id');
    let mcaPostId3 = mcaPosts[2].get('id');
    let mcaPostId4 = mcaPosts[3].get('id');
    let mcaPostId5 = mcaPosts[4].get('id');


    let d1PostId1 = d1Posts[0].get('id');
    let d1PostId2 = d1Posts[1].get('id');
    let d1PostId3 = d1Posts[2].get('id');
    let d1PostId4 = d1Posts[3].get('id');
    let d1PostId5 = d1Posts[4].get('id');

    let d2PostId1 = d2Posts[0].get('id');
    let d2PostId2 = d2Posts[1].get('id');
    let d2PostId3 = d2Posts[2].get('id');
    let d2PostId4 = d2Posts[3].get('id');
    let d2PostId5 = d2Posts[4].get('id');

    let d3PostId1 = d3Posts[0].get('id');
    let d3PostId2 = d3Posts[1].get('id');
    let d3PostId3 = d3Posts[2].get('id');
    let d3PostId4 = d3Posts[3].get('id');
    let d3PostId5 = d3Posts[4].get('id');

    let d4PostId1 = d4Posts[0].get('id');
    let d4PostId2 = d4Posts[1].get('id');
    let d4PostId3 = d4Posts[2].get('id');
    let d4PostId4 = d4Posts[3].get('id');
    let d4PostId5 = d4Posts[4].get('id');

    let d5PostId1 = d5Posts[0].get('id');
    let d5PostId2 = d5Posts[1].get('id');
    let d5PostId3 = d5Posts[2].get('id');
    let d5PostId4 = d5Posts[3].get('id');
    let d5PostId5 = d5Posts[4].get('id');

    let d6PostId1 = d6Posts[0].get('id');
    let d6PostId2 = d6Posts[1].get('id');
    let d6PostId3 = d6Posts[2].get('id');
    let d6PostId4 = d6Posts[3].get('id');
    let d6PostId5 = d6Posts[4].get('id');

    return queryInterface.bulkInsert('post_likes', [
      { user_id: d2, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: ottoPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: erbosPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d5PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: mcaPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d6PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d3PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d3PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: ottoPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d4PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d2PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: ottoPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d2PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: ottoPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: mcaPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: mcaPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: mcaPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d2PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d2PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d3PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d1PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d5PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d5PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d4PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: erbosPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d5PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: jiaranPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: jiaranPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: jiaranPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: mcaPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d3PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: erbosPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: erbosPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: ottoPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d1PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: mcaPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d3PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: ottoPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d1PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: jiaranPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: mcaPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d4PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d5PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: erbosPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: jiaranPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d2PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d3PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d5PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: ottoPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: mcaPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d1PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d6PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: erbosPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: erbosPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d5PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d6PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d3PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d2PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d3PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: erbosPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d6PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d3PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d2PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d2PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: jiaranPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d1PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: jiaranPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: ottoPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d4PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d4PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: mcaPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d2PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: jiaranPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: ottoPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: ottoPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d1PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d3PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: erbosPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d4PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: ottoPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: erbosPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d3PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: erbosPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: erbosPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d4PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: mcaPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d4PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: jiaranPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: erbosPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d1PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: erbosPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: ottoPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: jiaranPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: ottoPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d1PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d3PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d5PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: jiaranPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d3PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d5PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: jiaranPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d5PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d3PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: jiaranPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d4PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: erbosPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d4PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d2PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d4PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: jiaranPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: jiaranPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d4PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d4PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: ottoPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: ottoPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d6PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d6PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d5PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: erbosPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: mcaPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d2PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d5PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d3PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: ottoPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: ottoPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d3PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: ottoPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: mcaPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: ottoPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: ottoPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: mcaPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d1PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: jiaranPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: erbosPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: mcaPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d5PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d6PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: ottoPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d3PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: jiaranPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d4PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d1PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d5PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d6PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: ottoPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d3PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d6PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: ottoPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: erbosPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d4PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: mcaPostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d1PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d2PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: erbosPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d6PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d3PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d1PostId3, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d2PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d2, post_id: d5PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d4, post_id: d6PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d2PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: mcaPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d6PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: d1PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: mcaPostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: jiaranId, post_id: d2PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: d1PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d2PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: jiaranPostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d6, post_id: mcaPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: d6PostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: mcaId, post_id: d4PostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d3, post_id: mcaPostId4, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d1, post_id: d3PostId1, createdAt: new Date(), updatedAt: new Date() },
      { user_id: d5, post_id: d4PostId5, createdAt: new Date(), updatedAt: new Date() },
      { user_id: erbosId, post_id: ottoPostId2, createdAt: new Date(), updatedAt: new Date() },
      { user_id: ottoId, post_id: ottoPostId5, createdAt: new Date(), updatedAt: new Date() },

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
