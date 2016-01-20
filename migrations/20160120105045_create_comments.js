exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.string('post_id');
    table.string('commenter');
    table.string('body')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments', function(table){
  });
};
