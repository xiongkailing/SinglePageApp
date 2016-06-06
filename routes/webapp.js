var express=require('express');
var app=express();

var index=require('./index');
app.use('/',index);

var user=require('./users');
app.use('/users',user);

module.exports=app;