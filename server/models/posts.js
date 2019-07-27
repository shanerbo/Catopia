'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    user_id: DataTypes.INTEGER
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
    Posts.belongsTo(models.Users, { foreignKey: "user_id" });
    Posts.hasMany(models.Comments, { foreignKey: "post_id" });
    Posts.hasMany(models.post_cats, { foreignKey: "cat_id" });
    Posts.hasMany(models.post_media, { foreignKey: "post_id" });
  };
  Posts.findUserPosts = (user_id) => {
    return Posts.findAll({ where: { user_id } })
  }
  return Posts;
};