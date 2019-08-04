'use strict';
const model = require("../models/index");

async function userId(email) {
  return await model.Users.findUserByEmail(email).get('id');
}
function getCatAge(daysAgo) {
  const catAge = new Date();
  catAge.setTime(catAge.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return catAge;
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
    return queryInterface.bulkInsert('Cats',
      [
        {
          user_id: erbosId,
          name: 'Ellis',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile1.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
          spay: false,
          color: "white",
          gender: "boy",
          age: getCatAge(100)
        },
        {
          user_id: erbosId,
          name: 'Agnes',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile2.jpeg',
          createdAt: new Date(),
          age: getCatAge(50),
          spay: true,
          gender: "boy",
          color: "grey",
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          name: 'Marie',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile3.jpeg',
          createdAt: new Date(),
          age: getCatAge(200),
          gender: "girl",
          spay: false,
          color: "red, wait what?",
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'Bethany',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile4.jpeg',
          createdAt: new Date(),
          age: getCatAge(300),
          gender: "girl",
          spay: true,
          color: "pink af omg",
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'Hollie',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile5.jpeg',
          createdAt: new Date(),
          age: getCatAge(80),
          gender: "boy",
          spay: false,
          color: "rainbow",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'Paige',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile6.jpeg',
          createdAt: new Date(),
          age: getCatAge(500),
          gender: "boy",
          spay: false,
          color: "green",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'Kyla',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile7.jpeg',
          createdAt: new Date(),
          age: getCatAge(580),
          gender: "boy",
          spay: true,
          color: "no telling",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'Harmony',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile8.jpeg',
          age: getCatAge(890),
          createdAt: new Date(),
          gender: "girl",
          spay: true,
          color: "color of true elegance",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'Tamara',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile9.jpeg',
          createdAt: new Date(),
          age: getCatAge(234),
          gender: "boy",
          spay: true,
          color: "color of first love",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'Megan',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile10.jpeg',
          createdAt: new Date(),
          gender: "boy",
          spay: true,
          color: "guess",
          age: getCatAge(655),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'Nicky',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile11.jpeg',
          createdAt: new Date(),
          age: getCatAge(380),
          gender: "girl",
          spay: true,
          color: "kinda yellow",
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'Nutmeg',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile12.jpeg',
          createdAt: new Date(),
          age: getCatAge(180),
          gender: "boy",
          spay: true,
          color: "totally black",
          updatedAt: new Date()
        },
        {
          user_id: d1,
          name: 'Licorice',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile13.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
          spay: false,
          color: "white",
          gender: "boy",
          age: getCatAge(400)
        },
        {
          user_id: d2,
          name: 'Alertpants',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile14.jpeg',
          createdAt: new Date(),
          age: getCatAge(50),
          spay: true,
          gender: "boy",
          color: "grey",
          updatedAt: new Date()
        },
        {
          user_id: d2,
          name: 'Tigger',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile15.jpeg',
          createdAt: new Date(),
          age: getCatAge(200),
          gender: "girl",
          spay: false,
          color: "red, wait what?",
          updatedAt: new Date()
        },
        {
          user_id: d2,
          name: 'Cleartoes',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile16.jpeg',
          createdAt: new Date(),
          age: getCatAge(300),
          gender: "girl",
          spay: true,
          color: "pink af omg",
          updatedAt: new Date()
        },
        {
          user_id: d3,
          name: 'Batwoman',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile17.jpeg',
          createdAt: new Date(),
          age: getCatAge(80),
          gender: "boy",
          spay: false,
          color: "rainbow",
          updatedAt: new Date()
        },
        {
          user_id: d3,
          name: 'Smart',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile18.jpeg',
          createdAt: new Date(),
          age: getCatAge(500),
          gender: "boy",
          spay: false,
          color: "green",
          updatedAt: new Date()
        },
        {
          user_id: d3,
          name: 'Watchful',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile19.jpeg',
          createdAt: new Date(),
          age: getCatAge(580),
          gender: "boy",
          spay: true,
          color: "no telling",
          updatedAt: new Date()
        },
        {
          user_id: d3,
          name: 'Nellie',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile20.jpeg',
          age: getCatAge(890),
          createdAt: new Date(),
          gender: "girl",
          spay: true,
          color: "color of true elegance",
          updatedAt: new Date()
        },
        {
          user_id: d4,
          name: 'Domino',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile21.jpeg',
          createdAt: new Date(),
          age: getCatAge(234),
          gender: "boy",
          spay: true,
          color: "color of first love",
          updatedAt: new Date()
        },
        {
          user_id: d4,
          name: 'Oreo',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile22.jpeg',
          createdAt: new Date(),
          gender: "boy",
          spay: true,
          color: "guess",
          age: getCatAge(655),
          updatedAt: new Date()
        },
        {
          user_id: d4,
          name: 'Chess',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile23.jpeg',
          createdAt: new Date(),
          age: getCatAge(380),
          gender: "girl",
          spay: true,
          color: "kinda yellow",
          updatedAt: new Date()
        },
        {
          user_id: d5,
          name: 'Dice',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile24.jpeg',
          createdAt: new Date(),
          age: getCatAge(180),
          gender: "boy",
          spay: true,
          color: "totally black",
          updatedAt: new Date()
        },
        {
          user_id: d5,
          name: 'Sundae',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile25.jpeg',
          createdAt: new Date(),
          age: getCatAge(380),
          gender: "girl",
          spay: true,
          color: "kinda yellow",
          updatedAt: new Date()
        },
        {
          user_id: d6,
          name: 'Nicol',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile26.jpeg',
          createdAt: new Date(),
          age: getCatAge(180),
          gender: "boy",
          spay: true,
          color: "totally black",
          updatedAt: new Date()
        },
        {
          user_id: d6,
          name: 'Puffin',
          prof_url: 'https://storage.googleapis.com/cat_prof/cat_profile27.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
          spay: false,
          color: "white",
          gender: "boy",
          age: getCatAge(400)
        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  
      Example:
    */
    return queryInterface.bulkDelete('Cats', null, {});
  }
};
