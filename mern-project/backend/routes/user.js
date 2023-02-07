const router = require("express").Router();
let User = require("../models/user.model");
console.log("Router Hit");
console.log(router);
router.route("/").get((req, res) => {
  console.log("endpoint hit");
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error; " + err));
});

router.route("/test").get((req, res) => {
  console.log("endpoint hit");
});
router.route("/add").post((req, res) => {
  console.log("endpoint hit");
  const userName = req.body.username;

  const newUser = new User({ userName });

  newUser
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.json(400).json("Error: " + err));
});

module.exports = router;
