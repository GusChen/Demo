var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end(util.inspect(url.parse(req.url, true)));
  var get = url.parse(req.url);
  //console.log(get);
  //res.write();
  res.end(url.parse(req.url));
}).listen(8888);
