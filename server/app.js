const express = require('express');

var bdy =require('body-parser')
const app = express();
app.use(bdy.urlencoded({extended:true}))
app.use(bdy.json());
var model=require('../server/model/prd')
const multer=require('multer')
const Dir='../server/uploads'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();

});
var mon=require('mongoose')
var url="mongodb+srv://ashly:ashly@cluster0-nybb2.mongodb.net/prd?retryWrites=true&w=majority"

mon.connect(url,function(err){
    if(err)throw err
    else{
        console.log("database connected")
    }
    
})
app.get("/data",function(req,res){
    res.send({msg:"data"})
})
app.get("/view",function(req,res){
model.find({},function(err,result){
    if(err)throw err
    else{
        console.log(result)
        res.send(result)
    }
})
})
app.post("/add",function(req,res){
console.log(req.body.itemname)
console.log(req.body.itemprice)
console.log(req.body.itemqty)
var m=new model()

m.itemname=req.body.itemname;
m.itemprice=req.body.itemprice
m.itemqty=req.body.itemqty
m.save(function(err){
    if(err)throw err
    else{
        res.send("data added")
        console.log("data added")
    }
})

})
app.post("/edit",function(req,res){
    console.log(req.body.i.itemname)
})
app.listen(8000,function(req,res){
    console.log("server started")
});
