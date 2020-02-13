const express = require('express');
const app = express();
// PUBLIC
app.use(express.static( __dirname + '/public'));
//Express HBS
app.set('view engine', 'hbs');
// DATA
app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'Samo',
        anio: new Date().getFullYear()
    })
});

app.listen(8080, () => {
    console.log('Escuchando puerto 8080')
});