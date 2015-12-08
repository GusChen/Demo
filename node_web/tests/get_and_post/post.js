var http = require('http');
var querystring = require('querystring');

var post = '';

var server = http.createServer(function (req, res) {

  req.on('data', function (chunk) {
    post = chunk; //取到data中的post
  });

  req.on('end', function (){
    //console.log(post);
    post = querystring.parse(post); //整理post

    //这里会报一个错误 res.write的第一个参数必须是 strng 或者 buffer
    //报错信息：TypeError : first argument must be a string or Buffer
    //展示不知道怎么处理
    res.write(post.title );
    res.write(post.text );
    //res.write(post);
    res.end();
  });
}).listen(8888);
