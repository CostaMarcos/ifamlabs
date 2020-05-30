exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        table.string('user_id').primary();
        table.string('nome').notNullable();
        table.string('campus').notNullable();
        table.boolean('tipo').notNullable();
        table.string('password_hash').notNullable();

        table.string('pedido_id');

        table.foreign('pedido_id').references('_id').inTable('pedidos');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
};
