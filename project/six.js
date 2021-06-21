var fs= require('fs');
var http= require('http');

var server= http.createServer((req,res)=> {
res.setHeader('content-Type','text/html');
 var path='./';
 switch (req.url) {
     case '/':
         path+='ts.html';
         res.statusCode= 200;
         break;
    case '/home':
        path+='ts.html';
        res.statusCode= 301;
        res.setHeader('location','/');
        res.end();
        break;
    case '/about':
        path+= 'about.html';
        res.statusCode= 200;
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
            res.end();
            console.log('html page is loading...');
        }

    });
});
server.listen(3030);
