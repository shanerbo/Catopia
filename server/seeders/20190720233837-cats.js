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
    return queryInterface.bulkInsert('Cats',
      [
        {
          user_id: erbosId,
          name: 'erboCat1',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%201.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          name: 'erboCat2',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%202.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          name: 'erboCat3',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%203.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'jiaranCat1',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%204.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'jiaranCat2',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%205.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          name: 'jiaranCat3',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%206.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'ottoCat1',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%207.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'ottoCat2',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%208.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          name: 'ottoCat3',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%209.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'mcaCat1',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%2010.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'mcaCat2',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%2011.jpeg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          name: 'mcaCat3',
          prof_url: 'https://storage.cloud.google.com/cat_prof/Cat%20-%2012.jpeg',
          createdAt: new Date(),
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
