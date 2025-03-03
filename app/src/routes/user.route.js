const UserControllers = require('../controllers/user.conyroller');
const upload = require('../middlewares/multer.middle');
const express = require('express');
const router = express.Router();
router.post('/create',upload.single("profileImg"),UserControllers.createUser);
router.get('/all', UserControllers.getAllUsers);
router.post('/login', UserControllers.login);
module.exports = router;