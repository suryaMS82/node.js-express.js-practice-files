// var express= require('express');

// var app=express();
// app.listen(4040);
// app.get('/',(req,res)=>{
//     app.set('content-Type','text/html');
//     res.send('iam home page');
//     res.end();
// });


// ///sending dta to sever
// var express= require('express');
// var app= express();

// app.listen(4040);

// app.get('/',(req,res)=> {
//     res.status(200).send('iam home page');
// });

// app.get('/about',(req,res)=> {
//     res.status(200).send('iam about page');
// });

// app.all('*',(req,res)=> {
//     res.status(404).send('!OOPS ,resources are not found');
// });


//PATH MODULE
var express= require('express');
var path= require('path');

var app=express();
app.use(express.static('./public'));
app.get('/',(req,res)=> {
    res.sendFile(path.resolve(__dirname ,'./index.html'));


});
app.get('*',(req,res)=> {
    res.send('!OPPs, resources are not found');
});
app.listen(4004);
 
