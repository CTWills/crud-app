/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('items').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('items', table => {
                table.increments('id');
                table.integer('users_id');
                table.foreign('users_id').references('users.id').deferrable('deferred');
                table.string('item_name');
                table.string('description');
                table.integer('quantity');
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('items', table => {
    table.dropForeign('users_id')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('items')
  })
};
