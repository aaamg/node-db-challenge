
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'a', project_description: 'description 1', project_completed: false},
        {project_name: 'b', project_description: 'description 2', project_completed: false},
        {project_name: 'c', project_description: 'description 3', project_completed: false}
      ]);
    });
};

//done


