 const express=require('express');
 const app=express();
 const port=8000;

app.use('/',require('./routes'));

app.listen(port,function(err){
if(err){
    console.log(`there is an error : ${err}`)
}

console.log(`server is running on port: ${port}`)
})
