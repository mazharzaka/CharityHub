const UserControllers = require('../controllers/user.controller');
const upload = require('../middlewares/multer.middle');
const auth=require('../middlewares/auth.middle');
const role=require('../middlewares/role.middle');
const express = require('express');
const setImageType = require('../middlewares/TypeImage.middle');
const router = express.Router();
router.post('/create',setImageType("user"),upload.single("profileImg"), UserControllers.createUser);
router.patch('/block/:id',auth.verifyToken,role.checkRole(['admin']), UserControllers.blockUser);
router.get('/:id',auth.verifyToken,role.checkRole(['admin','donor']), UserControllers.getUserById);
router.get('/all',auth.verifyToken,role.checkRole(['admin']), UserControllers.getAllUsers);
router.post('/login', UserControllers.login);
module.exports = router;