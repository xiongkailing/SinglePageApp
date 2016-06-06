var express = require('express');
var mysql=require('mysql');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/profile',function(req,res,next){
	var client=mysql.createConnection({
		user:'root',
		password:'password01!',
	});
	client.connect();
	client.query("use mysql",function(err,results,fields){
		if(!err){
			res.send("mysql database connected!");
			client.end();
			console.log('mysql connected closed!');
		}
	});
	//res.send("this is user's profile page");
});
module.exports = router;
