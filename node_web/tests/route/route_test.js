var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');
var mine = require('../core/mine').types; //类型


// console.log(mine);

http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname; //去得url
  var ext = path.extname(pathname); //取得扩展名
  ext = ext ? ext.slice(1) : 'unknown'; //取得类型
  var re = /^\/assets/; //判断前缀
  if (re.exec(pathname)){
    pathname = pathname.slice(1); //去掉 /
    //读取文件
    fs.readFile(pathname,function (err, file){
      if (err) {
        response.writeHead(404,{"Content-Type": "text/plain"});
        err = new Buffer(JSON.stringify(err)); //打印错误信息
        response.end(err);
      } else {
        //输出文件
        response.writeHead(200,{"Content-Type": mine[ext]});
        response.write(file);
        response.end();
      }
    });
  } else {
    //404
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.end("404");
  }
  //console.log(pathname);
}).listen(8888);

console.log("star");
