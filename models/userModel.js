const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
firstName : {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9]+$/, 'Invalid firstName']
},
lastName : {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9]+$/, 'Invalid lastName']
},
email: {
    type: String, 
    required: true,
    unique: true,
    match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email address']
},
phoneNumber: {
    type: String,
    required: true,
    unique: true,
    match: [/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'] 
},
dob: {
    type: Date,
    required: true
},
password: { 
    type: String, 
    required: true,
    minLenght: [6, 'Password must be atleast 6 characters']
}
});

const User = mongoose.model('User', userSchema);

module.exports = User;