var express= require('express');
//var morgan=require('morgan');
var mongoose= require('mongoose');
//const { result } = require('lodash');
var Blog= require('./models/blogs');
var app= express();
var dburl= 'mongodb+srv://suryaMS:surya123@nodejsapp.az5se.mongodb.net/node-app?retryWrites=true&w=majority' ;
mongoose.connect(dburl ,{ useNewUrlParser: true , useUnifiedTopology: true })
.then((result)=> app.listen(3030))
.catch((err)=> console.log(err));
app.set('view engine','ejs');

app.get('/',(req,res)=> {
    var blogs=[
        {title:'i love eggs',snippet:'eggs are soo delicious'},
        {title:'chicken is my favourite',snippet:'i love cooking chicken dishes'},
        {title:'iam bored',snippet:'maybe i need a person to fuck,hahah'}
    ]
    res.render('index',{title:'home',blogs});
});
app.get('/about',(req,res)=> {
    var aboutdata='hey surya its something gone wrong here , plese fix the problems';
    res.render('about',{title:'about us',aboutdata:aboutdata});
});

app.get('/blogs/creat',(req,res)=> {
    res.render('creat',{title:'creat a new blog'});
});

app.get('/add-blogs',(req,res)=> {
    var blog= new Blog({
        title:'surya',
        snippet:'surya narayana',
        body: 'surya narayana reddy'
    });
    blog.save()
     .then((result)=> {
         res.send(result)
     })
     .catch((err)=> {
         console.log(err);
     });
})
app.get('/all-blogs',(req,res)=> {
    Blog.find()
    .then((result)=> {
        res.send(result)
    })
    .catch((err)=> {
        console.log(err);
    });
})
app.get('/single-block',(req,res)=> {
    Blog.findById("60c5f397da71c41828ae66df")
     .then((result)=> {
         res.send(result)
     })
     .catch((err)=> {
         console.log(err);
     });
})

app.use((req,res)=> {
    res.status(404).render('404',{title:'404'})
});