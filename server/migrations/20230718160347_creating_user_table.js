/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('users').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('users', table => {
                table.increments('id');
                table.string('first_name');
                table.string('last_name');
                table.string('username');
                table.string('password');
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
