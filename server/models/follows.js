'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follows = sequelize.define('Follows', {
    follower: DataTypes.INTEGER,
    following: DataTypes.INTEGER
  }, {});
  Follows.associate = function (models) {
    // associations can be defined here
    Follows.belongsTo(models.Users);
    Follows.hasOne(models.Users);
  };
  return Follows;
};