

export const up = async (knex) => {
    return await knex.schema.createTable('task_assignees', function(table) {
        table.integer('assignee_id').unsigned().notNullable();
        table.string('assignee_type').notNullable();
        table.timestamps();
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('task_assignees');
};