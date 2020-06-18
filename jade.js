const jade = require('jade');

let str = jade.renderFile('./build/demo.jade',{pretty:true});

console.log(str);