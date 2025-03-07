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
}
module.exports = new DonationRepository();