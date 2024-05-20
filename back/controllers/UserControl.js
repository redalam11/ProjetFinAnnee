const User = require("../models/usersModels");
const asyncHandler = require("express-async-handler");


const registerUser = asyncHandler(async(req,res)=>{
    const email = req.body.email;
    const UserTrouve = await User.findOne({email:email});
    if (!UserTrouve){
        const newUser = await User.create(req.body);
        res.json({
            name:UserTrouve?.name,
            email: UserTrouve?.email,
            mobile : UserTrouve?.mobile,
            password: UserTrouve?.password
        })
    }
    else{

        res.json(
            "Utilisateur existnt"
        )
    }

}
)



const loginUser = asyncHandler(async(req,res)=>{
 

}
)

module.exports = {
    registerUser, loginUser
}