const express = require('express')

const Projects = require('../model/project-model.js')

const router = express.Router();

//-----TASKS----\\
//get all tasks
router.get('/tasks', (req, res) => {
    const id = req.params.id
    Projects.getAllTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get task'})     
    })
})

//get task by id
router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
    Projects.getTasks(id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed tooo get task'})     
    })
})

//post task
router.post('/:id/tasks', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addTasks(body, id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to post task'})     
    })
})

//-----PROJECTS----\\
//get projects
router.get('/projects', (req, res) => {
    const id = req.params.id
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get project'})     
    })
})

//post project
router.post('/:id/projects', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    Projects.addProjects(body, id)
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to post task'})     
    })
})

//-----RESOURCES----\\
// get resources by id
router.get('/resources', (req, res) => {
    const id = req.params.id
    Projects.getResources()
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to get task'})     
    })
})

//post resource
router.post('/:id/resources', (req, res) => {
    //const id = req.params.id;
    const body = req.body;
    Projects.addResources(body)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        res.status(500).json({ error: 'failed to post task'})     
    })
})


module.exports = router;

//done