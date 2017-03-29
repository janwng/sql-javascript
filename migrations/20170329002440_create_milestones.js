
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function(table){
      table.increments();
      table.string('description');
      table.date('date_achieved');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')
  ])
};


//
// exports.up = function(knex) {
//   return knex.schema.createTable("milestones", (table) => {
//     table.string("description");
//     table.date("date_achieved");
//   });
// };
//
// exports.down = function(knex) {
//   return knex.schema.dropTable("milestones");
// }
