const UserRepository=require('../repositories/user.repository');

class UserService{
    async createUser (user){
        const userEmail = await UserRepository.getUserByEmail(user.email);
        if(userEmail) throw new Error('User already exists');
        return await UserRepository.createUser(user);
    }
    async getAllUsers(){
        return await UserRepository.getAllUsers();
    }
}
module.exports = new UserService();