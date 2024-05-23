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

const getaUser = asyncHandler(async (req, res) => {
    console.log(req.params);
    const { id } = req.params; 
    try {
        const getaUser = await User.findById(id); 
        if (!getaUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json(getaUser); 
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const deleteaUser = asyncHandler(async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json({ message: "User deleted successfully", deletedUser });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const updateUser = asyncHandler(async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json(updatedUser);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json({ message: "User blocked successfully", user: updatedUser });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { isBlocked: false }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json({ message: "User unblocked successfully", user: updatedUser });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





module.exports = {
    registerUser, getaUser, loginUser, getallUser, deleteaUser, updateUser, blockUser, unblockUser
}