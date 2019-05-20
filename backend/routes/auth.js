const express = require('express');
const { body } = require('express-validator/check');

const User = require('../models/user');
const authController = require('../controllers/auth');

const router = express.Router();



router.post('/login', authController.login);

router.post('/token', authController.verifyUser);

router.post('/admin/signup', authController.adminSignup);

router.post('/student/signup', authController.studentSignup);

module.exports = router;
