const express = require('express')
const router = express.Router();
const {Login,Register,} = require('../controller/user.controller')


// router register post request

router.post('/register',Register);


// router login post request 
router.post('/login',Login);


module.exports= router 