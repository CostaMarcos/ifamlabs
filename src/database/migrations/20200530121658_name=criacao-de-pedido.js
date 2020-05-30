exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
        table.string('_id').primary();
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.string('horario_id').notNullable();
        table.foreign('horario_id').references('codigo').inTable('horarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
};
