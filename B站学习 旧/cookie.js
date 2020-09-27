const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();

server.use(cookieParser('ddd'));

server.use('/',function(req,res){
    req.secret = 'ddd';
    // res.cookie('user','blue',{path:'/',maxAge:30*24*3600*1000});
    res.cookie('user','blue',{signed:true});
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send('ok');
})

server.listen(8080);