const express = require('express');

var bdy =require('body-parser')
const app = express();
app.use(bdy.urlencoded({extended:true}))
app.use(bdy.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();

});
app.get("/data",function(req,res){
    res.send({msg:"data"})
})

app.listen(8000,function(req,res){
    console.log("server started")
});
