const express = require('express'),
    consolidate = require('consolidate'),
    hbs = require('handlebars');

var app = express();

app.engine('hbs', consolidate.handlebars);
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static('public'));


app.get('/', function (req, res) {
    res.render('inicio', {
        titulo: "Inicio"
    });
});

app.get('/page2', function (req, res) {
    res.render('page2', {
        titulo: "Página #2"
    });
});

app.get('/page3', function (req, res) {
    res.render('page3', {
        titulo: "Página #3"
    });
});

app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000');
});