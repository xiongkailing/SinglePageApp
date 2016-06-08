var express=require('express');
var api=express();

var test=require('./v1/test');
api.use('/test',test);

var data=require('./v1/data');
api.use('/data',data);

module.exports=api;
