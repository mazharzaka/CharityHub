const donations=require('../models/Donation.model');

class DonationRepository {
    async createDonation(donation) {
        return await donations.create(donation);
    }
    async getAllDonations() {
        return await donations.find();
    }
    async getDonationById(id) {
        return await donations.findById(id);
    }
    async updateStatus(id, status) {
        return await donations.findByIdAndUpdate(id, { status: status }, { new: true });    
    } 
    async updateStatusBycampaignId(id, status,campaignId) {
        return await donations.findOneAndUpdate({ campaignId: campaignId, _id: id }, { status: status }, { new: true });    
    } 
    async getDonationsBycampaignId(campaignId) {
        return await donations.find({ campaignId: campaignId });
    }
    async getDonationsBycampaignIdAndId(campaignId, id) {
        return await donations.find({ campaignId: campaignId, _id: id });
    }
}
module.exports = new DonationRepository();