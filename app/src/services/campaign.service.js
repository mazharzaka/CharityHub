const campaignRepository = require('../repositories/campaign.repository');

class CampaignService {
    async createCampaign(campaign) {
        return await campaignRepository.createCampaign(campaign);
    }
    async getAllCampaigns() {
        return await campaignRepository.getAllCampaigns();
    }
    async getCampaignById(id) {
        return await campaignRepository.getCampaignById(id);
    }
    async updateCampaign(id, campaign) {
        return await campaignRepository.updateCampaign(id, campaign);
    }
    async deleteCampaign(id) {
        return await campaignRepository.deleteCampaign(id);
    }
    async getFeaturedCampaigns() {
        return await campaignRepository.getFeaturedCampaigns();
    }
    async markAsFeatured(id,status) {
        return await campaignRepository.markAsFeatured(id,status);
    }
    async statusCampaign(id, status) {
        return await campaignRepository.statusCampaign(id, status);
    }
    async addVolunteers(campaignId, userId) {
        return await campaignRepository.addVolunteers(campaignId, userId);
    }
    async leaveVolunteers(campaignId, userId) {
        return await campaignRepository.leaveVolunteers(campaignId, userId);
    }
    async addDonation(campaignId, donationId) {
        return await campaignRepository.addDonation(campaignId, donationId);
    }
    async addBeneficiary(campaignId, userId) {
        return await campaignRepository.addBeneficiary(campaignId, userId);
    }
    async removeBeneficiary(campaignId, userId) {
        return await campaignRepository.removeBeneficiary(campaignId, userId);
    }
    async JoinCampaign(campaignId) {
        return await campaignRepository.JoinCampaign(campaignId);
    }
    async updateCampaignByIdAndCampaignId(campaignId, id, campaign) {
        return await campaignRepository.updateCampaignByIdAndCampaignId(campaignId, id, campaign);
    }
    async deleteCampaignByIdAndCampaignId(campaignId, id) {
        return await campaignRepository.deleteCampaignByIdAndCampaignId(campaignId, id);
    }
    async addVolunteersByIdAndCampaignId(campaignId, id, userId) {
        return await campaignRepository.addVolunteersByIdAndCampaignId(campaignId, id, userId);
    }
    async getDonationsByCampaignId(campaignId) {
        return await campaignRepository.getDonationsByCampaignId(campaignId);
    }
    
}
module.exports = new CampaignService();