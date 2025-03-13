const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },  
    description: { type: String, required: true }, 
    date: { type: Date, required: true }, 
    createdAt: { type: Date, default: Date.now },
    
});

module.exports = mongoose.models.Event || mongoose.model('Event', eventSchema);