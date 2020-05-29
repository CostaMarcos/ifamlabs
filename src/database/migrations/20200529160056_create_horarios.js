
exports.up = function(knex) {
    return knex.schema.createTable('horarios', function(table){
        table.increments();
        table.string('inicio').notNullable();
        table.string('fim').notNullable();
        table.boolean('ocupado');

        table.string('sala_id').notNullable();

        table.foreign('sala_id').references('id').inTable('salas');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('horarios');
};
