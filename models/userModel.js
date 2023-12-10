const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
userName : {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9]+$/, 'Invalid username']
},
phoneNumber: {
    type: String, 
    required: true, 
    unique: true,
    match: [/^\d{10}$/, 'Invalid phone number']

},
password: { 
    type: String, 
    required: true 
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;