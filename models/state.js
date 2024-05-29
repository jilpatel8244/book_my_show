'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      State.hasMany(models.User, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
      State.hasMany(models.City, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  State.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
    paranoid: true,
    underscored: true
  });
  return State;
};