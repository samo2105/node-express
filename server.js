const express = require('express');
const app = express();

app.get('/', function (req, res) {
    let resp = {
        name: 'Samuel',
        lastName: 'Cea',
        age: 19,
        nickName: 'Samo',
        url: req.url
    };

    res.send(resp)
});

app.listen(8080);