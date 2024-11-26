

export const up = async (knex) => {
    return await knex.schema.createTable('comments', function(table) {
        table.increments('id');
        table.text('content').notNullable();
        table.integer('task_id').unsigned().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.timestamps();
        
        table.foreign('task_id').references('id').inTable('tasks').onDelete('CASCADE');
        table.foreign('user_id').references('id').inTable('users').onDelete('SET NULL');
    });
};

export const down = async (knex) => {
    return await knex.schema.dropTable('comments');
};