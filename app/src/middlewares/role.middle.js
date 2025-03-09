exports.checkRole = (roles, checkCreator = false, model = null) => {
    return async (req, res, next) => {
        try {
            if (roles.includes(req.user.role)) {
                return next();
            }

            if (checkCreator) {
                if (!model) {
                    return res.status(500).json({ message: "Model not found" });
                }

                const data = await model.findById(req.params.id);
                if (!data) {
                    return res.status(404).json({ message: "Resource not found" });
                }

                if (data.creator.toString() === req.user.id.toString()) {
                    return next();
                }
            }

            return res.status(403).json({ message: "Access denied" });

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
};
