const RequestRepository = require('../repositories/request.repository');

class RequestService {
    async createRequest(request) {
        return await RequestRepository.create(request);
    }
    async getAllRequests() {
        return await RequestRepository.getAllRequests();
    }
    async getRequestById(id) {
        return await RequestRepository.getRequestById(id);
    }
    async statusRequest(id, status) {
        return await RequestRepository.statusRequest(id, status);
    }
    async deleteRequest(id) {
        return await RequestRepository.deleteRequest(id);
    }
}
module.exports = new RequestService();