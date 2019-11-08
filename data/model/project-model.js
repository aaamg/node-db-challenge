const db = require('../db-config');

module.exports = {
    getResources,
    getProjects,
    getTasks,
    addResources,
    addProjects,
    addTasks,
    getAllTasks
}

function getResources(){
    return db('resource')
}

function getProjects(){
    return db('project')
}

function getTasks(project_id){
    // includes project table -- name and desc
    return db
    .select('p.id', 'p.project_name', 'p.project_description', 't.tasks_description', 't.tasks_notes', 't.task_completed')
    .from('project as p')
    .innerJoin('tasks as t', 'p.id', 't.project_id')
    .where({ project_id: project_id })
}

function getAllTasks(){
    // includes project table -- name and desc
    return db('tasks')
}

function addResources(resource){
    return db.insert(resource, 'id')
    .into('resource')
}

function addProjects(project){
    return db.insert(project, 'id')
    .into('project')
}

function addTasks(task, id){
    return db.insert(task, 'id')
    .into('tasks')
    .where({ project_id: id})
    
}