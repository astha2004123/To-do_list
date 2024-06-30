var admin = require('../model/admin-model');
var storage = require('node-persist');
storage.init();

/* ADMIN REGISTER */
exports.register = async(req,res) =>{
    var data = await admin.create(req.body);
    res.status(200).json({
        status:"register!",
        data
    })
}

/* ADMIN LOGIN */
exports.login = async(req,res) =>{
    var data = await admin.find({'email' : req.body.email});
    var admin_id = await storage.getItem('admin_id');
    if(admin_id == undefined){
        if(data.length == 1){
            if(data[0].password == req.body.password){
                await storage.setItem('admin_id',data[0].id)
                res.status(200).json({
                    status:"login!"
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
            status:"Admin is Already Logged in!"
        });
    }
}

/* ADMIN LOGOUT */
exports.logout = async (req,res) =>{
    await storage.clear();
    res.status(200).json({
        status:"logout success!"
    });
}