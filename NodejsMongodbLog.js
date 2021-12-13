const express =require("express")
const app = express()
const mongoose = require('mongoose');
const ejs = require("ejs")
mongoose.connect('mongodb://172.21.2.236:27017/190110910407');

const schema={
    name:String,
    age: Number,
    health:String,
    hobby:String
}

const mydata = mongoose.model('cats',schema);
// const kitty = new mydata({ name: 'testZildjian' });
// kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    // res.send(req.query)
    console.log(req.query)
    const kitty = new mydata({ name: req.query.first,health:req.query.second });
    kitty.save()
    ejs.renderFile("index.html",{returnVal:"sucess"},(err,str)=>{
        res.send(str)
    })
})
app.listen(10407)