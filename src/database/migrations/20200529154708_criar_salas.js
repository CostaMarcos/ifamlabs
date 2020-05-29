exports.up = function(knex) {
    return knex.schema.createTable('salas', function(table){
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('local');
        table.string('capacidade').notNullable();
        table.string('campus', 3);
        table.boolean('interditada');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('salas');
};
