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
    // Posts.belongsToMany(models.Users, { through: 'post_likes', foreignKey: "post_id" });
    Posts.hasMany(models.post_media, { foreignKey: "post_id" });
    Posts.hasMany(models.post_likes, { foreignKey: "post_id" });

  };
  Posts.findUserPosts = (user_id) => {
    return Posts.findAll({ where: { user_id } })
  }

  Posts.getFollowingUserPosts = (include, conditionArray) => {
    let searchCondition = include;
    console.log("conditionArray", conditionArray);
    searchCondition.where = {
      user_id: conditionArray
    };
    return Posts.findAll(include);
  };
  return Posts;
};