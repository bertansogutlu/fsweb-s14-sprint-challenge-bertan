// `/api/tasks` router buraya
const router = require('express').Router();
const taskModel = require('./model');

router.get('/', async (req,res,next)=>{
    try {
        const tasks = await taskModel.getAllTask();
        res.json(tasks)
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req,res,next)=>{
    try {
        newTask = await taskModel.createNewTask(req.body);
        res.json(newTask)
    } catch (error) {
        next(error)
    }
});

module.exports = router;
