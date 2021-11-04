const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    paymentAmount: Number,
    paymentDate: Date
});

const clientsSchema = new Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type : Date, default: Date.now },
    duration: { type: Number, required: true },
    rate: { type: Number, required: true },
    cosigner: { type: String, required: true },
    payment: [paymentSchema]
}, { timestamp:{ createdAt: 'created_on', updatedAt: 'updated_on' } });



const Client = mongoose.model('Client', clientsSchema);



module.exports = Client;

