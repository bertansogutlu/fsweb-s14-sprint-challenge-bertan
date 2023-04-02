/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const defaultProjects = [
    {
      project_name : 'Workintech',
      project_description : 'On going'
    },
    {
      project_name : 'Sun Express',
      project_description : 'On flight'
    }
  ];
  const defaultResources = [
    {
      resource_name: 'Money',
      resource_description: 'USD'
    },
    {
      resource_name: 'Food',
      resource_description: 'KG'
    }
  ];
  const defaultTasks = [
    {
      task_description: 'Not for everyone',
      task_notes: 'Need some challenge',
      project_id: 1
    },
    {
      task_description: 'Killing me',
      task_notes: 'Need help',
      project_id: 1
    },
    {
      task_description: 'Dream on',
      task_notes: 'Why not',
      project_id: 2
    }
  ];
  const defaultProjects_Resources = [
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 1,
      resource_id: 2
    },
    {
      project_id: 2,
      resource_id: 2
    },
  ];
  await knex('projects').insert(defaultProjects);
  await knex('resources').insert(defaultResources);
  await knex('tasks').insert(defaultTasks);
  await knex('project_resources').insert(defaultProjects_Resources);
};
