//var fs= require('fs')
// var express= require('express');
// var app= express();

var miggle=(req,res,next)=> {
   var methode= req.method;
   var url= req.url ;
   var year= new Date().getFullYear();
   console.log(methode,url,year);
   next();
}

app.get('/',miggle,(req,res)=> {

    res.send('home page');
    res.json(ages);
});

app.listen(4004);

module.exports= miggle ;


///middleware use 
var fs= require('fs')
var express= require('express');
var app= express();
var miggle= require('./project/express pro/eight.js');

app.use(miggle);

app.get('/',(req,res)=> {
    res.send('home page');
    //res.json(ages);
});

app.listen(4004);