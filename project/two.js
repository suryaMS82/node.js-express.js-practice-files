//settimeout will disply content after time over
setTimeout(() => {
    console.log('its me surya');
    clearTimeout(time);
    
}, 3000);

//setinterval will repeat the function after every time zone

var time= setInterval(() => {
    console.log('its again me here');
    
}, 2000);

/////
var names=['surya','yamini','reddy','akhil','anuradha'];

//var forfun= names.forEach((name)=> {
// var time= setInterval(() => {
//     var forfun= names.forEach((name)=> {
//     console.log(name);
    
// });
// },2000);
 setTimeout(() => {
    var forfun= names.forEach((name)=> {
       console.log(name);
            
         });

     
 }, 2000);