'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    cat_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Posts.associate = function (models) {
    // associations can be defined here
    Posts.hasMany(models.Comments, { foreignKey: "post_id" });
    Posts.belongsTo(models.Users, { foreignKey: "user_id" });
    Posts.hasMany(models.post_cats, { foreignKey: "cat_id" });
  };
  return Posts;
};