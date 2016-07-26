var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Fjallwatch' });
});

router.get('/webcamera', function(req, res, next) {
	res.render('webcamera', {title: 'webcamera'});
});

module.exports = router;
