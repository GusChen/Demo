var fs = require('fs');
//index 方法
function index(response) {
  //读取页面 只能读取指定文件
  fs.readFile('./view/index.html', 'binary', function (err,file){
    if (err) {
      //输出报错
      response.writeHead(500, {'Content-Type': 'text/plain'});
      var err = JSON.stringify(err); //错误信息转换成 字符串
      response.end(err);
    } else {
      //打印页面
      response.writeHead(200, {'Content-Type': "text/html"});
      response.write(file, "binary");
      response.end();
    }
  });
  console.log("index");
}
//test 方法
function test(response) {
  console.log("test");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello test");
}

//post
function post(response) {
  console.log(post);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello post");
}

//get
function get(response) {
  console.log(get);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello get");
}
exports.index = index;
exports.test = test;
