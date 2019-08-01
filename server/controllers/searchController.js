const db = require('../models/index');
const Op = db.Sequelize.Op;

exports.searchForUserOrCat = async (req, res, next) => {
  if (!req.query.keyword) {
    return res.status(401).json({});
  }
  const keyword = "%" + req.query.keyword + "%";
  const foundUsers = await db.Users.findAll({
    where: {
      [Op.or]: {
        userName: {
          [Op.like]: keyword
        },
        bio: {
          [Op.like]: keyword
        }
      }
    },
    attributes: {
      exclude: ['pwd']
    }
  });
  const foundCats = await db.Cats.findAll({
    where: {
      [Op.or]: {
        name: {
          [Op.like]: keyword
        },
        color: {
          [Op.like]: keyword
        },
        gender: {
          [Op.like]: keyword
        }
      }
    }
  });
  let searchResult = { foundUsers, foundCats };
  res.json(searchResult);
};