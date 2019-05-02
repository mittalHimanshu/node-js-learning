const express = require('express')
const router = express.Router()
var User = require('../model/user')

router.get('/hello', (req, res) => {
    req.session.foo = 'Himanshu'
    console.log()
    return res.send('hello world!!!')
})

router.post('/register', (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) return console.log(err)
        return res.json({'message': 'user created'})
      })
})

module.exports = router