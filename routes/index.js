const express = require("express");
const router = express.Router();
const fs = require("fs");
var User = require("../model/user");

router.get("/", (req, res) => {
  req.session.foo = "Himanshu";
  return res.send("hello world!!!");
});

router.post("/register", (req, res) => {
  User.create(req.body, (err, user) => {
    if (err) return console.log(err);
    return res.json({ message: "user created" });
  });
});

module.exports = router;
