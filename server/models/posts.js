'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    user_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
    Posts.belongsTo(models.Users, { foreignKey: "user_id" });
    Posts.hasMany(models.Comments, { foreignKey: "post_id" });
    Posts.belongsToMany(models.Cats, { through: "post_cats", foreignKey: "post_id" });
    Posts.hasMany(models.post_media, { foreignKey: "post_id" });
  };
  Posts.findUserPosts = (user_id) => {
    return Posts.findAll({ where: { user_id } })
  }
  Posts.createPost = (user_id, description) => {
    return Posts.create({ user_id, description });
  }
  return Posts;
};