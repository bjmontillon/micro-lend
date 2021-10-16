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
    const rate  = req.body.rate ;
    const payment = req.body.payment;

    const client = new ClientModel({ name: name, amount: amount, date: date, duration: duration, rate : rate , payment: payment })

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
//GET PAYMENT SUM
app.get('/payment-sum', (req, res) => {

    const pipeLine = [
        {
          '$unwind': {
            'path': '$payment'
          }
        }, {
          '$group': {
            '_id': '$name', 
            'count': {
              '$sum': '$payment.paymentAmount'
            }
          }
        }, {
          '$sort': {
            '_id': -1
          }
        }
      ]

     ClientModel.aggregate(pipeLine).then(result => res.send(result)).catch(err => console.log(err))
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
    const newPaymentDate = req.body.newPaymentDate
    const newPayment = req.body.newPayment


        try {
            await ClientModel.findOneAndUpdate({
                _id: id,
            },
            {
                $push: {
                    payment: {
                        paymentAmount: newPayment,
                        paymentDate: newPaymentDate
                        
                    }
                   
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


