const express = require('express');
const {registerUser, loginUser, getallUser} = require('../controllers/UserControl')

const router = express.Router();
router.post("/register" , registerUser)
router.post("/login" , loginUser)
router.get('/all-users',getallUser)


module.exports = router;
