const UserService = require('../services/user.services');
const hash=require('../utils/hash');
exports.createUser = async (req, res) => {
    ;
    try {
        const hashedPassword = await hash.hashPassword(req.body.password);
        req.body.password = hashedPassword;
    
        req.body.profilePicture = req.file.path;
    
        if (typeof req.body.address === "string") {
            try {
                req.body.address = JSON.parse(req.body.address);
            } catch (error) {
                return res.status(400).json({ error: " Address must be a valid JSON object!" });
            }
        }
    
        if (!req.body.address || !req.body.address.street || !req.body.address.city || !req.body.address.country) {
            return res.status(400).json({ error: " Please provide complete address details!" });
        }
    
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    
    } catch (error) {
        console.error("❌ Error creating user:", error);
        res.status(500).json({ error: "❌ An error occurred while creating the user!" });
    }
    
};
exports.getAllUsers = async (req, res) => {
    try {
        // console.log("Cloudinary Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
        const users = await UserService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
