var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {

  var get = url.parse(req.url);
  var getlist = querystring.parse(get.query)
  res.writeHead(200, {'Content-Type': 'text/html'});

  for (var i in getlist) {
		res.write(i + "=>" + getlist[i] + "<br>");
	}

  res.end();
}).listen(8888);
console.log('star');
