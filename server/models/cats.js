'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cats = sequelize.define('Cats', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.DATE,
    spay: DataTypes.STRING,
    prof_url: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Cats.associate = function (models) {
    // associations can be defined here
    Cats.belongsTo(models.Users, { foreignKey: "user_id" });
    Cats.belongsToMany(models.Posts, { through: "post_cats", foreignKey: "cat_id" });
  };

  Cats.findUserCats = (user_id) => {
    return Cats.findAll({ where: { user_id }, attributes: [['id', 'cat_id'], 'name', 'prof_url', 'user_id'] });
  }

  Cats.createCat = (cat) => {
    return Cats.create(cat);
  }
  return Cats;
};