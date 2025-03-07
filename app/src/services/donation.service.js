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
}
module.exports = new DonationService();