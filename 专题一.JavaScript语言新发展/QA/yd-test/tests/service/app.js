const express = require("express");
var app = express();

app.get("/test",(req,res)=>{
    res.send({
        data:"Hello Yideng"
    })
});
const server = app.listen(3000,()=>{
    console.log("server start🍊");
})
module.exports = app;