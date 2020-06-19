const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const jade = require('jade');
const multer = require('multer')

let server = express();
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./build'}).any());
server.use(cookieParser());
server.use(cookieSession({
    name:'sess',
    keys:['aaa','bbb','ccc']
}))

server.use('/',function(req,res,next){
    console.log(req.query,req.body,req.cookies);
})

server.use(static('/www'));
server.listen(8080);