'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_cats = sequelize.define('post_cats', {
    cat_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  post_cats.associate = function (models) {
    // associations can be defined here
  };
  return post_cats;
};