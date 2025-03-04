const UserRepository=require('../repositories/user.repository');
const generateToken = require('../utils/generateToken');
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
    async Login(user){
       const token= generateToken.generateToken(user);
    //    console.log(token);
       
        return {token:token};
    }
}
module.exports = new UserService();