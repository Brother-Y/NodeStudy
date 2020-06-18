const jade = require('jade');
const fs =require('fs');

let str = jade.renderFile('./build/demo.jade',{pretty:true});
fs.writeFile('./www/demo.html',str,function(err){
    if(err)console.log('写失败')
    else console.log('写成功');
})
console.log(str);