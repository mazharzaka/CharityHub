const DonationRepository = require('../repositories/donation.repository');

class DonationService {
    async createDonation(donation) {
        return await DonationRepository.createDonation(donation);
    }
    async getAllDonations() {
        return await DonationRepository.getAllDonations();
    }
    async getDonationById(id) {
        return await DonationRepository.getDonationById(id);
    }
    async updateStatus(id, status) {
        return await DonationRepository.updateStatus(id, status);
    }
    async updateStatusBycampaignId(id, status, campaignId) {
        return await DonationRepository.updateStatusBycampaignId(id, status, campaignId);
    }
    async getDonationsBycampaignId(campaignId) {
        return await DonationRepository.getDonationsBycampaignId(campaignId);
    }
    async getDonationsBycampaignIdAndId(campaignId, id) {
        return await DonationRepository.getDonationsBycampaignIdAndId(campaignId, id);
    }
    async addTransaction(donationId, transactionId) {
        return await DonationRepository.addTransaction(donationId, transactionId);
    }
}
module.exports = new DonationService();