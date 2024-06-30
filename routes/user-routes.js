var express = require('express');
var router = express.Router();
var user = require('../controller/user-controller')

router.post('/register_user',user.register)
router.post('/user',user.login)
router.post('/logout',user.user_logout)
router.get('/view_user',user.view)
router.post('/manage_user/:id',user.delete)
router.post('/update_user/:id',user.update)
router.get('/user/:id',user.single_user);

module.exports = router;
