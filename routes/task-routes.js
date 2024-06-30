var express = require('express');
var router = express.Router();
var task = require('../controller/task-controller');


router.post('/add_task',task.insert);
router.get('/view_task',task.view);
router.post('/update_task/:id',task.update);
router.get('/delete_task/:id',task.delete);
router.get('/task/:id',task.single_task);

module.exports = router;
