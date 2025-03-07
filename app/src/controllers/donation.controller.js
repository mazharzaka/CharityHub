const DonationService = require('../services/donation.service');

exports.createDonation = async (req, res) => {
    try {
        const donation = await DonationService.createDonation(req.body);
        res.status(201).send(donation);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.getAllDonations = async (req, res) => {
    try {
        const donations = await DonationService.getAllDonations();
        res.status(200).send(donations);
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
        const donation = await DonationService.updateStatus(req.params.id, req.body.status);
        res.status(200).send(donation);
    } catch (error) {
        res.status(400).send(error.message);
    }
}