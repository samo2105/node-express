const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});
    let resp = {
        name: 'Samuel',
        lastName: 'Cea',
        age: 19,
        nickName: 'Samo',
        url: req.url
    };

    res.write(JSON.stringify(resp));

    res.end();

}).listen(8080);

console.log('escuchando el puerto 8080');