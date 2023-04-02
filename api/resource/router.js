// `/api/resources` router buraya
const router = require('express').Router();
const resourceModel = require('./model');

router.get('/', async (req,res,next)=>{
    try {
        res.json('Resource')
    } catch (error) {
        next(error)
    }
});

module.exports = router;
