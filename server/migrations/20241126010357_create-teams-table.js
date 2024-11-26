

export const up = async (knex) => {
    return await knex.schema.createTable('teams', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.text('description').nullable();
        table.timestamps();
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('teams');
};