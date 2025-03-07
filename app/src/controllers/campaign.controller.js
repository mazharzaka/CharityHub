const campaignService = require('../services/campaign.service');


exports.createCampaign = async (req, res) => {
    try {
        req.body.image = req.file.path;

        const campaign = await campaignService.createCampaign(req.body);
        res.status(201).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await campaignService.getAllCampaigns();
        res.status(200).send(campaigns);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.getCampaignById = async (req, res) => {
    try {
        const campaign = await campaignService.getCampaignById(req.params.id);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.updateCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.updateCampaign(req.params.id, req.body);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.deleteCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.deleteCampaign(req.params.id);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.getFeaturedCampaigns = async (req, res) => {
    try {
        const campaigns = await campaignService.getFeaturedCampaigns();
        res.status(200).send(campaigns);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.markAsFeatured = async (req, res) => {
    try {
        const campaign = await campaignService.markAsFeatured(req.params.id, req.body.status);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.statusCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.statusCampaign(req.params.id, req.body.status);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.addVolunteers = async (req, res) => {
    try {
        const campaign = await campaignService.addVolunteers(req.params.campaignId, req.params.userId);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.leaveVolunteers = async (req, res) => {
    try {
        const campaign = await campaignService.leaveVolunteers(req.params.campaignId, req.params.userId);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.addDonation = async (req, res) => {
    try {
        const campaign = await campaignService.addDonation(req.params.campaignId, req.params.donationId);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.addBeneficiary = async (req, res) => {
    try {
        const campaign = await campaignService.addBeneficiary(req.params.campaignId, req.params.userId);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.removeBeneficiary = async (req, res) => {
    try {
        const campaign = await campaignService.removeBeneficiary(req.params.campaignId, req.params.userId);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.JoinCampaign = async (req, res) => {
    try {
        const campaign = await campaignService.JoinCampaign(req.params.campaignId);
        res.status(200).send(campaign);
    } catch (error) {
        res.status(400).send(error.message);
    }
}