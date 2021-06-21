// // //var fs= require('fs')
// // var express= require('express');
// // var app= express();
// // var miggle= require('./project/express pro/eight.js');

// // app.use(miggle);

// // app.get('/',(req,res)=> {
// //     res.send('home page');
// //     //res.json(ages);
// // });

// // app.listen(4004);



// var express= require('express');
// var app= express();
// var people =require('./person');


// app.listen(4040);
// app.use(express.static('./public/login.html'));

// app.post('/login',(req,res)=> {
//     console.log(req.body);
//     res.send('ditch! fuck you man')
// });

// // app.get('/',(req,res)=> {
// //     res.sendFile('./home.html',{root:__dirname});
// // });
// // app.get('/about',(req,res)=> {
// //     res.sendFile('./about.html',{root: __dirname});
// // });
// app.get("/surya",(req,res)=> {
//     res.json({sucuss:true,data:people});
// })

// // app.use((req,res)=> {
// //     res.send('oops! you are on wrong page');
// // });
// var express= require('express');
// var path= require('path');

// var app=express();
// app.use(express.static('./public'));
// app.use(express.urlencoded({extended: false}));
// app.get('/',(req,res)=> {
//     res.sendFile(path.resolve(__dirname ,'./public/login.html'));


// });
// app.get('*',(req,res)=> {
//     res.send('!OPPs, resources are not found');
// });
// app.listen(4004)


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
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=> {
    res.redirect('/blogs');
});
app.get('/about',(req,res)=> {
    var aboutdata='hey surya its something gone wrong here , plese fix the problems';
    res.render('about',{title:'about us',aboutdata:aboutdata});
});
app.get('/blogs/creat',(req,res)=> {
    res.render('creat',{title:'creat a new blog'});
});
app.get('/blogs',(req,res)=> {
    Blog.find()
     .then((result)=> {
         res.render('index', {title:'All blogs', blogs:result})
     })
     .catch((err)=> {
         console.log(err);
     });
})
app.post('/blogs',(req,res)=> {
    var blog= new Blog(req.body);
    blog.save()
     .then((result)=> {
         res.redirect('/blogs')
     })
     .catch((err)=> {
         console.log(err);
     });
})

app.get('/blogs/:id',(req,res)=> {
    var id= req.params.id ;
    Blog.findById(id)
     .then((result)=> {
         res.render('details',{blog: result,title:'blog details'})

     })
     .catch((err)=> {
         console.log(err);
     });
    
})
app.delete('/blogs/:id',(req,res)=> {
   var ids= req.params.id ;
   Blog.findByIdAndDelete(ids)
    .then((result)=> {
      res.json({redirect :'/blogs'})  
    }) 
    .catch((err)=> {
        console.log(err);
    });
})

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