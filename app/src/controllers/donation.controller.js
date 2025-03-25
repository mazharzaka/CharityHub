const DonationService = require('../services/donation.service');
const CampaignService = require('../services/campaign.service');
const TransactionService = require('../services/transaction.service');

exports.createDonation = async (req, res) => {
    try {
        const donation = await DonationService.createDonation(req.body);
       await CampaignService.addDonation(req.body.campaignId,donation._id);
       const campaign = await CampaignService.getCampaignById(req.body.campaignId);
      campaign.currentAmount += req.body.amount;
      await CampaignService.updateCampaign(req.body.campaignId,campaign);
    //   console.log(req.user);
      
      const transaction=await TransactionService.createTransaction({donationId:donation._id,transactionReference: `TXN-${Date.now()}`,amount:req.body.amount,userId:req.user.user_id});
      await DonationService.addTransaction(donation._id,transaction._id);
        res.status(201).send(donation);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.getAllDonations = async (req, res) => {
    try {
        const campaignId = req.params.campaignId;
        // console.log(campaignId);
        
        if(campaignId){
            const donations = await DonationService.getDonationsBycampaignId(campaignId);
            return res.status(200).send(donations);
           
        }
        else{
        const donations = await DonationService.getAllDonations();
        res.status(200).send(donations);}
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.getDonationById = async (req, res) => {
    try {
        const donation = await DonationService.getDonationById(req.params.id);
        res.status(200).send(donation);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.updateStatus = async (req, res) => {
    try {
        const campaignId = req.params.campaignId;
        if(campaignId){
            const donation = await DonationService.updateStatusBycampaignId(req.params.id, req.body.status,campaignId);
            if(!donation){
                return res.status(404).send("Donation not found");
            }
            res.status(200).send(donation);
        }
        else if(req.user.role === "admin"){
            const donation = await DonationService.updateStatus(req.params.id, req.body.status);
            res.status(200).send(donation);
        }else{
            res.status(403).send("You are not allowed to do this action");
        }
    
    } catch (error) {
        res.status(400).send(error.message);
    }
}