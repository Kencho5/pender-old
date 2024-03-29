const { db, userPosts, users } = require("../../utils/db");

async function similar(req, res) {
  id = req.body.id;
  breed = req.body.breed;

  userPosts
    .find({
      breed: {
        $regex: new RegExp(breed, "i"),
      },
      _id: { $ne: id },
    })
    .limit(3)
    .toArray((err, response) => {
      if (response) {
        res.status(200).send({
          code: 200,
          data: response,
        });
      } else {
        res.status(200).send({
          code: 404,
        });
      }
    });
}

module.exports = similar;
