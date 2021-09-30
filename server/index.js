const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const Client = require('./models/client');



//connect to database(mongodb)

const dbURI = 'mongodb+srv://bjmontillon:Ak07028089@cluster0.rmcvw.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000), (req, res) => {
        res.send('server running port 3000')
    })
    .catch((err) => console.log('err'))


app.get('/add-client', (req, res) => {
    const client = new Client({
        name: 'Patrick Dingal',
        amount: 5000,
        date: '09/30/2021',
        duration: 45
    });

    client.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
})



















































// const db = mysql.createConnection({
//     host: 'localhost',
//     port: '3306',
//     user: 'root',
//     password: 'Ak07028089',
//     database: 'lendingSystem'
// });

// //POST REQUEST
// app.post('/create', (req, res) => {
//     console.log(req.body);
//     const name = req.body.name;
//     const amount = req.body.amount;
//     const date = req.body.date;
//     const duration = req.body.duration;

//     db.query(
//         'INSERT INTO clients (name, amount, date, duration) VALUES (?,?,?,?)',
//         [name, amount, date, duration],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send('Values Inserted');
//             }
//         }
//     );
// });

// //GET REQUEST
// app.get('/clients', (req, res) => {
//     db.query('SELECT * FROM clients', (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     });
// });

// //UPDATE REQUEST
// app.put('/update', (req, res) => {
//     const id = req.body.id;
//     const name = req.body.name;
//     db.query(
//         'UPDATE clients SET name = ? WHERE id = ?',
//         [name, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

// app.put('/update', (req, res) => {
//     const id = req.body.id;
//     const amount = req.body.amount;
//     db.query(
//         'UPDATE clients SET amount = ? WHERE id = ?',
//         [amount, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         }
//     );
// });

// app.put('/update', (req, res) => {
//     const id = req.body.id;
//     const amount = req.body.amount;
//     db.query("UPDATE clients SET amount = ? WHERE id = ?", [amount, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         })
// })

// app.put('/update', (req, res) => {
//     const id = req.body.id;
//     const amount = req.body.amount;
//     db.query("UPDATE clients SET amount = ? WHERE id = ?", [amount, id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.send(result);
//             }
//         })
// })

// app.listen(3001, () => {
//     console.log('its working! Server running (port: 3001)');
// });