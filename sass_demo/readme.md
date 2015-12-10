 在安装gulp-sass组件的时候碰到了一个问题就是gulp-sass依赖于node-sass，安装node-sass的时候需要下载一个文件`win32-ia32-11_binding.node`（这个文件看情况先`npm install -g node-sass` 在报错中可以看你需要的`node`文件）,因为网络问题一直安装不成功，最后的解决方案如下

 - [https://github.com/sass/node-sass](https://github.com/sass/node-sass)在这里下载node-sass源码
 - 解压到node_modules文件夹下
 - 下载`win32-ia32-11binding.node`文件（文件在[https://github.com/sass](https://github.com/sass)下面的项目`node-sass-binaries`里面）
 - 然后我修改了node-sass/lib/extensions.js的代码
   ```js
    //return [site, 'v' + pkg.version, sass.binaryName].join('/'); 修改的地方
    return 'http://127.0.0.1:80/win32-ia32-11_binding.node';
    //为了方便我搭建了一个服务方了这个文件
   ```

 - 然后在在node-sass文件夹下面运行`npm install`
 - 然后就可以安装gulp-sass了，一波三折 (╯‵□′)╯︵┻━┻


 #### scss语法
 - demo1 变量声明
 - demo2 嵌套规则
 - demo3 引入规则
 - demo4 混合器
 - demo5 继承
