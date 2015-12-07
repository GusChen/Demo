var star = require('./core/server').star;
var route = require('./core/router').route;
var requestHandlers = require('./core/requestHandlers');

var handle = {};

//路由方法
handle['/'] = requestHandlers.index;
handle['/index'] = requestHandlers.index;
handle['/test'] = requestHandlers.test;
//启动服务
star(route, handle);
