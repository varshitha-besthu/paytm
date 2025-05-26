const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    username : {type: String, required : true},
    password : {type : String, required : true},
    firstName : {type : String},
    lastName : {type : String}
})

const accountSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : 'User', required: true},
    balance : {type : Number, required : true}
})
const Account = new mongoose.model("Account", accountSchema);
const User = new mongoose.model("User", userSchema);
module.exports=  { User , Account};

