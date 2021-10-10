const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentAmount: Number,
    paymentDate: Date
});

const clientsSchema = new Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, require: true },
    duration: { type: Number, required: true },
    payment: [paymentSchema]
}, { timeStamp: false});



const Client = mongoose.model('Client', clientsSchema);



module.exports = Client;

