const express=require('express')
const app= express();


app.get("/",(req,res)=>{
  res.send("Welcome to aws test Backend")
})

app.listen(8000,()=>{
    console.log("App running at 8000")
})