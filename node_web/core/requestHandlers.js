var fs = require('fs');
//index 方法
function index(response) {
  console.log("index");
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end("Hello index");
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
