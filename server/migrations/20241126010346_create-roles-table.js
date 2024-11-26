

export const up = async (knex) => {
    return await knex.schema.createTable('roles', function(table) {
        table.increments('id');
        table.string('name');
        table.text('description');
        table.timestamps();
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('roles');
};