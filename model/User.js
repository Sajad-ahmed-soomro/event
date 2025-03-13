const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },  
    password: { type: String, required: true }, 
    
});

module.exports = mongoose.models.Event || mongoose.model('User', eventSchema);