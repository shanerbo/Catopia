'use strict';
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    userName: DataTypes.STRING,
    pwd: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    bio: DataTypes.STRING,
    prof_url: DataTypes.STRING
  }, {});
  Users.associate = function (models) {
    // associations can be defined here
    Users.hasMany(models.Posts, { foreignKey: "user_id" });
    Users.hasMany(models.post_likes, { foreignKey: "user_id" });
    Users.hasMany(models.Comments, { foreignKey: "user_id" });
    Users.hasMany(models.Cats, { foreignKey: "user_id" });
    Users.hasMany(models.Follows, { foreignKey: "user_id" });
    Users.hasMany(models.Follows, { foreignKey: "following" });
    // Users.belongsToMany(models.Posts, { through: 'post_likes', foreignKey: "user_id" });
  };

  Users.findUserByEmail = (email) => {
    return Users.findOne({ where: { email } });
  }
  Users.createUser = (
    userName,
    pwd,
    firstName,
    lastName,
    email,
    gender,
    phone,
    bio,
    prof_url) => {
    const newUser = {
      userName,
      pwd: bcrypt.hashSync(pwd, salt),
      firstName,
      lastName,
      email,
      gender,
      phone,
      bio,
      prof_url
    };
    return Users.create(newUser)
  }
  return Users;
};