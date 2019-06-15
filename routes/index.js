const express = require('express');
const app = express();

app.use(require('./home'));
app.use(require('./social'));
app.use(require('./technology'));

module.exports = app;