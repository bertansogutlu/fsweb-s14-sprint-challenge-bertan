// bu`Task` modeli buraya
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const db = require("../../data/dbConfig");

const getAllTask = async function() {
    const tasks = await db('tasks')
    .leftJoin('projects','projects.project_id','tasks.project_id')
    .select('tasks.*','projects.project_name','projects.project_description')
    tasks.forEach(task => {
        task.task_completed = !!task.task_completed
    });
    return tasks;
};

const getTaskById = async function(id) {
    const task = await db('tasks').where('task_id',id).first()
    //project.project_completed = !!project.project_completed
    return task;
};

const createNewTask = async function(task) {
    const [id] = await db('tasks').insert(task);
    const newTask = await getTaskById(id);
    newTask.task_completed = !!newTask.task_completed
    return newTask;
}

module.exports ={
    getAllTask,
    createNewTask
}
