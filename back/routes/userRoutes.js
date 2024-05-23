const express = require('express');
const {registerUser,getaUser, loginUser, getallUser, deleteaUser, updateUser, blockUser, unblockUser} = require('../controllers/UserControl')

const router = express.Router();
router.post("/register" , registerUser)
router.post("/login" , loginUser)
router.get('/all-users',getallUser)
router.get('/getAUser/:id',getaUser)
router.put('/deleteaUser/:id',deleteaUser)
router.put('/updateUser/:id',updateUser)
router.put('/blockUser/:id',blockUser)
router.put('/unblockUser/:id',unblockUser)





module.exports = router;
