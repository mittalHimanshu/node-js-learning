var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    name: {
        type: String
    }
})

module.exports = User = mongoose.model('userDemo', UserSchema)