// `Proje` modeli buraya
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const db = require("../../data/dbConfig");

const getAllProject = async function() {
    const projects = await db('projects');
    projects.forEach(project => {
        project.project_completed = !!project.project_completed
    });
    return projects;
};

const getProjectById = async function(id) {
    const project = await db('projects').where("project_id",id).first()
    project.project_completed = !!project.project_completed
    return project;
};

const createNewProject = async function(project) {
    const [id] = await db('projects').insert(project);
    const newProject = await getProjectById(id);
    return newProject;
}

module.exports ={
    getAllProject,
    getProjectById,
    createNewProject
}