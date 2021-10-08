const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();



app.use(express.json());
app.use(cors());

//connect to database(mongodb)

const mongoUser = process.env.DB_USERNAME;
const mongoPass = process.env.DB_PASSWORD;

const dbURI = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.rmcvw.mongodb.net/Cluster0?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => app.listen(3001, () => {
        console.log("its working! Server running on port 3001")
    }))
    .catch((err) => console.log(err))
    
    //MODELS
    const ClientModel = require('./models/Client'); 
const Client = require('./models/Client');


//POST OR ADD NEW CLIENT MODEL
app.post('/add-client', async (req, res) => {

    const name = req.body.name;
    const amount = req.body.amount;
    const date = req.body.date;
    const duration = req.body.duration;
    const payment = req.body.payment;

    const client = new ClientModel({ name: name, amount: amount, date: date, duration: duration, payment: payment })

    try {
        await client.save();
        res.send('inserted data')
    } catch (err){
        console.log(err)
    }
    
});

//GET CLIENT MODEL
app.get('/read', async (req, res) => {
 ClientModel.find({  }, (err, result) => {
     if(err) {
         res.send(err)
     }

     res.send(result);

 })
})


//UPDATE MODEL
app.put('/update', async (req, res) => {
    const newClientName = req.body.newName;
    const id = req.body.id;
         
         try {
            await ClientModel.findById(id, (err, updatedName) => {
                updatedName.name = newClientName
                updatedName.save();
                res.send("update")
            })
        } catch (err) {
            console.log(err);
        }
     });

//ADD_PAYMENT
app.put('/add-payment', async (req, res) => {
    const id = req.body.id;
    const newPayment = req.body.newPayment
    const newPaymentDate = req.body.newPaymentDate


        try {
            await ClientModel.findOneAndUpdate({
                id: id,
            },
            {
                $push: {
                    newPayment: newPayment,
                    paymentDate: newPaymentDate
                },
            });
            res.send('Payment added.')
            console.log('Payment' + ' ' + newPayment + ' ' + 'added to client with the ID number of' + ' ' + id)
        }catch (err) {
        console.log(err);
    }
})

//DELETE MODEL
app.delete('/delete/:id', async (req, res ) => {

    const id = req.params.id

    await ClientModel.findByIdAndRemove(id).exec();
    res.send(id);
});


















































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