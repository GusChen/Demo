var http = require("http");
var fs = require('fs');

http.createServer(function (requset,response) {

  //读取文件
  fs.readFile('index.html',function(err, file){
    if (err) {
      response.writeHead(404,{'Content-Type': 'text/html'});
      response.write('404');
      response.end();
    } else {
      response.writeHead(200,{'Content-Type': 'text/html'});
      var rfile = file.toString().replace('{{$m}}',"这是一个测试"); // buffer toString  然后替换
      console.log(rfile);

      response.write(rfile);//打印文件
      response.end();
    }
  });

}).listen(8888);

console.log('star');
