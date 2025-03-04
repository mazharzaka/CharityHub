exports.checkRole = (role) => {
    return (req, res, next) => {
        if (!req.user ||req.user.role !== role) {
            return res.status(403).json({ error: "You do not have the permission to access this resource" });
        }
        next();
    }
}