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
    Users.hasMany(models.Posts);
    Users.hasMany(models.Comments);
    Users.hasMany(models.Cats);
    Users.hasMany(models.Follows);
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