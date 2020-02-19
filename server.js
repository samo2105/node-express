const express = require('express');
const app = express();
const hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static( __dirname + '/public'));
hbs.registerPartials( __dirname + '/views/partials' );

require('./hbs/helpers/helpers');

const port = process.env.PORT || 8080

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Samo',
    })
});

app.get('/projects', function (req, res) {
    res.render('projects')
});

app.get('/download_cv',(req, res) => {
    const file = `${__dirname}/public/files/cv.pdf`
    res.download(file)
})

app.listen(port, () => {
    console.log('Escuchando puerto 8080')
});