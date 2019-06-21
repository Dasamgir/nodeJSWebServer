const connection = require("../mysql.conf").connection;

const express = require('express');
const app = express();
let newsTech = [{}]

app.get('/technology', function (req, res) {
    res.render('technology/index', {
        title: "EL Profeta | Technology"
    });
});
app.get('/Technology/:id', (req, res) => {
    connection.query(`SELECT * FROM news n inner join newstype nt on n.id_newstype=nt.id WHERE n.id = ${req.params.id}`, (error, results, fields) => {
    if (error) { throw error };
    newsTech=results;
    //console.log(newsTech)
    });
    res.render('technology/index', {
        title: "EL Profeta | Technology",
        newsTech
    });
});

module.exports = app;