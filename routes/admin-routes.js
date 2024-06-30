var express = require('express');
var router = express.Router();
var admin = require('../controller/admin-controller');


router.post('/register',admin.register);
router.get('/login',admin.login);
router.get('/logout',admin.logout);

module.exports = router;
