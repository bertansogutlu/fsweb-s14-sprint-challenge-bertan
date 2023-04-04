//  `/api/projects` router buraya
const router = require('express').Router();
const projectModel = require('./model');

router.get('/', async (req,res,next)=>{
    try {
        projects = await projectModel.getAllProject()
        res.json(projects)
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req,res,next)=>{
    try {
        newProject = await projectModel.createNewProject(req.body)
        res.json(newProject)
    } catch (error) {
        next(error)
    }
});

module.exports = router;