var http = require("http");
http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.write("<h1>Node.js已经修改了服务了</h1>");
    res.end("<p>视频出处，HUX</p>")
}).listen(5858);