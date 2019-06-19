//const connection = require("../mysql.conf").connection;

const express = require('express');
const app = express();

app.get('/technology', function (req, res) {
    res.render('technology/index', {
        title: "EL Profeta | Technology"
    });
});

module.exports = app;