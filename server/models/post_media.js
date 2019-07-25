'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_media = sequelize.define('post_media', {
    url: DataTypes.STRING,
    post_id: DataTypes.INTEGER
  }, {});
  post_media.associate = function (models) {
    // associations can be defined here
    post_media.belongsTo(models.Posts, { foreignKey: "post_id" });
  };
  post_media.addPostMedia = function (post_id, url) {
    return post_media.create({ post_id, url });
  }
  return post_media;
};