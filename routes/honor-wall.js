var express = require('express');
var router = express.Router();

/* GET honor wall page. */
router.get('/', function(req, res, next) {
  res.render('honor-wall');
});

module.exports = router;
