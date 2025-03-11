const Request = require('../models/request.model');

class RequestRepository {
    async create(request) {
        return await Request.create(request);
    }
    async getAllRequests() {
        return await Request.find();
    }
    async getRequestById(id) {
        return await Request.findById(id);
    }
    async statusRequest(id, status) {
        return await Request
            .findByIdAndUpdate(id, { status: status }, { new: true });
    }
    async deleteRequest(id) {
        return await Request.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    }
}
module.exports = new RequestRepository();