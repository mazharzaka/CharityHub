const campaignService = require('../services/campaign.service');


exports.createCampaign = async (req, res) => {
    try {
        req.body.image = req.file.path;
    
        // req.body.creator = req.user.user_id;
        const campaign = await campaignService.createCampaign(req.body);
        return   res.status(201).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await campaignService.getAllCampaigns();
       return  res.status(200).send(campaigns);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.getCampaignById = async (req, res) => {
    try {        
        const campaign = await campaignService.getCampaignById(req.params.id);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.updateCampaign = async (req, res) => {
    try {
        const campaignId=req.params.id;
        req.body.image = req.file?.path;
        
        if(req.user.role=="admin"){
            const campaign = await campaignService.updateCampaign(req.params.id, req.body);
            console.log( req.body);
       return  res.status(200).send(campaign);}
        if(!campaignId){
            return  res.status(400).send("You are not authorized to update this campaign");

        }
        const campaign = await campaignService.updateCampaignByIdAndCampaignId(campaignId, req.params.id, req.body);
            return res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.deleteCampaign = async (req, res) => {
    try {const campaignId=req.params.campaignId;
        if(req.user.role=="admin"){
    const campaign = await campaignService.deleteCampaign(req.params.id);
   return  res.status(200).send(campaign);}
        if(!campaignId){
            return  res.status(400).send("You are not authorized to delete this campaign");
            }
            const campaign = await campaignService.deleteCampaignByIdAndCampaignId(campaignId, req.params.id);
            return res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.getFeaturedCampaigns = async (req, res) => {
    try {
        const campaigns = await campaignService.getFeaturedCampaigns();
       return  res.status(200).send(campaigns);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.markAsFeatured = async (req, res) => {
    try {
        const campaign = await campaignService.markAsFeatured(req.params.id, req.body.status);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.statusCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.statusCampaign(req.params.id, req.body.status);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.addVolunteers = async (req, res) => {
    try {
        const campaignId=req.params.campaignId;
        if(campaignId){
            const campaign = await campaignService.addVolunteersByIdAndCampaignId(campaignId, req.params.id, req.params.userId);
            return res.status(200).send(campaign);

        }
        const campaign = await campaignService.addVolunteers(req.params.campaignId, req.params.id);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.leaveVolunteers = async (req, res) => {
    try {
        const campaignById=await campaignService.getCampaignById(req.params.campaignId);

    if(req.user.role=="admin"){
        const campaign = await campaignService.leaveVolunteers(req.params.campaignId, req.params.id);
       return  res.status(200).send(campaign);}
       if(!campaignById.volunteers.includes(req.user.user_id)){
        return  res.status(400).send("You are not a volunteer in this campaign");
    }
      const campaign = await campaignService.leaveVolunteers(req.params.campaignId, req.user.user_id);
       return  res.status(200).send(campaign);
}catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.addDonation = async (req, res) => {
    try {
        const campaign = await campaignService.addDonation(req.params.campaignId, req.params.donationId);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.addBeneficiary = async (req, res) => {
    try {
        const campaign = await campaignService.addBeneficiary(req.params.campaignId, req.params.userId);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.removeBeneficiary = async (req, res) => {
    try {
        const campaign = await campaignService.removeBeneficiary(req.params.campaignId, req.params.userId);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}
exports.JoinCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.JoinCampaign(req.params.campaignId);
       return  res.status(200).send(campaign);
    } catch (error) {
       return  res.status(400).send(error.message);
    }
}