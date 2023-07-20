/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {users_id: 1, item_name: 'Door', description: 'Magical door that can teleport you around the world.', quantity: 50},
    {users_id: 1, item_name: 'Canister', description: 'Canister that can hold the screams of people. Don\'t ask any questions.', quantity: 100},
    {users_id: 1, item_name: 'Sock', description: 'CAUTION: VERY DANGEROUS. It is said this sock will destroy all who touch it.', quantity: 1},
    {users_id: 2, item_name: 'Scary voice', description: 'This device emits a roar that will scare the life out of you. If you do choose to use this, wear some good earplugs.', quantity: 23},
    {users_id: 2, item_name: 'Scary Costume', description: 'Some say this costume is the most terrifying one out there. One would say it looks like a kitty.', quantity: 36},
    {users_id: 2, item_name: 'Best Friend', description: 'An action figure of your best friend. Hand-crafted and personalized to your liking, this handy action figure will make you feel like your best friend is right there with you!', quantity: 1},
  ]);
};

