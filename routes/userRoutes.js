const express = require('express');
const router = express.Router();
const {userRegistration, userLogin} = require('../controllers/signinLoginCtrls');

router.post('/signin', userRegistration);

router.get('/login', userLogin);

module.exports = router;