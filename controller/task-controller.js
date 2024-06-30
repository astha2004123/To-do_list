var task = require('../model/task-model');
var storage = require('node-persist');
storage.init();

/*TASK ADD */
exports.insert = async(req,res) =>{
    var admin_id = await storage.getItem('admin_id');
    var user_id = await storage.getItem('user_id');
    req.body.admin_id = admin_id;
    req.body.user_id = user_id;
    if(user_id != null){
        var data = await task.create(req.body);
        res.status(200).json({
            status:"Task add!",
            data
        })
    }
    else{
        res.status(200).json({
            status:"User is not loging!",
            data
        })
    }
}
/*TASK VIEW */
exports.view = async(req,res) =>{
    var user_id = await storage.getItem('user_id');
    var data = await task.find({"user_id":user_id});
    res.status(200).json({
        status:"Task view!",
        data
    })
}
/*DELETE TASK */
exports.delete = async(req,res) =>{
    var data= await task.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"Task Delete!"
    });
    
}
/*UPADTE TASK */
exports.update = async(req,res) =>{
    var data = await task.findByIdAndUpdate(req.params.id,req.body,{new:true});  
    res.status(200).json({
        status:"Task Update!"
    });
    
}
/*GET SINGLE TASK */
exports.single_task = async(req,res) =>{
    var data = await task.findById(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"Task view!",
        data
    })
}