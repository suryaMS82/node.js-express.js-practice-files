//server creat at port number 3030 

var fs= require('fs');
var http= require('http');

var server= http.createServer((req,res)=> {
    res.write('hey baby');
    res.writeHead(200, {'content-Type':'text/plain'});
    console.log(req.url);
    console.log('srevr is created');
    res.end();
})
server.listen(3030);

///sending html content to server at port number 3030

var http= require('http');

var server= http.createServer((req,res)=> {
    res.setHeader('content-Type','text/html');
    res.write('<h1> javascript</h1>');
    res.write('<h2>node.js</h2>');
    res.write('<h3>express.js</h3>');
    res.end();
    console.log('server is working');

});
server.listen(3030);

// sending html pages to server 

var fs= require('fs');
var http= require('http');

var server= http.createServer((req,res)=> {
    res.setHeader('content-Type','text/html');
    fs.readFile('./ts.html',(err,data)=> {
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.statusCode= 200;
            res.end();
            console.log('html page is loading...');
        }

    });
});
server.listen(3030);


// sending html pages of home and about and 404 error pages using swith condition

var fs= require('fs');
var http= require('http');

var server= http.createServer((req,res)=> {
res.setHeader('content-Type','text/html');
 var path='./';
 switch (req.url) {
     case '/':
         path+='ts.html';
         break;
    case '/home':
        path+='ts.html';
        break;
    case '/about':
        path+= 'about.html';
        break;
 
     default:
         path+= 'home.html';
         break;
 }
    fs.readFile(path,(err,data)=> {
        if(err){
            console.log(err);
        }
        else{
            res.write(data);
            res.statusCode= 200;
            res.end();
            console.log('html page is loading...');
        }

    });
});
server.listen(3030);


