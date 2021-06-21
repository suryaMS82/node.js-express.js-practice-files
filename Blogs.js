var express= require('express');
var morgan= require('morgan');
var mongoose= require('mongoose');
 var Blog= require('./models/blogs');
 
var app=express();
//connect to mangodb batabase
var mgdb='mongodb+srv://suryaMS:surya123@nodejsapp.az5se.mongodb.net/node-app?retryWrites=true&w=majority';
mongoose.connect(mgdb,{ useNewUrlParser: true,  useUnifiedTopology: true  })
     .then((result)=> app.listen(3030))
      .catch((err)=> console.log(err));
app.set('view engine','ejs')
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/blogs',(req,res)=> {
    Blog.find()
    .then((result)=> {
        res.render('index',{title:'All Blogs', blogs: result});
    })
    .catch((err)=> {
        console.log(err);
    })
});



var content= ['surya','malli','anna','athu'];
app.get('/',(req,res)=>{

var blog='surya u r learning node.js';
    res.render('index' ,{title:'home',blog});
app.get('/about',(req,res)=> {
var content='lorem ipsam is free text that can proviede by html' ;
    res.render('about',{blogs:content});
});

});






/////project work here
var http= require('http');
var fs= require('fs');

var server= http.createServer((req,res)=> {
    res.setHeader('content-Type','text/html');
if(req.url ==='/'){
    fs.readFile('./home.html',(err,data)=> {
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    });
}
else if(req.url=== '/about'){
fs.readFile('./about.html',(err,data)=> {
if(err){
    console.log(err);
}
else{
    res.write(data);
    res.end();
    res.statusCode= 200;
}
});
};


    // res.setHeader('content-Type','text/html');
    // fs.readFile('./about.html',(err,data)=> {
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.write(data);
    //         res.statusCode= 200;
    //         res.end();
    //     }
    // });
});
server.listen(3000);
