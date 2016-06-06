var express=require('express');
var api=express();

var test=require('./v1/test');
api.use('/test',test);

module.exports=api;
