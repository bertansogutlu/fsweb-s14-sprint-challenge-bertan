// `/api/resources` router buraya
const router = require('express').Router();
const resourceModel = require('./model');

router.get('/', async (req,res,next)=>{
    try {
        const resources = await resourceModel.getAllResources();
        res.json(resources)
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req,res,next)=>{
    try {
        newResource = await resourceModel.createNewResource(req.body);
        res.json(newResource)
    } catch (error) {
        next(error)
    }
});

module.exports = router;
