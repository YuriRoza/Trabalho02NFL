

exports.up = (knex) => {
    return knex.schema.createTable('jogadores', (table) => {
        table.increments();
        table.string('nome', 100).notNullable();
        table.string('foto').notNullable();
        table.integer('idade', 2).notNullable();
        table.integer('anos_liga', 2).notNullable();
        table.boolean('destaque').notNullable().defaultTo(false);
        table.integer('time_id').notNullable().unsigned();
        table.foreign('time_id').references('times.id')
                                .onDelete('restrict')
                                .onUpdate('cascade')
        table.integer('posicao_id').notNullable().unsigned();
        table.foreign('posicao_id').references('posicoes.id')
                                   .onDelete('restrict')
                                   .onUpdate('cascade')
  
        table.timestamps(true, true);
    })
  };
  
  exports.down = (knex) => knex.schema.dropTable('jogadores');
