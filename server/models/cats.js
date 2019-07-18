'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cats = sequelize.define('Cats', {
    color: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.STRING,
    spay: DataTypes.STRING,
    prof_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Cats.associate = function(models) {
    // associations can be defined here
    Cats.hasMany(models.Posts);
    Cats.belongsTo(models.Users);
  };
  return Cats;
};