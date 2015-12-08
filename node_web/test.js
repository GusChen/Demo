var path = require('path');
readPath = path.join('view','index.html');
var ext = path.extname(readPath);

console.log("readPath:"+readPath);
console.log("ext:"+ext);

ext = ext.slice(1);
console.log("ext:"+ext);
