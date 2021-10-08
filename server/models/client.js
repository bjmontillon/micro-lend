const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentAmount: Number,
    paymentDate: Date
});

const clientsSchema = new Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    duration: { type: Number, required: true },
    payment: [paymentSchema]
}, { timeStamp: true});



const Client = mongoose.model('Client', clientsSchema);



module.exports = Client;

