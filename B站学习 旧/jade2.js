const jade = require('jade');

let str = jade.renderFile('./build/jade变量.jade',{pretty:true,json:{width:'200px',height:'200px;'},arr:['aaa','bbb','ccc'],d:15,f:13});

console.log(str);