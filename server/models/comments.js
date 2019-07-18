'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Comments.associate = function(models) {
    // associations can be defined here
    Comments.belongsTo(models.Users);
    Comments.belongsTo(models.Posts);
  };
  return Comments;
};