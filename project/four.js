//readstream file methode

var fs=require('fs');
var stream= fs.createReadStream('./blog1.txt');
stream.on('data',(chunk)=> {
    console.log('data is comming');
    console.log(chunk.toString());
});


////writestream 
//write file with data of readstream file 
var fs= require('fs');

var readstream= fs.createReadStream('./blog1.txt',{encoding:'utf-8'});
var writestream= fs.createWriteStream('./blog3.txt');

readstream.on('data',(chunk)=> {
    console.log(chunk);
    console.log('data is comming');
writestream.write(chunk);


});

//piping of .txt data 
var fs= require('fs');

var readstream= fs.createReadStream('./blog1.txt',{uncoding:'utf8'});
var writestream= fs.createWriteStream('./blog4.txt');

readstream.pipe(writestream);
console.log('new data writen');
