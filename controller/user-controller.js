var user = require('../model/user-model');
var storage = require('node-persist');
storage.init();

/* USER REGISTER */
exports.register = async(req,res) =>{
    var admin_id = await storage.getItem('admin_id');
    req.body.admin_id = admin_id;
    var data = await user.create(req.body);
    res.status(200).json({
        status:"register!",
        data
    })
}
/* USER LOGIN */
exports.login = async(req,res) =>{
    var data = await user.find({'email' : req.body.email});
    var user_id = await storage.getItem('user_id');
    if(user_id == undefined){
        if(data.length == 1){
            if(data[0].password == req.body.password){
                await storage.setItem('user_id',data[0].id);
                res.status(200).json({
                    status:"login!",
                    data
                }) 
            }
            else{
                res.status(200).json({
                    status:"plz chek your email and password!"
                })
            }
        }
        else{
            res.status(200).json({
                status:"plz chek your email and password!"
            })
        }
    }
    else{
        res.status(200).json({
            status:"User is alredy login!"
        })
    }

}
/* USER LOGOUT */
exports.user_logout = async (req,res) =>{
    await storage.clear();
    res.status(200).json({
        status:"logout success!"
    });
}
/*USER VIEW */
exports.view = async(req,res) =>{
    var admin_id = await storage.getItem('admin_id');
    var data = await user.find({"admin_id":admin_id});
    res.status(200).json({
        status:"User view!",
        data
    })
}
/*MANAGE USER */
exports.delete = async(req,res) =>{
    var data = await user.findByIdAndDelete(req.params.id,req.body,{new:true});  
    res.status(200).json({
        status:"User Delete!"
    });
    
}
/*UPADTE USER */
exports.update = async(req,res) =>{
    var data = await user.findByIdAndUpdate(req.params.id,req.body,{new:true});  
    res.status(200).json({
        status:"User Update!"
    });
    
}
/*GET SINGLE USER */
exports.single_user = async(req,res) =>{
    var data = await user.findById(req.params.id,req.body,{new:true});
    res.status(200).json({
        status:"User view!",
        data
    })
}