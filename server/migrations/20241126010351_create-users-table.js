

export const up = async (knex) => {
    return await knex.schema.createTable('users', function(table) {
        table.increments('id');
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.integer('role_id').unsigned().notNullable();
        table.timestamps();

        table.foreign('role_id').references('id').inTable('roles').onDelete('SET NULL');
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('users');
};