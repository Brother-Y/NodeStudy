const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer')
const consolidate  = require('consolidate');

let server = express();
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./build'}).any());
server.use(cookieParser());
server.use(cookieSession({
    name:'sess',
    keys:['aaa','bbb','ccc']
}))

server.set('view engine','html'); //输出什么东西
server.set('views','./views') // views固定写法 文件在哪
server.engine('html',consolidate.ejs); // 用哪种模板

// server.use('/',function(req,res,next){
//     console.log(req.query,req.body,req.cookies);
// })
server.get('/index.html',function(req,res){
    res.render('2.ejs',{name:'Bob'})
})

server.use(static('/www'));
server.listen(8080);