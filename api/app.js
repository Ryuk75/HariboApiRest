require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');

var enrutadorProduccion = require('./routes/produccion');
var enrutadorOrdProduccion = require('./routes/ordNuevaProduccion');

var app = express();
const { registrarControladores } = require('./routes');
const { conectarMongoDb, subscribirCierres } = require('./db/db');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

conectarMongoDb();

registrarControladores(app);

subscribirCierres();

app.use((req, res, next) => {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
    next();
});

app.use('/produccion', enrutadorProduccion);
app.use('ordProduccion',enrutadorOrdProduccion);

module.exports = app;
