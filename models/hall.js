'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Hall.belongsTo(models.Theater);
      Hall.hasMany(models.Seat, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Hall.hasMany(models.Show, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  Hall.init({
    theater_id: DataTypes.INTEGER,
    number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hall',
    paranoid: true,
    underscored: true
  });
  return Hall;
};