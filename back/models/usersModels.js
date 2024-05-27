const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});



userSchema.pre('save',async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const saltRounds =  10 ;
    const salt = await bcrypt.genSalt(saltRounds);
    this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isPasswordMatched = async function (entredPassword) {
    const isMatched = await bcrypt.compare(enteredPassword, this.password);
    console.log('Password Matched:', isMatched)
    return isMatched;
}

userSchema.methods.isPasswordMatched = async function (enteredpassword) {
    const resetToken = crypto.randomBytes(32).toString('hex');
    this.passwordResetToken = crypto
             .createhash('sha256')
             .update(resetToken)
             .digest('hex');
        this.passwordResetExpiress = Date.now() + 30 * 60 * 1000;
        return resetToken;
};
//Export the model
module.exports = mongoose.model('User', userSchema);