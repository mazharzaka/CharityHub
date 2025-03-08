exports.checkRole = (roles, checkCreator = false, model = null) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            next();
        }
        if(checkCreator){
            if(model){
                model.findById(req.params.id).then(data=>{
                    if(data.creator==req.user.id){
                        next();
                    }
                }).catch(err=>{
                    res.status(500).send({message:err.message});
                });
            }else{
                res.status(500).send({message:"Model not found"});
            }
        }else{
            res.status(401).send({message:"Unauthorized"});
        }
    }
}