var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var temperature = require('./models/temperature.js');
var utilities	= require('./models/utilities.js');

var port = process.env.PORT || 8282;

var router = express.Router();
router.get('/', function(req, res){
	res.json({message: 'Working'});
});

app.use(function(req, res, next) {
	 res.setHeader('Access-Control-Allow-Origin', '*');
	 res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	 res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	 next();
});

router.route('/innerTemperature')
	.get(function(req, res){
		temperature.getInnerTemperature(function(data){
			res.json(data);
		});
	});

router.route('/outerTemperature')
	.get(function(req, res){
		temperature.getOuterTemperature(function(data){
			res.json(data);
		});
	});

router.route('/cameraImage')
	.get(function(req, res){
		utilities.getCameraImage(function(data){
			res.json(data);
		});
	});

app.use('/api', router);

app.listen(port);
console.log('Starting server at ' + port);
