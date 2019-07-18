'use strict';
function addFk(tableName, fkName, refTableName, queryInterface, Sequelize) {
  queryInterface.addColumn(
    tableName,
    fkName,
    {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      allowNull: false,
      references: {
        model: refTableName,
        key: 'id'
      }
    }
  )
}
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      // Comments table
      addFk('Comments', 'user_id', 'Users', queryInterface, Sequelize),
      addFk('Comments', 'post_id', 'Posts', queryInterface, Sequelize),
      /*
      addFk('Comments', 'reply_id', 'Comments', queryInterface, Sequelize),
      TODO: reply
      */
      // Post table
      addFk('Posts', 'cat_id', 'Cats', queryInterface, Sequelize),
      addFk('Posts', 'user_id', 'Users', queryInterface, Sequelize),
      // post_media table
      addFk('post_media', 'post_id', 'Posts', queryInterface, Sequelize),
      // post_cats table
      addFk('post_cats', 'cat_id', 'Cats', queryInterface, Sequelize),
      addFk('post_cats', 'post_id', 'Posts', queryInterface, Sequelize),
      // Cats table
      addFk('Cats', 'user_id', 'Users', queryInterface, Sequelize),
    ]);
  },

  down: (queryInterface, Sequelize) => {
   return Promise.all([
     queryInterface.removeColumn('Comments', 'post_id'),
     queryInterface.removeColumn('Comments', 'user_id'),

     queryInterface.removeColumn('Posts', 'cat_id'),
     queryInterface.removeColumn('Posts', 'user_id'),

     queryInterface.removeColumn('post_media', 'post_id'),

     queryInterface.removeColumn('post_cats', 'cat_id'),
     queryInterface.removeColumn('post_cats', 'post_id'),

     queryInterface.removeColumn('Cats', 'user_id')
    ]);
  }
};
