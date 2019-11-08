
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {resource_name: 'a', resource_description: 'resource description 1'},
        {resource_name: 'b', resource_description: 'resource description 2'},
        {resource_name: 'c', resource_description: 'resource description 3'}
      ]);
    });
};

//done