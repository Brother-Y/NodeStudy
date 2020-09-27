const jade = require('jade');

let str = jade.renderFile('./build/jade变量.jade',{pretty:true,name:'yang'});

console.log(str);