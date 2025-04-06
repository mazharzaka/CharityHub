const User = require('../models/User.model');

class UserRepository {
    async createUser(user) {
        try {
          return await User.create(user);
        } catch (error) {
            console.error("❌ MongoDB error:", error); 
          if (error.code === 11000 && error.keyPattern?.email) {
            throw new Error('User already exists');
          }
      
          console.error("❌ Unexpected error in createUser:", error);
          throw new Error('Something went wrong while creating the user');
        }
      }
      
    async getAllUsers() {
        try{
        return await User.find();}
        catch{
            throw new Error('No users found');
        }
    }
    async getUserById(id) {
        return await User.findById(id);
    }
    async blockUser(id, status) {
        return await User.findByIdAndUpdate(id, { status: status }, { new: true });
    }
    async getUserByEmail(email) {
        return await User.findOne({ email: email });
    }
    
}
module.exports = new UserRepository();