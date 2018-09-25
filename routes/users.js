var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/login',function(req, res){
  res.render('login');
})

router.get('/register', function(req, res){
  res.render('register');
})

router.post('/register', function(req, res){
  var name = req.body.name;
  var gender = req.body.gender;
  var email = req.body.email;
  var password = req.body.password;

  var user = new User({
    name: name,
    gender: gender,
    email: email,
    password: password
  });

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      if(err){
        console.log(err);
      }
      user.password = hash;
      user.save(function(err, callback){
        if(err) return console.error(err);
        console.log(callback);
      })
      res.redirect('/users/login');
    });
  });

})

module.exports = router;
