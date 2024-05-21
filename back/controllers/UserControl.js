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
            "Utilisateur existant"
        )
    }

}
)

const loginUser = asyncHandler(async(req,res)=>{
    const { email , password} = req.body;
    const findUser = await User.findOne({ email }); 
    if(findUser && (await findUser.isPasswordMatched(password))){
        res.json(findUser)
       } else {
            throw new Error("Invalid Credentials");

        }
    }
);


const getallUser = asyncHandler(async(req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    } catch(error) {
        throw new Error(error);
    }
});

module.exports = {
    registerUser, loginUser, getallUser
}