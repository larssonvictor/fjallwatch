var express = require('express');
var router = express.Router();

/* GET house temperature listing. */
router.get('/', function(req, res, next) {
  res.render('houseTemperature', {title:'house-temperature'});
});

module.exports = router;
