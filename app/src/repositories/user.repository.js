const User = require('../models/User.model');

class UserRepository {
    async createUser(user) {
        try{
        return await User.create(user);
        }
        catch{
            throw new Error('User already exists');
        }
    }
    async getAllUsers() {
        try{
        return await User.find();}
        catch{
            throw new Error('No users found');
        }
    }
    async blockUser(id, status) {
        return await User.findByIdAndUpdate(id, { status: status }, { new: true });
    }
    async getUserByEmail(email) {
        return await User.findOne({ email: email });
    }
    
}
module.exports = new UserRepository();