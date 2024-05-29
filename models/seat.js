'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Seat.belongsTo(models.Hall);
      Seat.belongsTo(models.SeatType);
      Seat.hasOne(models.BookingSeat, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  Seat.init({
    hall_id: DataTypes.INTEGER,
    seat_type_id: DataTypes.INTEGER,
    row_number: DataTypes.INTEGER,
    column_number: DataTypes.INTEGER,
    seat_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Seat',
    paranoid: true,
    underscored: true
  });
  return Seat;
};