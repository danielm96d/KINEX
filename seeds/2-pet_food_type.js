/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('pet_food_type').del()
  .then(()=>{
    return knex('pet_food_type').insert([
      {id: 1, food: 'Seed'},
      {id: 2, food: 'Chicken'},
      {id: 3, food: 'Kibble'}
    ]);
  })
};
