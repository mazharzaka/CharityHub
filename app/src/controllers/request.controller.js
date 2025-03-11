const requestService = require('../services/request.service');

exports.createRequest = async (req, res) => {
    try {
        const request = await requestService.createRequest(req.body);
        res.status(201).send(request);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.getAllRequests = async (req, res) => {
    try {
        const requests = await requestService.getAllRequests();
        res.status(200).send(requests);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.getRequestById = async (req, res) => {
    try {
        const request = await requestService.getRequestById(req.params.id);
        res.status(200).send(request);
    } catch (error) {
        res.status(400).send(error.message);
    }   
}
exports.updateStatus = async (req, res) => {
    try {
        const request = await requestService.statusRequest(req.params.id, req.body.status);
        res.status(200).send(request);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
exports.deleteRequest = async (req, res) => {
    try {
        const request = await requestService.deleteRequest(req.params.id);
        res.status(200).send(request);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
