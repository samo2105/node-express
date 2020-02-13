const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static( __dirname + '/public'));
hbs.registerPartials( __dirname + '/views/partials' );

require('./hbs/helpers/helpers');

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Samo',
    })
});

app.get('/about', function (req, res) {

    res.render('about')
});

app.get('/pricing', function (req, res) {

    res.render('pricing', {
        anio: new Date().getFullYear()
    })
});

app.listen(8080, () => {
    console.log('Escuchando puerto 8080')
});