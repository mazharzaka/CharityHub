const UserRepository=require('../repositories/user.repository');
const generateToken = require('../utils/generateToken');
class UserService{
    async createUser (user){
        
        const userEmail = await UserRepository.getUserByEmail(user.email);
        console.log("user"+userEmail);

        if(userEmail!==null) throw new Error('User already exists');
        return await UserRepository.createUser(user);
    }
    async getAllUsers(){
        return await UserRepository.getAllUsers();
    }
    async getUserById(id){
        return await UserRepository.getUserById(id);
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