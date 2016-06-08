var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/v1/test TestGet
 * @apiGroup Test
 * @apiVersion 0.0.1
 * @apiName Test get
 * @apiDescription the detail descriptions
 */
router.get('/',function(req,res,next){
	res.json({key:'name',value:'xiongkl'});
});

/**
 * @api {post} /api/v1/test TestPost
 * @apiGroup Test
 * @apiVersion 0.0.1
 * @apiName Test Post
 */
router.post('/',function(req,res,next){
	throw new Error('not implement');
});


/**
 * @api {put} /api/v1/test TestPut
 * @apiGroup Test
 * @apiVersion 0.0.1
 * @apiName Test put
 */
router.put('/',function(req,res,next){
	throw new Error('not implement');
});

/**
 * @api {delete} /api/v1/test TestDelete
 * @apiGroup Test
 * @apiVersion 0.0.1
 * @apiName Test delete
 * @apiIgnore Deprecated
 */
router.delete('/',function(req,res,next){
	throw new Error('not implement');
});

module.exports=router;
