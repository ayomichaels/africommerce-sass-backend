//importing the mongoose database ORM
const mongoose = require("mongoose")
const Schema = mongoose.Schema

//modelling the leader schema
const UserSchema = new Schema({
    username:{
        type: String,
        default: '',
        required: true
    },
    password:{
        type: String,
        default: '',
        required: true
    },
    firstname:{
        type: String,
        default: '',
        required: true
    },
    lastname:{
        type: String,
        default: '',
        required: true
    },
    email:{
        type: String,
        default: '',
        required: true
    },
    phonenumber:{
        type: String,
        default: '',
        required: true
    },
    address:{
        type: String,
        default: ''
    },
    usertype:{ 
        type: String, 
        enum: ['business', 'user'],
        default: 'user'
    },
    admin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true 
})

const users = mongoose.model("User", UserSchema) //creating the model

module.exports = users //exporting the created model