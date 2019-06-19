const connection = require("../mysql.conf").connection;
const express = require('express');
const app = express();

let newsHome = [{}]
/*
    { 
        title: "Alerta: se acaba el curso", 
        category: "Technlogy", 
        date: "June 15, 2019", 
        description_short: "Se acabó esto señores y señoritas, el próximo sábado se entregan certificados." 
    },
    { 
        title: "Almuerzo de despedida", 
        category: "Social", 
        date: "June 15, 2019", 
        description_short: "Tenemos que elegir el sitio para ir a almorzar la otra semana. Nota: Redactor disléxico." 
    },
    { 
        title: "Almuerzo de despedida", 
        category: "Social", 
        date: "June 15, 2019", 
        description_short: "Tenemos que elegir el sitio para ir a almorzar la otra semana. Nota: Redactor disléxico." 
    }
]
*/
app.get('/', function (req, res) {
    connection.query('SELECT * FROM news n inner join newstype nt on n.id_newstype=nt.id', (error, results, fields) => {
        if (error) { throw error };
        newsHome= results;
        //console.log(newsHome);
    });
    res.render('index/index', {
        title: "EL Profeta | Home",
        newsHome
    });
    
});

module.exports = app;