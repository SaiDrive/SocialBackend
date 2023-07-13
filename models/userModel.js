const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
userName : {
    type: String,
    required: true,
    unique: true,
    match: [/^[a-zA-Z0-9]+$/, 'Invalid username']
},
email: {
    type: String, 
    required: true, 
    unique: true,
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email address']
},
password: { 
    type: String, 
    required: true 
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;