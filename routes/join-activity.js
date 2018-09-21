var express = require('express');
var router = express.Router();

/* GET join activity page. */
router.get('/', function(req, res, next) {
  res.render('join-activity', { title: 'plogging' });
});

module.exports = router;
