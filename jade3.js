const jade = require('jade');

let str = jade.renderFile('./build/jade变量2.jade',{pretty:true,arr:['aaa','bbb','ccc'],
    content:"<h2>hello</h2><p>world</p>"
});

console.log(str);