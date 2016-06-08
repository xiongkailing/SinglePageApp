var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/v1/data DataGet
 * @apiGroup Data
 * @apiVersion 0.0.1
 * @apiName Test get
 */
router.get('/',function(req,res,next){
	res.json({key:'name',value:'xiongkl'});
});

/**
 * @api {post} /api/v1/data DataPost
 * @apiGroup Data
 * @apiVersion 0.0.1
 * @apiName data Post
 */
router.post('/',function(req,res,next){
	throw new Error('not implement');
});


/**
 * @api {put} /api/v1/test DataPut
 * @apiGroup Data
 * @apiVersion 0.0.1
 * @apiName data put
 */
router.put('/',function(req,res,next){
	throw new Error('not implement');
});

/**
 * @api {delete} /api/v1/test DataDelete
 * @apiGroup Test
 * @apiVersion 0.0.1
 * @apiName data delete
 */
router.delete('/',function(req,res,next){
	throw new Error('not implement');
});

module.exports=router;
