'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowSeatPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShowSeatPrice.belongsTo(Show);
      ShowSeatPrice.belongsTo(SeatType);
    }
  }
  ShowSeatPrice.init({
    show_id: DataTypes.INTEGER,
    seat_type_id: DataTypes.INTEGER,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ShowSeatPrice',
    paranoid: true,
    underscored: true
  });
  return ShowSeatPrice;
};