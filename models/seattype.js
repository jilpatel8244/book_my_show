'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SeatType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SeatType.hasMany(models.Seat, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      SeatType.hasMany(models.ShowSeatPrice, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  SeatType.init({
    type_name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'SeatType',
    paranoid: true,
    underscored: true
  });
  return SeatType;
};