'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SeatTypes', [
      {
        type_name: "silver",
        description: "near to the screen",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_name: "gold",
        description: "good viewing angle",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        type_name: "platinum",
        description: "comfortable seats",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SeatTypes', null, {});
  }
};
