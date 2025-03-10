const express=require('express');
const router=express.Router();
const auth=require('../middlewares/auth.middle');
// const donation=require('../models/Donation.model');\
const Compaign = require('../models/Campaign.model');

const donationController=require('../controllers/donation.controller');
const { checkRole } = require('../middlewares/role.middle');
router.post('/',auth.verifyToken,checkRole(["donor"]),donationController.createDonation);
router.get('/:campaignId?',auth.verifyToken,checkRole(["admin"],true,Compaign),donationController.getAllDonations);
router.get('/:id/:campaignId?',auth.verifyToken,checkRole(["donor"],true,Compaign),donationController.getDonationById);
router.put('/:id/:campaignId?',auth.verifyToken,checkRole(["admin"],true,Compaign),donationController.updateStatus);
module.exports=router;