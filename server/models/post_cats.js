'use strict';
module.exports = (sequelize, DataTypes) => {
  const post_cats = sequelize.define('post_cats', {
    cat_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  post_cats.associate = function (models) {
    // associations can be defined here
    post_cats.belongsTo(models.Posts, { foreignKey: "post_id" });
    post_cats.belongsTo(models.Cats, { foreignKey: "cat_id" });
  };
  return post_cats;
};