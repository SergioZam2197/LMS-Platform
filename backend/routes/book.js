const express = require('express');

const studentController = require('../controllers/student');
const bookController = require('../controllers/book');
const isAuth = require('../middleware/is-auth');
const router = express.Router();



module.exports = router;


