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
  return post_media;
};