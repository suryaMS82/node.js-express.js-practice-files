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

var app= express();
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

app.use((req,res)=> {
    res.status(404).render('404',{title:'404'})
});

app.listen(5000);