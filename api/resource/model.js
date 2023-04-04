// `Resource` modeli buraya
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const db = require("../../data/dbConfig");

const getAllResources = async function() {
    const resources = await db('resources');
    return resources;
};

const getResourceById = async function(id) {
    const resource = await db('resources').where("resource_id",id).first()
    return resource;
};

const createNewResource = async function(resource) {
    const [id] = await db('resources').insert(resource);
    const newResource = await getResourceById(id);
    return newResource;
}

module.exports = {
    getAllResources,
    createNewResource
}