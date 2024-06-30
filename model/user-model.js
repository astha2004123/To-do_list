var mongoose = require('mongoose');

var userschema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    admin_id:{
        type:String
    }
})

module.exports = mongoose.model('user_list',userschema);