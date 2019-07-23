'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cats = sequelize.define('Cats', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.STRING,
    spay: DataTypes.STRING,
    prof_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Cats.associate = function (models) {
    // associations can be defined here
    Cats.belongsTo(models.Users, { foreignKey: "user_id" });
  };

  Cats.findUserCats = (user_id) => {
    return Cats.findAll({ where: { user_id } });
  }

  return Cats;
};