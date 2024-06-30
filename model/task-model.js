var mongoose = require('mongoose');

var taskschema = mongoose.Schema({
    date:{
        type:String
    },
    task_name:{
        type:String
    },
    time:{
        type:String
    },
    admin_id:{
        type:String
    },
    user_id:{
        type:String
    },
})
module.exports = mongoose.model('task_list',taskschema);