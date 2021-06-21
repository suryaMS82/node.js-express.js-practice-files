var express= require('express');

var app= express();

app.get('/home',(req,res)=> {
    res.render('index');
});
app.listen(3003);
