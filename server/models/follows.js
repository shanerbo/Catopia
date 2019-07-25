'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follows = sequelize.define('Follows', {
    follower: DataTypes.INTEGER,
    following: DataTypes.INTEGER
  }, {});
  Follows.associate = function (models) {
    // associations can be defined here
    Follows.belongsTo(models.Users, { foreignKey: 'follower' });
    Follows.belongsTo(models.Users, { foreignKey: 'following' });
  };

  Follows.getFollow = function (user_id) {
    return sequelize.query(`SELECT "Follows"."id", "Follows"."follower", "User"."id" AS "User.id", "User"."userName" AS "User.userName", "User"."prof_url" AS "User.prof_url", "User"."bio" AS "User.bio" FROM "Follows" AS "Follows" LEFT OUTER JOIN "Users" AS "User" ON "Follows"."following" = "User"."id" WHERE "Follows"."following" = '2';`, { type: sequelize.QueryTypes.SELECT });
  }
  return Follows;
};