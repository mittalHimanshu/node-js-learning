const express = require("express");
const app = express();
const routes = require("./routes");
var mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
var bodyParser = require("body-parser");
const session = require("express-session");
var https = require("https");
var fs = require("fs");
module.exports.MongoStore = require("connect-mongo")(session);

mongoose.connect(mongoURI, { useNewUrlParser: true }).then(
  () => {
    console.log("connected successfully");
  },
  err => {
    console.log(err);
  }
);

var options = {
  key: fs.readFileSync("./ssl/cert.key"),
  cert: fs.readFileSync("./ssl/cert.pem"),
  requestCert: false,
  rejectUnauthorized: false
};

app.use(session(require("./config/session")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

https.createServer(options, app).listen(5000);
