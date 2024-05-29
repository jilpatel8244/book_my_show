'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Languages', [
      {
        name: "Hindi",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Gujarati",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "English",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Telugu",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Tamil",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Korean",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Malayalam",
        created_at: new Date(),
        updated_at: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Languages', null, {});
  }
};
