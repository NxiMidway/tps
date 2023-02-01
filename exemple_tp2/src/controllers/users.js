const { findOne } = require("../services/db/crud");
const collection = "users";

async function findUser(req, res, next) {
  try {
    const result = await findOne(collection, req.query);
    return res.send(result);
  } catch (e) {
    console.log(e);
    return next(e);
  }
}

module.exports = {
  findUser,
};
