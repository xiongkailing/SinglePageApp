var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
	res.send('test get');
});

router.post('/',function(req,res,next){
	throw new Error('not implement');
});

router.put('/',function(req,res,next){
	throw new Error('not implement');
});

router.delete('/',function(req,res,next){
	throw new Error('not implement');
});

module.exports=router;
