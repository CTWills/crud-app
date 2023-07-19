/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'Mike', last_name: 'Wazowski', username: 'MikeW', password: '!@#$1234'},
    {first_name: 'James', last_name: 'Sullivan', username: 'JamesS', password: '!@#$1234'},
  ]);
};
