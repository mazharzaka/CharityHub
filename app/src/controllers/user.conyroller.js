const UserService = require('../services/user.services');
const hash=require('../utils/hash');
exports.createUser = async (req, res) => {
    try {
        const hashedPassword = await hash.hashPassword(req.body.password);
        req.body.password = hashedPassword;
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
