const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Ak07028089',
    database: 'lendingSystem',
});

//POST REQUEST
app.post('/create', (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    const duration = req.body.duration;

    db.query('INSERT INTO clients (name, amount, date, duration) VALUES (?,?,?,?)', 
    [name, amount, date, duration], 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values Inserted");
        }
    }
    );
});

//GET REQUEST
app.get('/clients', (req, res) => {
    db.query('SELECT * FROM clients', 
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    }
    );
});


app.listen(3001, () => {
    console.log("its working! Server running (port: 3001)");
})