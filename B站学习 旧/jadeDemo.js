const jade = require('jade');
const fs = require('fs');

let str = jade.renderFile('./build/jadeDemo.jade',{pretty:true});
fs.writeFile('./www/jadeDemo.html',str,function(err){
    if(err)
        console.log('失败');
    else
        console.log('成功');
})