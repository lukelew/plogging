var express = require('express');
var bodyParser = require('body-parser');
var User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


router.get('/register', function(req, res){
  res.render('register')
})

router.post('/register', function(req, res){
  var user = new User({
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    password: req.body.password
  });

  user.save(function(err, callback){
    if(err) return console.error(err);
    console.log(callback);
  })
})

module.exports = router;
