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
    let d1Posts = await findUserPostsByEmail("dummy1@sfu.ca");
    let d2Posts = await findUserPostsByEmail("dummy2@sfu.ca");
    let d3Posts = await findUserPostsByEmail("dummy3@sfu.ca");
    let d4Posts = await findUserPostsByEmail("dummy4@sfu.ca");
    let d5Posts = await findUserPostsByEmail("dummy5@sfu.ca");
    let d6Posts = await findUserPostsByEmail("dummy6@sfu.ca");

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

    return queryInterface.bulkInsert('post_media',
      [
        { post_id: erbosPostId1, url: "https://storage.googleapis.com/user_posts/cat1.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId1, url: "https://storage.googleapis.com/user_posts/cat2.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId2, url: "https://storage.googleapis.com/user_posts/cat3.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId2, url: "https://storage.googleapis.com/user_posts/cat4.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId2, url: "https://storage.googleapis.com/user_posts/cat5.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId3, url: "https://storage.googleapis.com/user_posts/cat6.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId3, url: "https://storage.googleapis.com/user_posts/cat7.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId3, url: "https://storage.googleapis.com/user_posts/cat8.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId4, url: "https://storage.googleapis.com/user_posts/cat9.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId4, url: "https://storage.googleapis.com/user_posts/cat10.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId5, url: "https://storage.googleapis.com/user_posts/cat11.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId5, url: "https://storage.googleapis.com/user_posts/cat12.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId5, url: "https://storage.googleapis.com/user_posts/cat13.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId5, url: "https://storage.googleapis.com/user_posts/cat14.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: erbosPostId5, url: "https://storage.googleapis.com/user_posts/cat15.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId1, url: "https://storage.googleapis.com/user_posts/cat16.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId1, url: "https://storage.googleapis.com/user_posts/cat17.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId2, url: "https://storage.googleapis.com/user_posts/cat18.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId2, url: "https://storage.googleapis.com/user_posts/cat19.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId2, url: "https://storage.googleapis.com/user_posts/cat20.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId3, url: "https://storage.googleapis.com/user_posts/cat21.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId3, url: "https://storage.googleapis.com/user_posts/cat22.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId3, url: "https://storage.googleapis.com/user_posts/cat23.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId4, url: "https://storage.googleapis.com/user_posts/cat24.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId4, url: "https://storage.googleapis.com/user_posts/cat25.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId5, url: "https://storage.googleapis.com/user_posts/cat26.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId5, url: "https://storage.googleapis.com/user_posts/cat27.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId5, url: "https://storage.googleapis.com/user_posts/cat28.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId5, url: "https://storage.googleapis.com/user_posts/cat29.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: jiaranPostId5, url: "https://storage.googleapis.com/user_posts/cat30.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId1, url: "https://storage.googleapis.com/user_posts/cat31.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId1, url: "https://storage.googleapis.com/user_posts/cat32.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId2, url: "https://storage.googleapis.com/user_posts/cat33.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId2, url: "https://storage.googleapis.com/user_posts/cat34.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId2, url: "https://storage.googleapis.com/user_posts/cat35.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId3, url: "https://storage.googleapis.com/user_posts/cat36.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId3, url: "https://storage.googleapis.com/user_posts/cat37.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId3, url: "https://storage.googleapis.com/user_posts/cat38.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId4, url: "https://storage.googleapis.com/user_posts/cat39.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId4, url: "https://storage.googleapis.com/user_posts/cat40.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId5, url: "https://storage.googleapis.com/user_posts/cat41.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId5, url: "https://storage.googleapis.com/user_posts/cat42.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId5, url: "https://storage.googleapis.com/user_posts/cat43.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId5, url: "https://storage.googleapis.com/user_posts/cat44.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: ottoPostId5, url: "https://storage.googleapis.com/user_posts/cat45.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId1, url: "https://storage.googleapis.com/user_posts/cat46.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId1, url: "https://storage.googleapis.com/user_posts/cat47.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId2, url: "https://storage.googleapis.com/user_posts/cat48.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId2, url: "https://storage.googleapis.com/user_posts/cat49.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId2, url: "https://storage.googleapis.com/user_posts/cat50.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId3, url: "https://storage.googleapis.com/user_posts/cat51.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId3, url: "https://storage.googleapis.com/user_posts/cat52.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId3, url: "https://storage.googleapis.com/user_posts/cat53.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId4, url: "https://storage.googleapis.com/user_posts/cat54.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId4, url: "https://storage.googleapis.com/user_posts/cat55.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId5, url: "https://storage.googleapis.com/user_posts/cat56.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId5, url: "https://storage.googleapis.com/user_posts/cat57.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId5, url: "https://storage.googleapis.com/user_posts/cat58.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId5, url: "https://storage.googleapis.com/user_posts/cat59.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: mcaPostId5, url: "https://storage.googleapis.com/user_posts/cat60.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId1, url: "https://storage.googleapis.com/user_posts/cat61.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId1, url: "https://storage.googleapis.com/user_posts/cat62.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId2, url: "https://storage.googleapis.com/user_posts/cat63.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId2, url: "https://storage.googleapis.com/user_posts/cat64.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId2, url: "https://storage.googleapis.com/user_posts/cat65.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId3, url: "https://storage.googleapis.com/user_posts/cat66.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId3, url: "https://storage.googleapis.com/user_posts/cat67.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId3, url: "https://storage.googleapis.com/user_posts/cat68.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId4, url: "https://storage.googleapis.com/user_posts/cat69.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId4, url: "https://storage.googleapis.com/user_posts/cat70.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId5, url: "https://storage.googleapis.com/user_posts/cat71.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId5, url: "https://storage.googleapis.com/user_posts/cat72.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId5, url: "https://storage.googleapis.com/user_posts/cat73.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId5, url: "https://storage.googleapis.com/user_posts/cat74.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d1PostId5, url: "https://storage.googleapis.com/user_posts/cat75.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId1, url: "https://storage.googleapis.com/user_posts/cat76.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId1, url: "https://storage.googleapis.com/user_posts/cat77.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId2, url: "https://storage.googleapis.com/user_posts/cat78.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId2, url: "https://storage.googleapis.com/user_posts/cat79.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId2, url: "https://storage.googleapis.com/user_posts/cat80.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId3, url: "https://storage.googleapis.com/user_posts/cat81.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId3, url: "https://storage.googleapis.com/user_posts/cat82.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId3, url: "https://storage.googleapis.com/user_posts/cat83.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId4, url: "https://storage.googleapis.com/user_posts/cat84.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId4, url: "https://storage.googleapis.com/user_posts/cat85.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId5, url: "https://storage.googleapis.com/user_posts/cat86.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId5, url: "https://storage.googleapis.com/user_posts/cat87.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId5, url: "https://storage.googleapis.com/user_posts/cat88.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId5, url: "https://storage.googleapis.com/user_posts/cat89.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d2PostId5, url: "https://storage.googleapis.com/user_posts/cat90.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId1, url: "https://storage.googleapis.com/user_posts/cat91.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId1, url: "https://storage.googleapis.com/user_posts/cat92.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId2, url: "https://storage.googleapis.com/user_posts/cat93.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId2, url: "https://storage.googleapis.com/user_posts/cat94.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId2, url: "https://storage.googleapis.com/user_posts/cat95.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId3, url: "https://storage.googleapis.com/user_posts/cat96.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId3, url: "https://storage.googleapis.com/user_posts/cat97.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId3, url: "https://storage.googleapis.com/user_posts/cat98.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId4, url: "https://storage.googleapis.com/user_posts/cat99.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId4, url: "https://storage.googleapis.com/user_posts/cat100.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId5, url: "https://storage.googleapis.com/user_posts/cat101.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId5, url: "https://storage.googleapis.com/user_posts/cat102.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId5, url: "https://storage.googleapis.com/user_posts/cat103.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId5, url: "https://storage.googleapis.com/user_posts/cat104.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d3PostId5, url: "https://storage.googleapis.com/user_posts/cat105.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId1, url: "https://storage.googleapis.com/user_posts/cat106.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId1, url: "https://storage.googleapis.com/user_posts/cat107.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId2, url: "https://storage.googleapis.com/user_posts/cat108.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId2, url: "https://storage.googleapis.com/user_posts/cat109.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId2, url: "https://storage.googleapis.com/user_posts/cat110.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId3, url: "https://storage.googleapis.com/user_posts/cat111.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId3, url: "https://storage.googleapis.com/user_posts/cat112.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId3, url: "https://storage.googleapis.com/user_posts/cat113.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId4, url: "https://storage.googleapis.com/user_posts/cat114.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId4, url: "https://storage.googleapis.com/user_posts/cat115.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId5, url: "https://storage.googleapis.com/user_posts/cat116.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId5, url: "https://storage.googleapis.com/user_posts/cat117.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId5, url: "https://storage.googleapis.com/user_posts/cat118.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId5, url: "https://storage.googleapis.com/user_posts/cat119.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d4PostId5, url: "https://storage.googleapis.com/user_posts/cat120.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId1, url: "https://storage.googleapis.com/user_posts/cat121.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId1, url: "https://storage.googleapis.com/user_posts/cat122.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId2, url: "https://storage.googleapis.com/user_posts/cat123.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId2, url: "https://storage.googleapis.com/user_posts/cat124.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId2, url: "https://storage.googleapis.com/user_posts/cat125.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId3, url: "https://storage.googleapis.com/user_posts/cat126.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId3, url: "https://storage.googleapis.com/user_posts/cat127.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId3, url: "https://storage.googleapis.com/user_posts/cat128.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId4, url: "https://storage.googleapis.com/user_posts/cat129.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId4, url: "https://storage.googleapis.com/user_posts/cat130.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId5, url: "https://storage.googleapis.com/user_posts/cat131.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId5, url: "https://storage.googleapis.com/user_posts/cat132.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId5, url: "https://storage.googleapis.com/user_posts/cat133.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId5, url: "https://storage.googleapis.com/user_posts/cat134.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d5PostId5, url: "https://storage.googleapis.com/user_posts/cat135.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId1, url: "https://storage.googleapis.com/user_posts/cat136.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId1, url: "https://storage.googleapis.com/user_posts/cat137.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId2, url: "https://storage.googleapis.com/user_posts/cat138.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId2, url: "https://storage.googleapis.com/user_posts/cat139.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId2, url: "https://storage.googleapis.com/user_posts/cat140.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId3, url: "https://storage.googleapis.com/user_posts/cat141.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId3, url: "https://storage.googleapis.com/user_posts/cat142.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId3, url: "https://storage.googleapis.com/user_posts/cat143.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId4, url: "https://storage.googleapis.com/user_posts/cat144.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId4, url: "https://storage.googleapis.com/user_posts/cat145.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId5, url: "https://storage.googleapis.com/user_posts/cat146.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId5, url: "https://storage.googleapis.com/user_posts/cat147.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId5, url: "https://storage.googleapis.com/user_posts/cat148.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId5, url: "https://storage.googleapis.com/user_posts/cat149.jpg", createdAt: new Date(), updatedAt: new Date() },
        { post_id: d6PostId5, url: "https://storage.googleapis.com/user_posts/cat150.jpg", createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('post_media', null, {});
  }
};
