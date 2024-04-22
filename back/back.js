const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const port = 3000;
app.listen(port, ()=>{
    console.log(`server is listening at http://localhost:${port}`)
});


// Appeler la BDD

app.get('/animals', (req, res) => {
    db.query('SELECT ID, TYPE, NAME, DESCRIPTION from animals', (err, results) => {
       if (err) throw err;
       res.send(results);
    });
   });
   