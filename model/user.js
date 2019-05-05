var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var UserSchema = new mongoose.Schema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
});

UserSchema.pre("save", function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

module.exports = User = mongoose.model("userDemo", UserSchema);
