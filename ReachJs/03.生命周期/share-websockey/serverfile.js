/**
 * Created by dllo on 17/8/14.
 */
var http = require('http')
var io = require('socket.io')
var yourserver = http.createServer(function (request, response) {
    response.writeHead(250, {'Content-Type': 'text/html'});
    response.end('Your WebSocket server is running');
}).listen(22222);
var yoursocket = io.listen(yourserver).set('log', 1);
//连接事件
// connection 事件，当有一个新的连接时，触发
yoursocket.on('connection', function (client) {
    // 同服务器端message事件
    client.on('message', function (data) {
        console.log('Client Message: ', data);
        //断开连接
        client.on('disconnect', function () {
            //客户端已断开
            console.log('Your Client disconnected');
        });
    });
});
