const connection = require("../mysql.conf").connection;
const express = require('express');
const app = express();

let newsT= [
    { 
        title: "Alerta!!: se acaba el curso", 
        category: "Technlogy", 
        date: "June 15, 2019", 
        content: "Se acabó esto señores y señoritas, el próximo sábado se entregan certificados." 
    }
];

app.get('/travel', function (req, res) {
    connection.query('SELECT * FROM news', (error, results, fields) => {
        if (error) { throw error };
        newsT= results;
        console.log(newsT);
    });
    res.render('travel/index', {
        title: "EL Profeta | Travel",
        newsT
    });
});
module.exports = app;
