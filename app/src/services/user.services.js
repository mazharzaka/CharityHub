const UserRepository=require('../repositories/user.repository');
const auth = require('../utils/auth');
class UserService{
    async createUser (user){
        const userEmail = await UserRepository.getUserByEmail(user.email);
        if(userEmail) throw new Error('User already exists');
        return await UserRepository.createUser(user);
    }
    async getAllUsers(){
        return await UserRepository.getAllUsers();
    }
    async blockUser(id,status){
        return await UserRepository.blockUser(id,status);
    }
    async Login(email,password){
       const token= auth.generateToken(email,password);
        return token;
    }
}
module.exports = new UserService();