const router = require("express").Router();
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

router.get('/', (req, res) => {
  res.send("post page")
})

module.exports = router;
