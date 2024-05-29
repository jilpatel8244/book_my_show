'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: "user",
        description: "user can book the tickets, give rating and reviews to the movies",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "theater_owner",
        description: "theater owner can list theater, halls(screens), seats and create shows",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "movie_owner",
        description: "movie owner can list movies in differnt languages, add info. about casting & crew members etc",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "admin",
        description: "admin do all the things",
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
