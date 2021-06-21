var http=require('http');
var fs=require('fs');
var _=require('lodash');
var server= http.createServer(function(req,res){
    var num=_.range(10) ;
    console.log(num);
    res.setHeader('content-Type','text/html');
    fs.readFile('./ts.html',(err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
            res.statusCode=200;
        }
    })
});
server.listen(3030);





// var {people,ages}=require('./person.js');
//  var _= require('lodash');
//  var names= people.forEach(name=> {
//      console.log('my name is '+name);
//  });
//  var fun = ages.forEach(age => {
//      console.log('the age of the person '+ age);

// var fs=require('fs');
// // reading file
// fs.readFile('./sub.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile('./next.txt','surya its me surya',(err,data)=> {
//     if(err){
//         console.log(err);
//     }
//     console.log('you created a file');
// });

var http= require('http');
var fs= require('fs');
var server= http.createServer((req,res)=> {
    res.write('./sub.txt');
    res.end();
    console.log('servering....');
});
server.listen(3030);




