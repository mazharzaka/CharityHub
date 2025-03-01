const UserControllers = require('../controllers/user.conyroller');
const express = require('express');
const router = express.Router();
router.post('/create', UserControllers.createUser);
router.get('/all', UserControllers.getAllUsers);
module.exports = router;