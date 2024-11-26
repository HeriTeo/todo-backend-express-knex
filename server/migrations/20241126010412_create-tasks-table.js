

export const up = async (knex) => {
    return await knex.schema.createTable('tasks', function(table) {
        table.increments('id');
        table.string('title').notNullable();
        table.text('description').nullable();
        table.text('status').default('pending');
        table.date('deadline').nullable();
        table.timestamps();
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('tasks');
};