'use strict';
module.exports = (sequelize, DataTypes) => {
	const post_likes = sequelize.define('post_likes', {
		user_id: DataTypes.INTEGER,
		post_id: DataTypes.INTEGER
	}, {});
	post_likes.associate = function (models) {
		// associations can be defined here
		post_likes.belongsTo(models.Posts, { foreignKey: 'post_id' });
		post_likes.belongsTo(models.Users, { foreignKey: 'user_id' });
	};

	return post_likes;
};