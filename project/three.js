// reading a file of .txtx type


var fs= require('fs');
fs.readFile('./sub.txt',(err,data)=> {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
