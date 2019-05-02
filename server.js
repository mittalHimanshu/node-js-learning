const express = require('express')
const app = express()
const routes = require('./routes')
var mongoose = require('mongoose')
const {mongoURI} = require('./config/keys')
var bodyParser = require('body-parser')
const session = require('express-session');
module.exports.MongoStore = require('connect-mongo')(session);

mongoose.connect(mongoURI, { useNewUrlParser: true }).then(
    () => { console.log('connected successfully') },
    err => { console.log(err) }
)

app.use(session(require('./config/session')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes)

app.listen(5000)