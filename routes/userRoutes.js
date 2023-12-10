const express = require('express');
const router = express.Router();
const {userRegistration, userLogin} = require('../controllers/signinLoginCtrls');

router.post('/signin', userRegistration);

router.post('/login', userLogin);

module.exports = router;