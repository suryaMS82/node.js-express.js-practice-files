var express= require('express');
var morgan= require('morgan');
var mongoose= require('mongoose');
const lodash= require('lodash');

var app=express();
//connect to mangodb batabase
var mgdb='mongodb+srv://suryaMS:surya123@nodejsapp.az5se.mongodb.net/node-app?retryWrites=true&w=majority';
mongoose.connect(mgdb,{ useNewUrlParser: true,  useUnifiedTopology: true  })
     .then((result)=> console.log(result))
      .catch((err)=> console.log(err));
app.set('view engine','ejs')
app.listen(3030);
app.use(express.static('public'));
app.use(morgan('dev'));
var content= ['surya','malli','anna','athu'];
app.get('/',(req,res)=>{

var blog='surya u r learning node.js';
    res.render('index' ,{title:'home',blog});
app.get('/about',(req,res)=> {
var content='lorem ipsam is free text that can proviede by html' ;
    res.render('about',{blogs:content});
});

});