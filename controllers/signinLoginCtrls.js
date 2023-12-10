const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/userModel');

const hashPassword = async (password) => {
    try {
        const saltRound  = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error){
        console.log(error);
        throw error;
    }
};

const comparePassword = async (password, hashPassword) => {
    try {
        const isPasswordValid = await bcrypt.compare(password, hashPassword);
        return isPasswordValid;
    } catch(error) {
        console.log(error);
        throw error;
    }
    
}

const userRegistration = async (req, res) => {

    try{
        const {userName, phoneNumber, password} = req.body;
        const hashedpassword = await hashPassword(password);
        const user = new User ({
            userName,
            phoneNumber,
            password : hashedpassword
        })

    await user.save();
    res.send("User Registered");
    }
    catch(error) {
        console.log(error);
        res.send("Registration failed");
    }
};

const userLogin = async (req, res) => {
    try {
        const {userName, password} = req.body;
        const user = await User.findOne({userName});
        if (user){
            const authenticate = await comparePassword(password, user.password);
            if (authenticate) {
                res.json(user);
            } else {
                res.send("Invalid Password");
            }
        } else {
            res.send("User Not Found");
        }
    } catch (error){
        console.log(error);
        res.send("User Not Found");
        throw error;
    }
}

module.exports = {userRegistration, userLogin}