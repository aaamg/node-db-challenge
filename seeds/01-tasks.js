
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {tasks_description: 'project 1', tasks_notes: 'task notes 1', task_completed: false, project_id: 1},
        {tasks_description: 'project 2', tasks_notes: 'task notes 2', task_completed: false, project_id: 1},
        {tasks_description: 'project 3', tasks_notes: 'task notes 3', task_completed: false, project_id: 1}
      ]);
    });
};

//done