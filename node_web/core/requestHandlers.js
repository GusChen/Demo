//index 方法
function index(response) {
  console.log("index");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello index"); //404
}
//test 方法
function test(response) {
  console.log("test");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello test"); //404
}

exports.index = index;
exports.test = test;
