'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Cities', [
      {
        name: "Surat",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Ahmedabad",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Vadodara",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Patan",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Mahesana",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Mumbai",
        state_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Visnagar",
        state_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
