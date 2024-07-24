/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('pet').del()
  .then(()=>{
    return knex('pet').insert([
      {id: 1, name: 'Salem', pet_type_id: 2, pet_food_type_id: 3},
      {id: 2, name: 'C.D.', pet_type_id: 3, pet_food_type_id: 2},
      {id: 3, name: 'Buddy', pet_type_id: 3, pet_food_type_id: 3},
      {id: 4, name: 'Goldy', pet_type_id: 4, pet_food_type_id: 1},
      {id: 5, name: 'Tweety', pet_type_id: 1, pet_food_type_id: 1}
    ]);
  })
  // return knex('pet').insert([
  //   {id: 1, name: 'Salem', pet_type_id: 2},
  //   {id: 2, name: 'C.D.', pet_type_id: 3},
  //   {id: 3, name: 'Buddy', pet_type_id: 3},
  //   {id: 4, name: 'Goldy', pet_type_id: 4},
  //   {id: 5, name: 'Tweety', pet_type_id: 1}
  // ]);
};
