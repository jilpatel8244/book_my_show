'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('States', [
      {
        name: "Gujarat",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Maharastra",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Rajasthan",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Uttar Pradesh",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Delhi",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Goa",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Madhya Pradesh",
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('States', null, {});
  }
};
