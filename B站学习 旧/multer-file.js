const express =require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

let server = express();
let oMulter = multer({dest:'./build/'});
server.use(oMulter.any());
server.use('/',function(req,res){
    let newName = req.files[0].path+path.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path,newName,function(err){
        if(err){
            res.send('失败')
        }else{
            res.send('成功')
        }
    })
})
server.listen(8080);