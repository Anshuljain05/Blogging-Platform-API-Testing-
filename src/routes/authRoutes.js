const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { validate } = require('../middleware/validationMiddleware');
const router = express.Router();

router.post('/register', validate, registerUser);
router.post('/login', validate, loginUser);

module.exports = router;
