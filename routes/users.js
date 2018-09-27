var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var User = require('../models/User');
var { check, validationResult } = require('express-validator/check');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/login',(req, res) => {
  res.render('login');
})

router.get('/register', (req, res) => {
  res.render('register',{errors: null});
})

router.post('/register', [
  check('name').isLength({ min: 10}),
  check('email', 'Invalid email format').isEmail()
  ], (req, res) => {

    var errors = validationResult(req);
    if(!errors.isEmpty()){
      console.log(errors.array());
      var errMsg = [];
      errors.array().forEach((msg) => {
        errMsg.push(msg.msg);
      })
      res.render('register',{errors: errMsg});
    }
    else{
      var user = new User({
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        password: req.body.password
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
          res.render('register',{errors: 'success!'});
          // res.redirect('/users/login');
        });
      });
    }
})

module.exports = router;
