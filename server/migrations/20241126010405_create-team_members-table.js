

export const up = async (knex) => {
    return await knex.schema.createTable('team_members', function(table) {
        table.integer('team_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.timestamps();

        table.foreign('team_id').references('id').inTable('teams').onDelete('CASCADE');
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('team_members');
};