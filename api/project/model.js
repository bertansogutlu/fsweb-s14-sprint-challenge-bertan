// `Proje` modeli buraya
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const db = require("../../data/dbConfig");

const getAllProject = async function () {
    const projects = await db("projects");
    return projects;
};

module.exports ={
    getAllProject
}