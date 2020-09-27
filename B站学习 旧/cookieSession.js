const express = require('express');
const cookiePaser = require('cookie-parser');
const cookieSession = require('cookie-session');

let server =express();

server.use(cookiePaser());
server.use(cookieSession({
    name:'sess',
    keys:['aaa','bbb','cccc']
}))
server.use('/',function(req,res){
    if(req.session['user']==null){
        req.session['user'] = 1;
    } else{
        req.session['user']++;
    }
    console.log(req.session['user']);
    res.send('ok');
})
server.listen(8080);