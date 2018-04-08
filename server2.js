
let fs = require('fs');
let url = require("url");
let http = require('http');

http.createServer(function (request, response) {
    console.log(0);
    let {pathname} = url.parse(request.url, true);
    // request： 包含了所有的请求信息；url 属性值代表当前的
    // 获取当前的请求路径；
    // 浏览器可以判断出后端返回的具体文件类型；按照对应类型的进行加载；
    // 低版本的IE不能识别当前是什么类型的文件；需要咱们手动设置响应头；
    let str = null;
    if (pathname === '/') {
        str = fs.readFileSync(`./index.html`, 'utf-8');
        response.end(str);
    } else {
        try {

            str = fs.readFileSync(`.${pathname}`);
            let reg = /(\.[0-9a-zA-Z]+)$/i;
            let type = reg.exec(pathname)[0].substr(1).toUpperCase();

            let mineType = 'text/plain';
            switch (type){
                case "HTML":
                    mineType = 'text/html';
                    break;
                case 'CSS':
                    mineType = 'text/css';
                    break;
                case 'JS':
                    mineType = 'text/javascript';
                    break;
                case 'PNG':
                    mineType = 'image/png';
                    break;
                case 'GIF':
                    mineType = "image/gif";
                    break;
                case 'JPEG':
                    mineType = 'image/jpeg'
            }
            // 重新设置响应头； 告诉浏览器，当前返回的文件类型；
            //status : 代表响应成功；
            response.writeHead(200,{"content-type":mineType+";charset:utf-8"});
            // {"content-type":"text/javascript;charset:utf-8"}
            response.end(str);
        } catch (e) {
            response.end("not found");
        }
    }





}).listen(8081, function () {
    console.log(100);
});
// Error: listen EADDRINUSE :::8080  端口号被占用；