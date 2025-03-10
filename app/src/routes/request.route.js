const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request.controller');
const auth = require('../middlewares/auth.middle');
const role = require('../middlewares/role.middle');

router.post('/', auth.verifyToken, role.checkRole(["beneficiary"]), requestController.createRequest);
router.get('/', auth.verifyToken, role.checkRole(["volunteer","admin"],true), requestController.getAllRequests);
router.get('/:id', auth.verifyToken, role.checkRole(["beneficiary"]), requestController.getRequestById);
router.put('/:id/status', auth.verifyToken, role.checkRole(["admin","volunteer"],true), requestController.updateStatus);
router.delete('/:id', auth.verifyToken, role.checkRole(["admin"]), requestController.deleteRequest);
module.exports = router;