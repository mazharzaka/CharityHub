const Campaign = require('../models/Campaign.model');

class CampaignRepository {
    async createCampaign(campaign) {
        return await Campaign.create(campaign);
    }
    async getAllCampaigns() {
        return await Campaign.find();
    }
    async getCampaignById(id) {
        return await Campaign.findById(id);
    }
    async updateCampaign(id, campaign) {
        return await Campaign.findByIdAndUpdate(id, campaign, { new: true });
    }
    async deleteCampaign(id) {
        return await Campaign.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
    async getFeaturedCampaigns() {
        return await Campaign.find({ isFeatured: true });
    }
    async markAsFeatured(id,status) {
        return await Campaign.findByIdAndUpdate(id, { isFeatured: !status }, { new: true });
    }
    async statusCampaign(id, status) {
        return await Campaign.findByIdAndUpdate(id, { status: status }, { new: true });
    }
    async addVolunteers(campaignId, userId) {
        return await Campaign.findByIdAndUpdate(campaignId, { $push: { volunteers: userId } }, { new: true });
    }
    async leaveVolunteers(campaignId, userId) {
        return await Campaign.findByIdAndUpdate(campaignId, { $pull: { volunteers: userId } }, { new: true });
    }
    async addDonation(campaignId, donationId) {
        return await Campaign.findByIdAndUpdate(campaignId, { $push: { donations: donationId } }, { new: true });
    }
    async addBeneficiary(campaignId, userId) {
        return await Campaign.findByIdAndUpdate(campaignId, { $push: { beneficiaries: userId } }, { new: true });
    }
    async removeBeneficiary(campaignId, userId) {
        return await Campaign.findByIdAndUpdate(campaignId, { $pull: { beneficiaries: userId } }, { new: true });
    }
    async JoinCampaign(campaignId) {
        return await Campaign.findById(campaignId).populate('creator','name email')
        .populate('volunteers','name email phone')
        .populate('donations' ,'amount currency status')
        .populate('beneficiaries','name email phone');
   
    }
}