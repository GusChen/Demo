var http = require('http');
var url = require('url');
var conf = require('../conf/conf').conf;

function star(route, handle) {

  function server(request, response){
    var pathname = url.parse(request.url).pathname; //取得url
    var content = route(handle, pathname, response); //执行对应的方法
  }

  http.createServer(server).listen(conf.port);
  console.log('启动服务');
}

exports.star = star;
