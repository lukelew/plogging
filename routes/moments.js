var express = require('express');
var router = express.Router();

/* GET moments page. */
router.get('/', function(req, res, next) {
  res.render('moments');
});

module.exports = router;
