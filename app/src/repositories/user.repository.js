const User = require('../models/User.model');

class UserRepository {
    async createUser(user) {
        return await User.create(user);
    }
    async getAllUsers() {
        return await User.find();
    }
    async blockUser(id, status) {
        return await User.findByIdAndUpdate(id, { status: status }, { new: true });
    }
    async getUserByEmail(email) {
        return await User.findOne({ email: email });
    }
}
module.exports = new UserRepository();