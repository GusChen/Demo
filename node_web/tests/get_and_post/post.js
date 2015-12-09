var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {

  var postlist = '',
  var post = '';

  //声明状态 头部
  res.writeHead(200, {
		"content-type": "text/html"
	});

  //设置编码类型
  req.setEncoding('utf8');

  //获取post
  req.on('data', function (chunk) {
    post += chunk; //取到data中的post
  });

  req.on('end', function (){
    console.log(post);
    post = querystring.parse(post); //整理post

    //这里会报一个错误 res.write的第一个参数必须是 strng 或者 buffer
    //报错信息：TypeError : first argument must be a string or Buffer
    //展示不知道怎么处理
    //res.write(post.title );
    //res.write(post.text );

    //采取这中方式 可以正常的输出代码
    for (var i in post) {
      postlist += i + '=>' + post[i] + '<br/>';
    }

    console.log(typeof postlist);
    res.write(postlist);
    res.end();
  });
}).listen(8888);
console.log('star')
