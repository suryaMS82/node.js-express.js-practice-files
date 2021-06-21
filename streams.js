var fs= require('fs');
var reading= fs.createReadStream('./blog.txt');
var writing= fs.createWriteStream('./blog1.txt');
reading.on('data',(chunk)=>{
    console.log('...new data is comming');
    console.log(chunk.toString());
    writing.write(chunk)
});