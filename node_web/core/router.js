//路由函数
function route(handle, pathname, response) {
  if (typeof handle[pathname] === 'function') {
     handle[pathname](response); //不同路由的方法
  } else {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.end('404 Not Found'); //404
  }
}

exports.route = route;
