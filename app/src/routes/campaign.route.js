const Compaign = require('../models/Campaign.model');
const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaign.controller');
const upload = require('../middlewares/multer.middle');
const auth=require('../middlewares/auth.middle');
const role=require('../middlewares/role.middle');
router.post('/create',auth.verifyToken,role.checkRole(['admin'],true,Compaign),upload.single('image') ,campaignController.createCampaign);
router.get('/all', auth.verifyToken,role.checkRole(["donor", "beneficiary", "volunteer", "admin"],true,Compaign),campaignController.getAllCampaigns);
router.get('/:id',auth.verifyToken,role.checkRole(["donor", "beneficiary", "volunteer", "admin"],true,Compaign),campaignController.getCampaignById);
router.put('/:id',auth.verifyToken,role.checkRole(['admin'],true,Compaign), campaignController.updateCampaign);
router.delete('/:id',auth.verifyToken,role.checkRole(['admin'],true,Compaign), campaignController.deleteCampaign);
router.get('/featured', auth.verifyToken,role.checkRole(['admin'],true,Compaign),campaignController.getFeaturedCampaigns);
router.put('/mark-featured/:id',auth.verifyToken,role.checkRole(['admin']),campaignController.markAsFeatured);
router.post('/statusCampaign/:id',auth.verifyToken,role.checkRole(['admin']),campaignController.statusCampaign);
router.post('/addVolunteer/:id',auth.verifyToken,role.checkRole(['admin','volunteer'],true,Compaign),campaignController.addVolunteers);
router.post('/removeVolunteer/:id',auth.verifyToken,role.checkRole(['admin','volunteer'],true,Compaign),campaignController.leaveVolunteers);
router.post('/:id',auth.verifyToken,role.checkRole(['admin','donor']),campaignController.addDonation);
router.post('/addBeneficiary/:id',auth.verifyToken,role.checkRole(['admin'],true,Compaign),campaignController.addBeneficiary);
router.post('/removeBeneficiary/:id',auth.verifyToken,role.checkRole(['admin'],true,Compaign),campaignController.removeBeneficiary);
router.get('/join/:id',auth.verifyToken,role.checkRole(["donor", "beneficiary", "volunteer", "admin"],true,Compaign),campaignController.JoinCampaign);
module.exports = router;