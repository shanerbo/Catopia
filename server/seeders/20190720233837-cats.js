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
    return queryInterface.bulkInsert('Cats',
      [
        {
          user_id: erbosId,
          name: 'erboCat1',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%201.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
          spay: false,
          color: "white",
          age: getCatAge(80)
        },
        {
          user_id: erbosId,
          name: 'erboCat2',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%202.jpeg',
          createdAt: new Date(),
          age: getCatAge(50),
          spay: true,
          color: "grey",
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          name: 'erboCat3',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%203.jpeg',
          createdAt: new Date(),
          age: getCatAge(80),
          spay: false,
          color: "red, wait what?",
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'jiaranCat1',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%204.jpeg',
          createdAt: new Date(),
          age: getCatAge(80),
          spay: true,
          color: "pink af omg",
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'jiaranCat2',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%205.jpeg',
          createdAt: new Date(),
          age: getCatAge(80),
          spay: false,
          color: "rainbow",
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'jiaranCat3',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%206.jpeg',
          createdAt: new Date(),
          age: getCatAge(90),
          spay: false,
          color: "green",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'ottoCat1',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%207.jpeg',
          createdAt: new Date(),
          age: getCatAge(580),
          spay: true,
          color: "no telling",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'ottoCat2',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%208.jpeg',
          age: getCatAge(890),
          createdAt: new Date(),
          spay: true,
          color: "color of true elegance",
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'ottoCat3',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%209.jpeg',
          createdAt: new Date(),
          age: getCatAge(280),
          spay: true,
          color: "color of first love",
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'mcaCat1',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%2010.jpeg',
          createdAt: new Date(),
          spay: true,
          color: "guess",
          age: getCatAge(780),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'canada goose',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%2011.jpeg',
          createdAt: new Date(),
          age: getCatAge(380),
          spay: true,
          color: "kinda yellow",
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'Rigby',
          prof_url: 'https://storage.googleapis.com/cat_prof/Cat%20-%2012.jpeg',
          createdAt: new Date(),
          age: getCatAge(180),
          spay: true,
          color: "totally black",
          updatedAt: new Date()
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
