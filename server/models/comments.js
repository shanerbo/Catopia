'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    content: DataTypes.STRING,
    post_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Comments.associate = function (models) {
    // associations can be defined here
    Comments.belongsTo(models.Users, { foreignKey: 'user_id' });
    Comments.belongsTo(models.Posts, { foreignKey: 'post_id' });
  };

  Comments.addComment = (user_id, post_id, content) => {
    return Comments.create({
      user_id,
      post_id,
      content
    })
  }
  return Comments;
};