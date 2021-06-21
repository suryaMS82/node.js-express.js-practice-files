var {people,ages}=require('./person');
 console.log(people,ages);

var fs= require('fs') ;
var reading= fs.createReadStream('./blog1.txt');
var writing= fs.createWriteStream('./blog.txt');
reading.pipe(writing) ;


// reading.on('data',(chunk)=>{
// console.log('let new data is comming');
// console.log(chunk);
//  });

// fs.watchFile('./text.txt','heyy surya',()=>{
//     console.log('its writing');
// });
// fs.readFile('./text.txt',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });
// fs.writeFile('./sub.txt','hey surya , good evening',(err,data)=>{
//     console.log('you writing');

// });
// if(fs.exists('./sub.txt')) {
//     fs.rmdir('./sub.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('folder is deleted');
// });
// }
    // fs.unlink('./sub.txt',(err)=> {
    //     if(err){
    //         console.log(err);
    //     };
    // });
    // console.log('file is deleted');}
//else{
//     fs.mkdir(',/sub.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created');
//     })
// }

var fs=require('fs');
// reading file
fs.readFile('./sub.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

fs.writeFile('./next.txt','surya its me surya',(err,data)=> {
    if(err){
        console.log(err);
    }
    console.log('you created a file');
});











