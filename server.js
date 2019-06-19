const express = require('express');
const app = express();
const port = 8888;

app.use( express.static(`${__dirname}/views`) );
app.use( express.static(`${__dirname}/public`) );

app.set('view engine', 'hbs');

// Requerimos una instancia de hbs
const hbs = require('hbs');
// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');

app.use(require('./routes/index'));

app.listen(port, function () {
  console.log(`El super badass web server está escuchando por el puerto ${port}`);
});

//uso de proyecto conexion con mySql
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());