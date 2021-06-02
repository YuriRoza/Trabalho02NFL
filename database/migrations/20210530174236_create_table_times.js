
exports.up = (knex) => {
    return knex.schema.createTable('times', (table) =>{
        table.increments();
        table.string('nome', 100).notNullable();
    })
  };
  
  exports.down = (knex) => knex.schema.dropTable('times');