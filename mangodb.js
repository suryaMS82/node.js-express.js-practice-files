app.get('/blogs',(req,res)=> {
    var blog=new Blog({
        title: 'my name is surya',
        snippet: 'my name is apb',
        body: 'my name is yammmi'
    });
    blog.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=> {
        console.log(err);
    });
});

app.get('/all-blogs',(req,res)=> {
    Blog.find()
    .then((result)=> {
        res.send(result);
    })
    .catch((err)=> {
        console.log(err);
    });
});