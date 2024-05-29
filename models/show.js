'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Show.belongsTo(models.Hall);
      Show.belongsTo(models.Movie);
      Show.hasMany(models.ShowSeatPrice, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
      Show.hasMany(models.Booking, {
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      });
    }
  }
  Show.init({
    movie_id: DataTypes.INTEGER,
    hall_id: DataTypes.INTEGER,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    show_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Show',
    paranoid: true,
    underscored: true
  });
  return Show;
};