'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Follows', [
      {
        user_id: 1,
        following: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 1,
        following: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 2,
        following: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 3,
        following: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        following: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: 4,
        following: 2,
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
    return queryInterface.bulkDelete('Follow', null, {});
  }
};
