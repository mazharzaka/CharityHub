const UserControllers = require('../controllers/user.conyroller');
const upload = require('../middlewares/multer.middle');
const auth=require('../middlewares/auth.middle');
const role=require('../middlewares/role.middle');
const express = require('express');
const router = express.Router();
router.post('/create',upload.single("profileImg"),UserControllers.createUser);
router.get('/all',auth.verifyToken,role.checkRole('admin'), UserControllers.getAllUsers);
router.post('/login', UserControllers.login);
module.exports = router;