// `/api/tasks` router buraya
const router = require('express').Router();
const taskModel = require('./model');

router.get('/', async (req,res,next)=>{
    try {
        res.json('Task')
    } catch (error) {
        next(error)
    }
});

module.exports = router;
