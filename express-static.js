const express = require('express');
const expressStatic = require('express-static');
let server = express();
server.listen(8080);

let users = {
    'blue' : '123456',
    'zhangsan' : '456456',
    'lisi' : '6456'
}
server.get('/login',function(req,res){
    let user = req.query['user']
    let pass = req.query['pass']
    // console.log(user)
    // console.log(users[user]);
    if(users[user] == null){
        res.send({'ok':false,'msg':'此用户不存在'})
    }else{
        if(users[user]!=pass){
            res.send({'ok':false,'msg':'密码错误'})
        } else{
            res.send({'ok':true,'msg':'登录成功'})
        }
    }
    // if(users[user])
})

server.use(expressStatic("./www"));