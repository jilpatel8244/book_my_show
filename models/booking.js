'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.hasMany(models.BookingSeat, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Booking.belongsTo(models.User);
      Booking.belongsTo(models.Show);
    }
  }
  Booking.init({
    user_id: DataTypes.INTEGER,
    show_id: DataTypes.INTEGER,
    booking_time: DataTypes.DATE,
    no_of_tickets: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Booking',
    paranoid: true,
    underscored: true
  });
  return Booking;
};