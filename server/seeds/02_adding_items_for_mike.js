/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {users_id: 1, item_name: 'Door', description: 'Magical door that can teleport you around the world.', quantity: 50},
    {users_id: 1, item_name: 'Canister', description: 'Canister that can hold the screams of people. Don\'t ask any questions.', quantity: 100},
    {users_id: 1, item_name: 'Sock', description: 'CAUTION: VERY DANGEROUS. It is said this sock will destroy all who touch it.', quantity: 1},
  ]);
};
