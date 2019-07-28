'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follows = sequelize.define('Follows', {
    user_id: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    mutual: DataTypes.INTEGER
  }, {});
  Follows.associate = function (models) {
    // associations can be defined here
    Follows.belongsTo(models.Users, { foreignKey: 'user_id' });
    Follows.belongsTo(models.Users, { foreignKey: 'following' });
  };

  Follows.getFollower = function (user_id, follows) {
    return follows === "follower" ? sequelize.query(`select "userName", "email", "user_id", "following", "bio", "prof_url" from "Users" full join "Follows" on "Users".id = "Follows".user_id where  "Follows".following = ?`, { replacements: [user_id], type: sequelize.QueryTypes.SELECT }) : sequelize.query(`select "userName", "email", "user_id", "following", "bio", "prof_url" from "Users" full join "Follows" on "Users".id = "Follows".following where user_id = ?`, { replacements: [user_id], type: sequelize.QueryTypes.SELECT });
  }
  return Follows;
};
