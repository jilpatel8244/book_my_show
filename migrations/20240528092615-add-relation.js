'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.addConstraint('Users', {
        fields: ['role_id'],
        type: 'foreign key',
        name: 'fk_Users_role_id_Roles',
        references: { //Required field
          table: 'Roles',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Users', {
        fields: ['state_id'],
        type: 'foreign key',
        name: 'fk_Users_state_id_States',
        references: { //Required field
          table: 'States',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Users', {
        fields: ['city_id'],
        type: 'foreign key',
        name: 'fk_Users_city_id_Cities',
        references: { //Required field
          table: 'Cities',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('RolePermissions', {
        fields: ['role_id'],
        type: 'foreign key',
        name: 'fk_RolePermissions_role_id_Roles',
        references: { //Required field
          table: 'Roles',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('RolePermissions', {
        fields: ['permission_id'],
        type: 'foreign key',
        name: 'fk_RolePermissions_permission_id_Permissions',
        references: { //Required field
          table: 'Permissions',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Cities', {
        fields: ['state_id'],
        type: 'foreign key',
        name: 'fk_Cities_state_id_States',
        references: { //Required field
          table: 'States',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('MovieMembers', {
        fields: ['movie_id'],
        type: 'foreign key',
        name: 'fk_MovieMembers_movie_id_Movies',
        references: { //Required field
          table: 'Movies',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('MovieMembers', {
        fields: ['member_id'],
        type: 'foreign key',
        name: 'fk_MovieMembers_member_id_CastingAndCrewMembers',
        references: { //Required field
          table: 'CastingAndCrewMembers',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('MovieLanguages', {
        fields: ['movie_id'],
        type: 'foreign key',
        name: 'fk_MovieLanguages_movie_id_Movies',
        references: { //Required field
          table: 'Movies',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('MovieLanguages', {
        fields: ['language_id'],
        type: 'foreign key',
        name: 'fk_MovieLanguages_language_id_Languages',
        references: { //Required field
          table: 'Languages',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('RatingAndReviews', {
        fields: ['movie_id'],
        type: 'foreign key',
        name: 'fk_RatingAndReviews_movie_id_Movies',
        references: { //Required field
          table: 'Movies',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('RatingAndReviews', {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'fk_RatingAndReviews_user_id_Users',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Theaters', {
        fields: ['city_id'],
        type: 'foreign key',
        name: 'fk_Theaters_city_id_Cities',
        references: { //Required field
          table: 'Cities',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Halls', {
        fields: ['theater_id'],
        type: 'foreign key',
        name: 'fk_Halls_theater_id_Theaters',
        references: { //Required field
          table: 'Theaters',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Seats', {
        fields: ['hall_id'],
        type: 'foreign key',
        name: 'fk_Seats_hall_id_Halls',
        references: { //Required field
          table: 'Halls',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Seats', {
        fields: ['seat_type_id'],
        type: 'foreign key',
        name: 'fk_Seats_seat_type_id_SeatTypes',
        references: { //Required field
          table: 'SeatTypes',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Bookings', {
        fields: ['show_id'],
        type: 'foreign key',
        name: 'fk_Bookings_show_id_Shows',
        references: { //Required field
          table: 'Shows',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Bookings', {
        fields: ['user_id'],
        type: 'foreign key',
        name: 'fk_Bookings_user_id_Users',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('BookingSeats', {
        fields: ['booking_id'],
        type: 'foreign key',
        name: 'fk_BookingSeats_booking_id_Bookings',
        references: { //Required field
          table: 'Bookings',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('BookingSeats', {
        fields: ['seat_id'],
        type: 'foreign key',
        name: 'fk_BookingSeats_user_id_Seats',
        references: { //Required field
          table: 'Seats',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Shows', {
        fields: ['movie_id'],
        type: 'foreign key',
        name: 'fk_Shows_movie_id_Movies',
        references: { //Required field
          table: 'Movies',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('Shows', {
        fields: ['hall_id'],
        type: 'foreign key',
        name: 'fk_Shows_hall_id_Halls',
        references: { //Required field
          table: 'Halls',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('ShowSeatPrices', {
        fields: ['show_id'],
        type: 'foreign key',
        name: 'fk_ShowSeatPrices_show_id_Shows',
        references: { //Required field
          table: 'Shows',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });

      await queryInterface.addConstraint('ShowSeatPrices', {
        fields: ['seat_type_id'],
        type: 'foreign key',
        name: 'fk_ShowSeatPrices_seat_type_id_SeatTypes',
        references: { //Required field
          table: 'SeatTypes',
          field: 'id'
        },
        onDelete: 'set null',
        onUpdate: 'cascade'
      });
    } catch (error) {
      console.log(error);
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Users', 'fk_Users_role_id_Roles')
    await queryInterface.removeConstraint('Users', 'fk_Users_state_id_States')
    await queryInterface.removeConstraint('Users', 'fk_Users_city_id_Cities')
    await queryInterface.removeConstraint('RolePermissions', 'fk_RolePermissions_role_id_Roles')
    await queryInterface.removeConstraint('RolePermissions', 'fk_RolePermissions_permission_id_Permissions')
    await queryInterface.removeConstraint('Cities', 'fk_Cities_state_id_States')
    await queryInterface.removeConstraint('MovieMembers', 'fk_MovieMembers_movie_id_Movies')
    await queryInterface.removeConstraint('MovieMembers', 'fk_MovieMembers_member_id_CastingAndCrewMembers')
    await queryInterface.removeConstraint('MovieLanguages', 'fk_MovieLanguages_movie_id_Movies')
    await queryInterface.removeConstraint('MovieLanguages', 'fk_MovieLanguages_language_id_Languages')
    await queryInterface.removeConstraint('RatingAndReviews', 'fk_RatingAndReviews_movie_id_Movies')
    await queryInterface.removeConstraint('RatingAndReviews', 'fk_RatingAndReviews_user_id_Users')
    await queryInterface.removeConstraint('Theaters', 'fk_Theaters_city_id_Cities')
    await queryInterface.removeConstraint('Halls', 'fk_Halls_theater_id_Theaters')
    await queryInterface.removeConstraint('Seats', 'fk_Seats_hall_id_Halls')
    await queryInterface.removeConstraint('Seats', 'fk_Seats_seat_type_id_SeatTypes')
    await queryInterface.removeConstraint('Bookings', 'fk_Bookings_show_id_Shows')
    await queryInterface.removeConstraint('Bookings', 'fk_Bookings_user_id_Users')
    await queryInterface.removeConstraint('BookingSeats', 'fk_BookingSeats_booking_id_Bookings')
    await queryInterface.removeConstraint('BookingSeats', 'fk_BookingSeats_user_id_Seats')
    await queryInterface.removeConstraint('Shows', 'fk_Shows_movie_id_Movies')
    await queryInterface.removeConstraint('Shows', 'fk_Shows_hall_id_Halls')
    await queryInterface.removeConstraint('ShowSeatPrices', 'fk_ShowSeatPrices_show_id_Shows')
    await queryInterface.removeConstraint('ShowSeatPrices', 'fk_ShowSeatPrices_seat_type_id_SeatTypes')
  }
};
