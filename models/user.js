'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    
    Email: { type: String, unique: true },
    Password: String,    
    Type : String,
    rapidID : String,
    nem_id : Object,
    registerObj : Object,
    rapidID :String,
    privateKey:String,
    otp :Number,
    encodedMail :String,
    status : Array,
    familyMembers : Array,
    created_at: String,
});


mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://rpqb:rpqb123@ds131583.mlab.com:31583/digitalid', { useMongoClient: true });
mongoose.connect('mongodb://phr:phr12345@ds211592.mlab.com:11592/phr',{ useNewUrlParser: true });


module.exports = mongoose.model('user', userSchema);