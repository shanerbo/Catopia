'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    cat_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
    Posts.hasMany(models.Comments);
    Posts.belongsTo(models.Users);
    Posts.hasMany(models.post_cats);
  };
  return Posts;
};