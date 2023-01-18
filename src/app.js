const express=require('express')
const app= express();


app.get("/",(req,res)=>{
  res.statusCode(500);
})

app.listen(8000,()=>{
    console.log("App running at 8000")
})

module.exports=app;